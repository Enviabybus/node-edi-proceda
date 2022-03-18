export class EdiFtpClientError extends Error {}

export class EdiFtpClientFileNotFoundError extends EdiFtpClientError {
  constructor(fileName: string) {
    super(`FTP file not found: ${fileName}`);
  }
}
