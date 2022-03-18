"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdiFtpClient = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
const dayjs_1 = __importDefault(require("dayjs"));
const timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const basic_ftp_1 = require("basic-ftp");
const path_1 = __importDefault(require("path"));
const stream_1 = __importDefault(require("stream"));
const edi_ftp_client_error_1 = require("../errors/clients/edi-ftp-client.error");
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(timezone_1.default);
// #endregion typings
const PROCESSED_DIR_NAME = 'processados';
class EdiFtpClient {
    constructor({ host, notfisDir, password, port, user, }) {
        this.host = host;
        this.notfisDir = notfisDir;
        this.password = password;
        this.port = port;
        this.user = user;
    }
    getNotfis(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const filePath = path_1.default.join(this.notfisDir, fileName);
            return this.getFile(filePath);
        });
    }
    listNotfis() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.listDir(this.notfisDir);
        });
    }
    moveAllNotfisToProcessed() {
        return __awaiter(this, void 0, void 0, function* () {
            const notfisProcessedDir = path_1.default.join(this.notfisDir, PROCESSED_DIR_NAME);
            yield this.moveAllFilesWithTimestamp(this.notfisDir, notfisProcessedDir);
        });
    }
    createClient() {
        return __awaiter(this, void 0, void 0, function* () {
            const ftp = require('basic-ftp');
            const client = new ftp.Client();
            yield client.access({
                host: this.host,
                password: this.password,
                port: this.port,
                user: this.user,
            });
            return client;
        });
    }
    getFile(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.createClient();
            const stream = new stream_1.default.Writable();
            try {
                let content = '';
                stream._write = (chunk, _encoding, next) => {
                    content += chunk.toString();
                    next();
                };
                yield client.downloadTo(stream, filePath);
                return content;
            }
            catch (err) {
                if (err instanceof basic_ftp_1.FTPError && err.message.includes('Failed to open file')) {
                    throw new edi_ftp_client_error_1.EdiFtpClientFileNotFoundError(filePath);
                }
                throw err;
            }
            finally {
                stream.end();
                client.close();
            }
        });
    }
    listDir(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.createClient();
            try {
                const filesInfos = yield client.list(path);
                return filesInfos.filter(f => f.isFile).map(f => {
                    const currentYear = new Date().getFullYear();
                    return {
                        modifiedAt: (0, dayjs_1.default)(f.rawModifiedAt).set('year', currentYear).utc(true).toDate(),
                        name: f.name,
                    };
                });
            }
            finally {
                client.close();
            }
        });
    }
    moveAllFilesWithTimestamp(dirPath, newDirPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = yield this.listDir(dirPath);
            for (const file of files) {
                yield this.moveFileWithTimestamp(file.name, dirPath, newDirPath);
            }
        });
    }
    moveFileWithTimestamp(fileName, dirPath, newDirPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.createClient();
            try {
                yield client.ensureDir(newDirPath);
                const filePath = path_1.default.join('/', dirPath, fileName);
                const timestamp = (0, dayjs_1.default)().format('YYYYMMDDHHmmss');
                const newFilePath = path_1.default.join('/', newDirPath, `${timestamp}-${fileName}`);
                yield client.rename(filePath, newFilePath);
            }
            finally {
                client.close();
            }
        });
    }
}
exports.EdiFtpClient = EdiFtpClient;
exports.default = EdiFtpClient;
//# sourceMappingURL=edi-ftp.client.js.map