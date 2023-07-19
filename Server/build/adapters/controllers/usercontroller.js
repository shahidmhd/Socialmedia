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
const user_1 = require("../../application/useCases/user/user");
const cloudstorage_1 = __importDefault(require("../../frameworks/services/cloudstorage"));
const userController = (userDbRepository, userDbRepositoryImpl) => {
    const dbRepositoryUser = userDbRepository(userDbRepositoryImpl());
    const getAllUsers = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield (0, user_1.allUsers)(dbRepositoryUser);
        res.json({
            status: "success",
            users,
        });
    }));
    const handleUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const isBlocked = yield (0, user_1.userHandle)(id, dbRepositoryUser);
        res.json({
            status: "success",
            isBlocked,
        });
    }));
    const getUserById = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const user = yield (0, user_1.userById)(id, dbRepositoryUser);
        res.json({
            status: "success",
            user,
        });
    }));
    const updateProfile = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const images = (_a = req === null || req === void 0 ? void 0 : req.file) === null || _a === void 0 ? void 0 : _a.path;
        const image = yield cloudstorage_1.default.uploader.upload(images);
        const url = image.url;
        const { name, userName, email, number, Bio } = req.body;
        const { id } = req.params;
        const user = {
            name,
            userName,
            email,
            number,
            Bio,
            image: url
        };
        const updatedProfile = yield (0, user_1.profileUpdate)(id, user, dbRepositoryUser);
        res.json({
            status: "success",
            updatedProfile,
        });
    }));
    const putFollowUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { friendId } = req.params;
        const { id } = req.body;
        const result = yield (0, user_1.followUser)(id, friendId, dbRepositoryUser);
        res.json({
            status: "success",
            message: "follow request successfully",
            result,
        });
    }));
    return {
        getAllUsers,
        handleUser,
        getUserById,
        updateProfile,
        putFollowUser
    };
};
exports.default = userController;
