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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const Logger_1 = require("../components/Logger");
const user_1 = require("../entities/user");
const Error_1 = require("../components/Error");
const crypt_1 = require("../utils/crypt");
class UserService {
    constructor(manager) {
        this.logger = (0, Logger_1.getLogger)();
        this.registerUser = (email, password) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.manager
                    .createQueryBuilder(user_1.UserEntity, "user")
                    .where("user.email = :email", { email: email })
                    .getOne();
                if (user) {
                    this.logger.info(`An error occurreed when attempting to create a user with an already exisitng email '${email}'.`);
                    throw new Error_1.HTTPError(409, "User with that email already exists.");
                }
                else {
                    // hash password
                    const hashedPassword = (0, crypt_1.hash)(password);
                    const newUser = new user_1.UserEntity();
                    newUser.email = email;
                    newUser.password = hashedPassword;
                    yield this.manager.save(newUser);
                    this.logger.info(`Created user with email '${email}'.`);
                    const token = (0, crypt_1.generateToken)(newUser.id);
                    return token;
                }
            }
            catch (err) {
                throw err;
            }
        });
        this.loginUser = (email, password) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.manager
                    .createQueryBuilder(user_1.UserEntity, "user")
                    .where("user.email = :email", { email: email })
                    .getOne();
                if (user) {
                    if ((0, crypt_1.hash)(password) === user.password) {
                        const token = (0, crypt_1.generateToken)(user.id);
                        return token;
                    }
                    else {
                        this.logger.info(`User with email '${email}' failed to provide a correct password.`);
                        throw new Error_1.HTTPError(401, "Invalid credentials.");
                    }
                }
                else {
                    this.logger.info(`No user found with the given email '${email}'.`);
                    throw new Error_1.HTTPError(401, "User with that email does not exist.");
                }
            }
            catch (err) {
                throw err;
            }
        });
        this.manager = manager;
    }
}
exports.UserService = UserService;
