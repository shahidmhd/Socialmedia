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
exports.googleLogin = exports.adminlogin = exports.userLogin = exports.userRegister = void 0;
const httpstatus_1 = require("../../../types/httpstatus");
const appError_1 = __importDefault(require("../../../util/appError"));
const userRegister = (user, userRepository, authService) => __awaiter(void 0, void 0, void 0, function* () {
    user.email = user.email.toLowerCase();
    const isExistingEmail = yield userRepository.getUserByEmail(user.email);
    const isExistingUserName = yield userRepository.getUserByUserName(user.userName);
    if (isExistingUserName) {
        throw new appError_1.default("This Username is already taken", httpstatus_1.HttpStatus.UNAUTHORIZED);
    }
    if (isExistingEmail) {
        throw new appError_1.default("An account is already registered with this mail", httpstatus_1.HttpStatus.UNAUTHORIZED);
    }
    if (user.password.length <= 3) {
        throw new appError_1.default("Password Empty", httpstatus_1.HttpStatus.BAD_REQUEST);
    }
    user.password = yield authService.encryptPassword(user.password);
    const users = yield userRepository.addUser(user);
    const userId = users._id;
    const token = authService.generateToken(userId.toString());
    return { token, user: users };
});
exports.userRegister = userRegister;
const userLogin = (userName, password, userRepository, authService) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userRepository.getUserByUserName(userName);
    if (!user) {
        throw new appError_1.default("This user does not exist", httpstatus_1.HttpStatus.UNAUTHORIZED);
    }
    const isPasswordCorrect = yield authService.comparePassword(password, user.password);
    if (!isPasswordCorrect) {
        throw new appError_1.default("Sorry, your password was incorrect. Please check your password", httpstatus_1.HttpStatus.UNAUTHORIZED);
    }
    if (user.isBlocked) {
        throw new appError_1.default("Sorry, your account is blocked by admin", httpstatus_1.HttpStatus.UNAUTHORIZED);
    }
    const token = authService.generateToken(user._id.toString());
    return { token, user };
});
exports.userLogin = userLogin;
const adminlogin = (userName, password, adminRepository, authService) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(userName, password, "sghaus");
    const admin = yield adminRepository.getAdminByuserName(userName);
    console.log(admin);
    if (!admin) {
        throw new appError_1.default("This admin does not exist", httpstatus_1.HttpStatus.UNAUTHORIZED);
    }
    const isPasswordCorrect = yield authService.comparePassword(password, admin.password);
    if (!isPasswordCorrect) {
        throw new appError_1.default("Sorry, your password was incorrect. Please check your password", httpstatus_1.HttpStatus.UNAUTHORIZED);
    }
    const token = authService.generateToken(admin._id.toString());
    return { token, admin };
});
exports.adminlogin = adminlogin;
const googleLogin = (name, userName, email, userRepository, authService) => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        userName,
        name,
        email,
    };
    const isUserExist = yield userRepository.getUserByEmail(email);
    if (isUserExist) {
        const token = authService.generateToken(isUserExist._id.toString());
        return { token, user: isUserExist };
    }
    else {
        const userDetails = yield userRepository.addUser(user);
        const token = authService.generateToken(userDetails._id.toString());
        return { token, user: userDetails };
    }
});
exports.googleLogin = googleLogin;
