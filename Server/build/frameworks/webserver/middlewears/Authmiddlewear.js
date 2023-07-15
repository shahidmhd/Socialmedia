"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpstatus_1 = require("../../../types/httpstatus");
const appError_1 = __importDefault(require("../../../util/appError"));
const authService_1 = require("../../services/authService");
const userAuthMiddleware = (req, res, next) => {
    let token = "";
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        throw new appError_1.default("Token not found", httpstatus_1.HttpStatus.UNAUTHORIZED);
    }
    try {
        const { payload } = (0, authService_1.authService)().verifyToken(token);
        next();
    }
    catch (err) {
        throw new appError_1.default("UnAuthorized User", httpstatus_1.HttpStatus.UNAUTHORIZED);
    }
};
exports.default = userAuthMiddleware;
