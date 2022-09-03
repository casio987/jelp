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
exports.Database = void 0;
const typeorm_1 = require("typeorm");
const Logger_1 = require("./Logger");
require("dotenv/config");
const user_1 = require("../entities/user");
const companyReview_1 = require("../entities/companyReview");
const interviewReview_1 = require("../entities/interviewReview");
const seed_1 = require("../utils/seed");
class Database {
    constructor() {
        this.getManager = () => (this.dbConnection.manager);
        this.start = () => __awaiter(this, void 0, void 0, function* () {
            yield this.dbConnection.initialize();
            this.logger.info('started connection to db');
            yield (0, seed_1.seed)(this.dbConnection.manager);
        });
        this.stop = () => __awaiter(this, void 0, void 0, function* () {
            if (this.dbConnection.isInitialized)
                yield this.dbConnection.destroy();
        });
        const connectionOptions = process.env.DATABASE_URL ? {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: [
                user_1.UserEntity,
                companyReview_1.CompanyReviewEntity,
                interviewReview_1.InterviewReviewEntity
            ],
            synchronize: true,
            logging: false,
            ssl: true,
        } : {
            type: "postgres",
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            synchronize: true,
            logging: false,
            entities: [
                user_1.UserEntity,
                companyReview_1.CompanyReviewEntity,
                interviewReview_1.InterviewReviewEntity
            ],
            migrations: [],
            subscribers: [],
        };
        this.dbConnection = new typeorm_1.DataSource(connectionOptions);
        this.logger = (0, Logger_1.getLogger)();
    }
}
exports.Database = Database;
