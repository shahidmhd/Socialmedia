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
exports.validationMiddleware = void 0;
const appError_1 = __importDefault(require("../../../util/appError"));
const validationMiddleware = (schema, field = 'body') => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = schema.safeParse(req[field]);
        if (!result.success) {
            console.log(result.error.errors[0].message);
            const errorMessage = result.error.errors[0].message || "validation error";
            throw new appError_1.default(errorMessage, 400);
        }
        req.body = result.data;
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.validationMiddleware = validationMiddleware;
