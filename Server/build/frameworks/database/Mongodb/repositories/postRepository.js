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
exports.postRepositoryImp = void 0;
const postModel_1 = __importDefault(require("../Models/postModel"));
const postRepositoryImp = () => {
    const createPost = (post) => __awaiter(void 0, void 0, void 0, function* () {
        const newPost = yield new postModel_1.default(post);
        return yield newPost.save();
    });
    const getAllPost = () => __awaiter(void 0, void 0, void 0, function* () {
        const allpost = yield postModel_1.default.find().sort({ createdAt: -1 }).populate('userId');
        console.log(allpost, "hiiiiii");
        return allpost;
    });
    const getUserPosts = (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield postModel_1.default.find({ userId: id }).sort({ createdAt: -1 });
    });
    const likePost = (id, loggedId) => __awaiter(void 0, void 0, void 0, function* () {
        const post = yield postModel_1.default.findById({ _id: id });
        if (!post.likes.includes(loggedId)) {
            yield post.updateOne({
                $push: {
                    likes: loggedId,
                },
            }, { new: true });
        }
        else {
            yield post.updateOne({
                $pull: {
                    likes: loggedId,
                },
            }, { new: true });
        }
        const data = yield postModel_1.default.findById({ _id: id });
        return data;
    });
    return {
        createPost,
        getAllPost,
        getUserPosts,
        likePost
    };
};
exports.postRepositoryImp = postRepositoryImp;
