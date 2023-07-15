"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
exports.default = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({}),
    limits: {
        files: 4,
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: (req, file, cb) => {
        let ext = path_1.default.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".webp") {
            cb(null, false);
        }
        else {
            cb(null, true);
        }
    },
});
