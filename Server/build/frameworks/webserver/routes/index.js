"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./auth"));
const post_1 = __importDefault(require("./post"));
const user_1 = __importDefault(require("./user"));
const Authmiddlewear_1 = __importDefault(require("../middlewears/Authmiddlewear"));
const routes = (app) => {
    app.use("/api/auth", (0, auth_1.default)());
    app.use("/api/post", Authmiddlewear_1.default, (0, post_1.default)());
    app.use("/api/user", (0, user_1.default)());
};
exports.default = routes;
