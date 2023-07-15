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
exports.userRepositoryMongoDB = void 0;
const userModel_1 = __importDefault(require("../Models/userModel"));
const userRepositoryMongoDB = () => {
    const addUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = yield new userModel_1.default(user);
        return yield newUser.save();
    });
    const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userModel_1.default.findOne({ email });
        return user;
    });
    const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userModel_1.default.findOne({ _id: id });
        return user;
    });
    const getUserByUserName = (userName) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userModel_1.default.findOne({ userName });
        return user;
    });
    const getAllusers = () => __awaiter(void 0, void 0, void 0, function* () {
        return yield userModel_1.default.find();
    });
    const userHandle = (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield userModel_1.default.findOne({ _id: id });
            if (!user) {
                return;
            }
            const newIsBlocked = !user.isBlocked;
            user.isBlocked = newIsBlocked;
            return yield user.save();
        }
        catch (error) {
            console.error(`Error updating user with ID ${id}:`, error);
        }
    });
    return {
        addUser,
        getUserByEmail,
        getUserById,
        getUserByUserName,
        getAllusers,
        userHandle
    };
};
exports.userRepositoryMongoDB = userRepositoryMongoDB;
