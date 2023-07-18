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
exports.userById = exports.userHandle = exports.allUsers = void 0;
const httpstatus_1 = require("../../../types/httpstatus");
const appError_1 = __importDefault(require("../../../util/appError"));
const allUsers = (repository) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield repository.getAllUsers();
    if (!users) {
        throw new appError_1.default("user not found", httpstatus_1.HttpStatus.UNAUTHORIZED);
    }
    return users;
});
exports.allUsers = allUsers;
const userHandle = (id, repository) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield repository.userHandle(id);
    if (!result) {
        throw new appError_1.default("Cannot find User", httpstatus_1.HttpStatus.FORBIDDEN);
    }
    return result;
});
exports.userHandle = userHandle;
const userById = (id, repository) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield repository.getUserById(id);
    if (!user) {
        throw new appError_1.default("user not found", httpstatus_1.HttpStatus.UNAUTHORIZED);
    }
    return user;
});
exports.userById = userById;
