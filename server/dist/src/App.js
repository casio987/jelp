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
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Database_1 = require("./components/Database");
const Logger_1 = require("./components/Logger");
const user_router_1 = require("./routers/user.router");
const interview_router_1 = require("./routers/interview.router");
const company_router_1 = require("./routers/company.router");
class App {
    constructor(port) {
        this.db = new Database_1.Database();
        this.setUpExpress = () => {
            const app = (0, express_1.default)()
                .use((0, cors_1.default)())
                .use(express_1.default.json())
                .use(express_1.default.urlencoded({ extended: true }));
            return app;
        };
        this.setUpRouters = (routers) => {
            routers.forEach((router) => {
                this.express.use("/api", router.getRouter());
            });
        };
        this.start = () => __awaiter(this, void 0, void 0, function* () {
            this.logger.info('attempting to start server');
            this.express.listen(this.port);
            yield this.db.start();
            this.logger.info(`server listening on port ${this.port}`);
        });
        this.stop = () => __awaiter(this, void 0, void 0, function* () {
            yield this.db.stop();
        });
        this.port = port;
        this.express = this.setUpExpress();
        this.manager = this.db.getManager();
        this.logger = (0, Logger_1.getLogger)();
        const userRouter = new user_router_1.UserRouter(this.manager);
        const interviewRouter = new interview_router_1.InterviewRouter(this.manager);
        const companyRouter = new company_router_1.CompanyRouter(this.manager);
        this.setUpRouters([
            userRouter,
            interviewRouter,
            companyRouter
        ]);
    }
}
exports.App = App;
