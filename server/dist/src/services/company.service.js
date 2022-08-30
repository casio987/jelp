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
exports.CompanyService = void 0;
const Error_1 = require("../components/Error");
const Logger_1 = require("../components/Logger");
const companyReview_1 = require("../entities/companyReview");
const user_1 = require("../entities/user");
class CompanyService {
    constructor(manager) {
        this.logger = (0, Logger_1.getLogger)();
        this.postCompanyReview = (userId, jobTitle, atCompany, experience, rating, isCurrentEmployee) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.manager
                    .createQueryBuilder(user_1.UserEntity, "user")
                    .where("user.id = :id", { id: userId })
                    .getOne();
                if (!user) {
                    this.logger.info(`Could not find user with id ${userId} to make a company review.`);
                    throw new Error_1.HTTPError(401, "Unauthorised user.");
                }
                else {
                    const newCompanyReview = new companyReview_1.CompanyReviewEntity();
                    newCompanyReview.jobTitle = jobTitle;
                    newCompanyReview.atCompany = atCompany;
                    newCompanyReview.experience = experience;
                    newCompanyReview.rating = rating;
                    newCompanyReview.isCurrentEmployee = isCurrentEmployee;
                    newCompanyReview.user = user;
                    yield this.manager.save(newCompanyReview);
                    this.logger.info(`User with email ${user.email} created a new company review.`);
                    return;
                }
            }
            catch (err) {
                throw err;
            }
        });
        this.getCompanyReview = (companyReviewId) => __awaiter(this, void 0, void 0, function* () {
            try {
                this.logger.info(`Trying to get company review ${companyReviewId}`);
                const companyReview = yield this.manager
                    .createQueryBuilder(companyReview_1.CompanyReviewEntity, "companyReview")
                    .where("companyReview.id = :id", { id: companyReviewId })
                    .getOne();
                if (!companyReview) {
                    this.logger.info(`Could not find companyReview with id ${companyReviewId}.`);
                    throw new Error_1.HTTPError(404, "The requested resource was not found.");
                }
                else {
                    this.logger.info(`Company review with id ${companyReviewId} found.`);
                    return companyReview;
                }
            }
            catch (err) {
                throw err;
            }
        });
        this.getSelfCompanyReviews = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const companyReviews = yield this.manager
                    .createQueryBuilder(companyReview_1.CompanyReviewEntity, "companyReview")
                    .select([
                    "companyReview.id",
                    "companyReview.jobTitle",
                    "companyReview.atCompany",
                    "companyReview.experience",
                    "companyReview.rating"
                ])
                    .where("companyReview.user = :userId", { userId: userId })
                    .getMany();
                if (!companyReviews) {
                    this.logger.info(`Could not find company reviews from user with id ${userId}.`);
                    throw new Error_1.HTTPError(404, "The requested resource was not found.");
                }
                else {
                    this.logger.info(`List of company reviews made by user found.`);
                    return companyReviews;
                }
            }
            catch (err) {
                throw err;
            }
        });
        this.getCompanyReviews = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const companyReviews = yield this.manager
                    .createQueryBuilder(companyReview_1.CompanyReviewEntity, "companyReview")
                    .orderBy("companyReview.createdAt", "DESC")
                    .getMany();
                if (!companyReviews) {
                    this.logger.info(`Could not find any company reviews.`);
                    throw new Error_1.HTTPError(404, "The requested resource was not found.");
                }
                else {
                    this.logger.info(`List of company reviews found.`);
                    return companyReviews;
                }
            }
            catch (err) {
                throw err;
            }
        });
        this.getSimilarCompanyReviews = (company, companyReviewId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const similarReviews = yield this.manager
                    .createQueryBuilder(companyReview_1.CompanyReviewEntity, "companyReview")
                    .take(2)
                    .where("companyReview.atCompany = :atCompany", { atCompany: company })
                    .andWhere("companyReview.id != :id", { id: companyReviewId })
                    .getMany();
                if (!similarReviews) {
                    this.logger.info(`Could not find any similar company reviews.`);
                    throw new Error_1.HTTPError(404, "The requested resource was not found.");
                }
                else {
                    this.logger.info(`Similar company reviews found.`);
                    return similarReviews;
                }
            }
            catch (err) {
                throw err;
            }
        });
        this.manager = manager;
    }
}
exports.CompanyService = CompanyService;
