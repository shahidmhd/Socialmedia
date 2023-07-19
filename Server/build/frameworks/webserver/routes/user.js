"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userDbRepository_1 = require("../../../application/repositories/userDbRepository");
const userRepository_1 = require("../../database/Mongodb/repositories/userRepository");
const usercontroller_1 = __importDefault(require("../../../adapters/controllers/usercontroller"));
const Authmiddlewear_1 = __importDefault(require("../middlewears/Authmiddlewear"));
const upload_1 = __importDefault(require("../../services/upload"));
const userRouter = () => {
    const router = express_1.default.Router();
    const controller = (0, usercontroller_1.default)(userDbRepository_1.userDbRepository, userRepository_1.userRepositoryMongoDB);
    router.get("/getUsers", controller.getAllUsers);
    router.put("/:id/userHandle", controller.handleUser);
    router.get("/:id", Authmiddlewear_1.default, controller.getUserById);
    router.put("/:id/updateprofile", upload_1.default.single("image"), controller.updateProfile);
    router.put("/:friendId/follow", Authmiddlewear_1.default, controller.putFollowUser);
    return router;
};
exports.default = userRouter;
