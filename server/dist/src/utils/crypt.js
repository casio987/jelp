"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = exports.hash = void 0;
const crypto_1 = __importDefault(require("crypto"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Error_1 = require("../components/Error");
const hash = (password) => {
    return crypto_1.default.createHash("sha512").update(password).digest("hex");
};
exports.hash = hash;
const generateToken = (id) => {
    const token = jsonwebtoken_1.default.sign({ id: id }, process.env.JWT_SECRET, {
        // TODO: current placeholder
        expiresIn: "1d"
    });
    return token;
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        return payload;
    }
    catch (err) {
        throw new Error_1.HTTPError(401, "Unauthorised user.");
    }
};
exports.verifyToken = verifyToken;
