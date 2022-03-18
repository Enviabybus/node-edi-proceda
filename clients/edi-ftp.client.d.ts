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
export declare class EdiFtpClient implements SimpressFtpClientDependencies {
    host: string;
    notfisDir: string;
    password: string;
    port: number;
    user: string;
    constructor({ host, notfisDir, password, port, user, }: SimpressFtpClientDependencies);
    getNotfis(fileName: string): Promise<string>;
    listNotfis(): Promise<FileInfo[]>;
    moveAllNotfisToProcessed(): Promise<void>;
    private createClient;
    private getFile;
    private listDir;
    private moveAllFilesWithTimestamp;
    private moveFileWithTimestamp;
}
export default EdiFtpClient;
//# sourceMappingURL=edi-ftp.client.d.ts.map