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
// import cloudinary from "../../frameworks/services/cloudstorage";
const cloudstorage_1 = __importDefault(require("../../frameworks/services/cloudstorage"));
const post_1 = require("../../application/useCases/post/post");
const postController = (postDbInterface, postDbImp) => {
    const dbRepositoryPost = postDbInterface(postDbImp());
    const createpost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const files = req.files;
        const image = [];
        for (const file of files) {
            const result = yield cloudstorage_1.default.uploader.upload(file.path);
            const url = result.secure_url;
            image.push(url);
        }
        console.log(image, "imageurls");
        console.log(req.body, "userdatassss");
        const { userId, description, userName } = req.body;
        console.log(userId, description, userName);
        const post = { userId, description, image, userName };
        const newPost = yield (0, post_1.postCreate)(post, dbRepositoryPost);
        res.json({
            status: "success",
            newPost,
        });
    }));
    const getPosts = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const posts = yield (0, post_1.getAllPosts)(dbRepositoryPost);
        res.json({
            status: "success",
            posts
        });
    }));
    return {
        createpost,
        getPosts
    };
};
exports.default = postController;
