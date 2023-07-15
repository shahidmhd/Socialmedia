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
exports.getAllPosts = exports.postCreate = void 0;
const httpstatus_1 = require("../../../types/httpstatus");
const appError_1 = __importDefault(require("../../../util/appError"));
const postCreate = (post, repository) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = yield repository.createPost(post);
    if (!newPost) {
        throw new appError_1.default("post not created", httpstatus_1.HttpStatus.BAD_REQUEST);
    }
    return newPost;
});
exports.postCreate = postCreate;
const getAllPosts = (repository) => __awaiter(void 0, void 0, void 0, function* () {
    const getPosts = yield repository.getAllPost();
    if (!getPosts) {
        throw new appError_1.default("Posts Are not Available", httpstatus_1.HttpStatus.BAD_REQUEST);
    }
    return getPosts;
});
exports.getAllPosts = getAllPosts;
