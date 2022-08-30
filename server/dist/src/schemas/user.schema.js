"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.AuthSchema = joi_1.default.object({
    email: joi_1.default.string().required(),
    password: joi_1.default.string().required()
}).required();
