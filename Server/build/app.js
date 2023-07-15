"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const server_1 = __importDefault(require("./frameworks/webserver/server"));
const express_2 = __importDefault(require("./frameworks/webserver/express"));
const connection_1 = __importDefault(require("./frameworks/database/Mongodb/Connection/connection"));
const routes_1 = __importDefault(require("./frameworks/webserver/routes"));
const cors_1 = __importDefault(require("cors"));
const errorHandlingMiddlewear_1 = __importDefault(require("./frameworks/webserver/middlewears/errorHandlingMiddlewear"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
(0, express_2.default)(app);
app.use((0, cors_1.default)());
//connecting mongoDb
(0, connection_1.default)();
(0, routes_1.default)(app);
app.use(errorHandlingMiddlewear_1.default);
(0, server_1.default)(server).startServer();
