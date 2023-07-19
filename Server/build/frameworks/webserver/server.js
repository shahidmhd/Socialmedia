"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config"));
const serverConfig = (server) => {
    const startServer = () => {
        server.listen(config_1.default.PORT, () => {
            console.log('\x1b[34m%s\x1b[0m', `Server listening at http://localhost:${config_1.default.PORT}`);
        });
    };
    return {
        startServer
    };
};
exports.default = serverConfig;
