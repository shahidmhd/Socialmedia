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
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userAuth_1 = require("../../application/useCases/auth/userAuth");
const authController = (authServiceInterface, authServiceImpl, userDbRepository, userDbRepositoryImpl, adminDbRepository, adminDbRepositoryImpl) => {
    const dbRepositoryUser = userDbRepository(userDbRepositoryImpl());
    const authService = authServiceInterface(authServiceImpl());
    const dbRepositoryAdmin = adminDbRepository(adminDbRepositoryImpl());
    const registerUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body, "req.body");
        const { name, userName, email, number, password } = req.body;
        console.log(name, "bhvdxvdxjvdxkjv");
        const user = {
            name,
            userName,
            email,
            number,
            password,
        };
        const token = yield (0, userAuth_1.userRegister)(user, dbRepositoryUser, authService);
        console.log(token, "token");
        res.json({
            status: "success",
            message: "new user registered",
            token: token,
        });
    }));
    const loginUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { userName, password } = req.body;
        const token = yield (0, userAuth_1.userLogin)(userName, password, dbRepositoryUser, authService);
        res.json({
            status: "success",
            message: "user verified",
            token,
        });
    }));
    const adminLogin = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { userName, password } = req.body;
        const admintoken = yield (0, userAuth_1.adminlogin)(userName, password, dbRepositoryAdmin, authService);
        res.json({
            status: "success",
            message: "user verified",
            admintoken,
        });
    }));
    const googleLoginUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        const name = (_a = req.body) === null || _a === void 0 ? void 0 : _a.name;
        const userName = (_b = req.body) === null || _b === void 0 ? void 0 : _b.userName;
        const email = (_c = req.body) === null || _c === void 0 ? void 0 : _c.email;
        const token = yield (0, userAuth_1.googleLogin)(name, userName, email, dbRepositoryUser, authService);
        res.json({
            status: "success",
            message: "new user registered",
            token: token,
        });
    }));
    return {
        registerUser,
        loginUser,
        adminLogin,
        googleLoginUser
    };
};
exports.default = authController;
