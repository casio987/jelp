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
exports.InterviewService = void 0;
const Error_1 = require("../components/Error");
const Logger_1 = require("../components/Logger");
const interviewReview_1 = require("../entities/interviewReview");
const user_1 = require("../entities/user");
class InterviewService {
    constructor(manager) {
        this.logger = (0, Logger_1.getLogger)();
        this.postInterviewReview = (userId, jobTitle, atCompany, experience, questionsAsked, rating, offerReceived) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.manager
                    .createQueryBuilder(user_1.UserEntity, "user")
                    .where("user.id = :id", { id: userId })
                    .getOne();
                if (!user) {
                    this.logger.info(`Could not find user with id ${userId} to make an interview review.`);
                    throw new Error_1.HTTPError(401, "Unauthorised user.");
                }
                else {
                    const newInterviewReview = new interviewReview_1.InterviewReviewEntity();
                    newInterviewReview.jobTitle = jobTitle;
                    newInterviewReview.atCompany = atCompany;
                    newInterviewReview.experience = experience;
                    newInterviewReview.questionsAsked = questionsAsked;
                    newInterviewReview.rating = rating;
                    newInterviewReview.offerReceived = offerReceived;
                    newInterviewReview.user = user;
                    yield this.manager.save(newInterviewReview);
                    this.logger.info(`User with email ${user.email} created a new interview review.`);
                    return;
                }
            }
            catch (err) {
                throw err;
            }
        });
        this.getSingleInterviewReview = (interviewReviewId) => __awaiter(this, void 0, void 0, function* () {
            try {
                this.logger.info(`Trying to get interview review ${interviewReviewId}`);
                const interviewReview = yield this.manager
                    .createQueryBuilder(interviewReview_1.InterviewReviewEntity, "interviewReview")
                    .where("interviewReview.id = :id", { id: interviewReviewId })
                    .getOne();
                if (!interviewReview) {
                    this.logger.info(`Could not find interviewReview with id ${interviewReviewId}.`);
                    throw new Error_1.HTTPError(404, "The requested resource was not found.");
                }
                else {
                    this.logger.info(`Interview review with id ${interviewReviewId} found.`);
                    return interviewReview;
                }
            }
            catch (err) {
                throw err;
            }
        });
        this.getSelfInterviewReviews = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const interviewReviews = yield this.manager
                    .createQueryBuilder(interviewReview_1.InterviewReviewEntity, "interviewReview")
                    .select([
                    "interviewReview.id",
                    "interviewReview.jobTitle",
                    "interviewReview.atCompany",
                    "interviewReview.experience",
                    "interviewReview.rating"
                ])
                    .where("interviewReview.user = :userId", { userId: userId })
                    .getMany();
                if (!interviewReviews) {
                    this.logger.info(`Could not find an interview reviews from user with id ${userId}.`);
                    throw new Error_1.HTTPError(404, "The requested resource was not found.");
                }
                else {
                    this.logger.info(`List of interview reviews made by user found.`);
                    return interviewReviews;
                }
            }
            catch (err) {
                throw err;
            }
        });
        this.getInterviewReviews = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const interviewReviews = yield this.manager
                    .createQueryBuilder(interviewReview_1.InterviewReviewEntity, "interviewReview")
                    .orderBy("interviewReview.createdAt", "DESC")
                    .getMany();
                if (!interviewReviews) {
                    this.logger.info(`Could not find any interview reviews.`);
                    throw new Error_1.HTTPError(404, "The requested resource was not found.");
                }
                else {
                    this.logger.info(`List of interview reviews found.`);
                    return interviewReviews;
                }
            }
            catch (err) {
                throw err;
            }
        });
        this.getSimilarInterviewReviews = (company, interviewReviewId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const similarReviews = yield this.manager
                    .createQueryBuilder(interviewReview_1.InterviewReviewEntity, "interviewReview")
                    .take(2)
                    .where("interviewReview.atCompany = :atCompany", { atCompany: company })
                    .andWhere("interviewReview.id != :id", { id: interviewReviewId })
                    .getMany();
                if (!similarReviews) {
                    this.logger.info(`Could not find any similar interview reviews.`);
                    throw new Error_1.HTTPError(404, "The requested resource was not found.");
                }
                else {
                    this.logger.info(`Similar interview reviews found.`);
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
exports.InterviewService = InterviewService;
