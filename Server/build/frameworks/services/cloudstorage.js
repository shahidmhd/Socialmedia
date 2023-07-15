"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
// Configuration
cloudinary_1.v2.config({
    cloud_name: "dxe7xokgr",
    api_key: "234154323143947",
    api_secret: "XqsKt8Yy81uw4t4uUEkgsp6fmgI"
});
exports.default = cloudinary_1.v2;
