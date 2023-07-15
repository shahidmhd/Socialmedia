"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postcontrollers_1 = __importDefault(require("../../../adapters/controllers/postcontrollers"));
const upload_1 = __importDefault(require("../../services/upload"));
const postDbrepositoryinterface_1 = require("../../../application/repositories/postDbrepositoryinterface");
const postRepository_1 = require("../../database/Mongodb/repositories/postRepository");
const postRouter = () => {
    const router = express_1.default.Router();
    const controller = (0, postcontrollers_1.default)(postDbrepositoryinterface_1.postDbInterface, postRepository_1.postRepositoryImp);
    router.post("/", upload_1.default.array('picture', 4), controller.createpost);
    router.get("/", controller.getPosts);
    return router;
};
exports.default = postRouter;
