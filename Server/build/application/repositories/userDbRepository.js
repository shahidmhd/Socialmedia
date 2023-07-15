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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDbRepository = void 0;
const userDbRepository = (repository) => {
    const addUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.addUser(user);
    });
    const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () { return yield repository.getAllusers(); });
    const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () { return yield repository.getUserByEmail(email); });
    const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield repository.getUserById(id); });
    const getUserByUserName = (userName) => __awaiter(void 0, void 0, void 0, function* () { return yield repository.getUserByUserName(userName); });
    const userHandle = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield repository.userHandle(id); });
    return {
        addUser,
        getUserByEmail,
        getUserById,
        getUserByUserName,
        getAllUsers,
        userHandle
    };
};
exports.userDbRepository = userDbRepository;
