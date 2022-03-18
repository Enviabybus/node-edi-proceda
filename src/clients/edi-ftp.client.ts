/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import dayjs from 'dayjs';
import dayjsTimezonePlugin from 'dayjs/plugin/timezone';
import dayjsUtcPlugin from 'dayjs/plugin/utc';
import ftp, { FTPError } from 'basic-ftp';
import path from 'path';
import Stream from 'stream';

import { EdiFtpClientFileNotFoundError } from '../errors/clients/edi-ftp-client.error';

dayjs.extend(dayjsUtcPlugin);
dayjs.extend(dayjsTimezonePlugin);

// #region typings
interface FileInfo {
  modifiedAt: Date;
  name: string;
}

interface SimpressFtpClientDependencies {
  host: string;
  notfisDir: string;
  password: string;
  port: number;
  user: string;
}
// #endregion typings

const PROCESSED_DIR_NAME = 'processados';

export class EdiFtpClient implements SimpressFtpClientDependencies {
  host: string;
  notfisDir: string;
  password: string;
  port: number;
  user: string;

  constructor({
    host,
    notfisDir,
    password,
    port,
    user,
  }: SimpressFtpClientDependencies) {
    this.host = host;
    this.notfisDir = notfisDir;
    this.password = password;
    this.port = port;
    this.user = user;
  }

  async getNotfis(fileName: string): Promise<string> {
    const filePath = path.join(this.notfisDir, fileName);
    return this.getFile(filePath);
  }

  async listNotfis(): Promise<FileInfo[]> {
    return this.listDir(this.notfisDir);
  }

  async moveAllNotfisToProcessed(): Promise<void> {
    const notfisProcessedDir = path.join(this.notfisDir, PROCESSED_DIR_NAME);
    await this.moveAllFilesWithTimestamp(this.notfisDir, notfisProcessedDir);
  }

  private async createClient(): Promise<ftp.Client> {
    const ftp = require('basic-ftp');
    const client: ftp.Client = new ftp.Client();

    await client.access({
      host: this.host,
      password: this.password,
      port: this.port,
      user: this.user,
    });

    return client;
  }

  private async getFile(filePath: string): Promise<string> {
    const client = await this.createClient();
    const stream = new Stream.Writable();

    try {
      let content = '';

      stream._write = (chunk: string, _encoding: string, next: () => void): void => {
        content += chunk.toString();
        next();
      };

      await client.downloadTo(stream, filePath);

      return content;
    } catch (err) {
      if (err instanceof FTPError && err.message.includes('Failed to open file')) {
        throw new EdiFtpClientFileNotFoundError(filePath);
      }

      throw err;
    } finally {
      stream.end();
      client.close();
    }
  }

  private async listDir(path: string): Promise<FileInfo[]> {
    const client = await this.createClient();

    try {
      const filesInfos = await client.list(path);
      return filesInfos.filter(f => f.isFile).map(f => {
        const currentYear = new Date().getFullYear();
        return {
          modifiedAt: dayjs(f.rawModifiedAt).set('year', currentYear).utc(true).toDate(),
          name: f.name,
        };
      });
    } finally {
      client.close();
    }
  }

  private async moveAllFilesWithTimestamp(dirPath: string, newDirPath: string): Promise<void> {
    const files = await this.listDir(dirPath);

    for (const file of files) {
      await this.moveFileWithTimestamp(file.name, dirPath, newDirPath);
    }
  }

  private async moveFileWithTimestamp(fileName: string, dirPath: string, newDirPath: string): Promise<void> {
    const client = await this.createClient();

    try {
      await client.ensureDir(newDirPath);

      const filePath = path.join('/', dirPath, fileName);
      const timestamp = dayjs().format('YYYYMMDDHHmmss');
      const newFilePath = path.join('/', newDirPath, `${timestamp}-${fileName}`);
      await client.rename(filePath, newFilePath);
    } finally {
      client.close();
    }
  }
}

export default EdiFtpClient;
