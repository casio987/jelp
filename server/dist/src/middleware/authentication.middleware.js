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
exports.authenticationMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypt_1 = require("../utils/crypt");
function authenticationMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const bearer = req.headers.authorization;
        if (!bearer || !bearer.startsWith("Bearer ")) {
            return res.status(401).json("Unauthorised user.");
        }
        const token = bearer.split(" ")[1].trim();
        try {
            const payload = (0, crypt_1.verifyToken)(token);
            if (payload instanceof jsonwebtoken_1.default.JsonWebTokenError) {
                return res.status(401).json("Unauthorised user.");
            }
            req.userId = payload.id;
            return next();
        }
        catch (err) {
            return res.status(401).json("Unauthorised user.");
        }
    });
}
exports.authenticationMiddleware = authenticationMiddleware;
