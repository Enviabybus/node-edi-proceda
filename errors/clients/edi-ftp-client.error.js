"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdiFtpClientFileNotFoundError = exports.EdiFtpClientError = void 0;
class EdiFtpClientError extends Error {
}
exports.EdiFtpClientError = EdiFtpClientError;
class EdiFtpClientFileNotFoundError extends EdiFtpClientError {
    constructor(fileName) {
        super(`FTP file not found: ${fileName}`);
    }
}
exports.EdiFtpClientFileNotFoundError = EdiFtpClientFileNotFoundError;
//# sourceMappingURL=edi-ftp-client.error.js.map