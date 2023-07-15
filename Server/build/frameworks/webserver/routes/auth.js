"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authServiceinterface_1 = require("../../../application/services/authServiceinterface");
const authService_1 = require("../../services/authService");
const userDbRepository_1 = require("../../../application/repositories/userDbRepository");
const userRepository_1 = require("../../database/Mongodb/repositories/userRepository");
const authcontrollers_1 = __importDefault(require("../../../adapters/controllers/authcontrollers"));
const adminDbrepositoryinterface_1 = require("../../../application/repositories/adminDbrepositoryinterface");
const adminRepository_1 = require("../../database/Mongodb/repositories/adminRepository");
const authRouter = () => {
    const router = express_1.default.Router();
    const controller = (0, authcontrollers_1.default)(authServiceinterface_1.authServiceInterface, authService_1.authService, userDbRepository_1.userDbRepository, userRepository_1.userRepositoryMongoDB, adminDbrepositoryinterface_1.adminDbRepository, adminRepository_1.adminRepositoryMongoDB);
    router.post('/register', controller.registerUser);
    router.post('/login', controller.loginUser);
    router.post('/adminLogin', controller.adminLogin);
    router.post('/googleLogin', controller.googleLoginUser);
    return router;
};
exports.default = authRouter;
