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
exports.UserRouter = void 0;
const express_1 = require("express");
const validation_middleware_1 = __importDefault(require("../middleware/validation.middleware"));
const user_service_1 = require("../services/user.service");
const user_schema_1 = require("../schemas/user.schema");
class UserRouter {
    constructor(manager) {
        this.router = (0, express_1.Router)();
        this.initialiseRoutes = () => {
            this.router
                .post('/user/register', (0, validation_middleware_1.default)(user_schema_1.AuthSchema), this.register)
                .post('/user/login', (0, validation_middleware_1.default)(user_schema_1.AuthSchema), this.login);
        };
        this.register = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const token = yield this.userService.registerUser(email, password);
                res.status(200).json(token);
            }
            catch (err) {
                return res.status(err.status).json(err.message);
            }
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const token = yield this.userService.loginUser(email, password);
                res.status(200).json(token);
            }
            catch (err) {
                return res.status(err.status).json(err.message);
            }
        });
        this.getRouter = () => this.router;
        this.manager = manager;
        this.userService = new user_service_1.UserService(this.manager);
        this.initialiseRoutes();
    }
}
exports.UserRouter = UserRouter;
