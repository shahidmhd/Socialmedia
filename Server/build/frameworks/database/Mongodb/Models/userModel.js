"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        // unique: true,
    },
    number: {
        type: Number,
        // unique: true,
    },
    password: {
        type: String,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    Bio: {
        type: String,
    },
    image: {
        type: String
    }
}, { timestamps: true });
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
