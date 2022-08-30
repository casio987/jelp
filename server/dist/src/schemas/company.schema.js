"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCompanyReviewSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.PostCompanyReviewSchema = joi_1.default.object({
    jobTitle: joi_1.default.string().required(),
    atCompany: joi_1.default.string().required(),
    experience: joi_1.default.string().required(),
    rating: joi_1.default.number().required(),
    isCurrentEmployee: joi_1.default.boolean().required()
}).required();
