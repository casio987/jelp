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
exports.InterviewRouter = void 0;
const express_1 = require("express");
const authentication_middleware_1 = require("../middleware/authentication.middleware");
const validation_middleware_1 = __importDefault(require("../middleware/validation.middleware"));
const interview_schema_1 = require("../schemas/interview.schema");
const interview_service_1 = require("../services/interview.service");
class InterviewRouter {
    constructor(manager) {
        this.router = (0, express_1.Router)();
        this.initialiseRoutes = () => {
            this.router
                .get('/self/interview', authentication_middleware_1.authenticationMiddleware, this.getSelfInterviewReviews)
                .post('/interview', [
                (0, validation_middleware_1.default)(interview_schema_1.PostInterviewReviewSchema),
                authentication_middleware_1.authenticationMiddleware
            ], this.postInterviewReview)
                .get('/interview/:interviewReviewId', authentication_middleware_1.authenticationMiddleware, this.getSingleInterviewReview)
                .get('/interview', authentication_middleware_1.authenticationMiddleware, this.getInterviewReviews)
                .get('/interview/similar/:companyName/:interviewReviewId', authentication_middleware_1.authenticationMiddleware, this.getSimilarReviews);
        };
        this.getSingleInterviewReview = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { interviewReviewId } = req.params;
            try {
                const interviewReview = yield this.interviewService.getSingleInterviewReview(interviewReviewId);
                res.status(200).json(interviewReview);
            }
            catch (err) {
                return res.status(err.status).json(err.message);
            }
        });
        this.getSelfInterviewReviews = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.userId;
            try {
                const interviewReviews = yield this.interviewService.getSelfInterviewReviews(userId);
                res.status(200).json(interviewReviews);
            }
            catch (err) {
                return res.status(err.status).json(err.message);
            }
        });
        this.postInterviewReview = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { jobTitle, atCompany, experience, questionsAsked, rating, offerReceived } = req.body;
            const userId = req.userId;
            try {
                yield this.interviewService.postInterviewReview(userId, jobTitle, atCompany, experience, questionsAsked, rating, offerReceived);
                res.status(200).json({});
            }
            catch (err) {
                return res.status(err.status).json(err.message);
            }
        });
        this.getInterviewReviews = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const interviewReviews = yield this.interviewService.getInterviewReviews();
                res.status(200).json(interviewReviews);
            }
            catch (err) {
                return res.status(err.status).json(err.message);
            }
        });
        this.getSimilarReviews = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { companyName, interviewReviewId } = req.params;
                const similarReviews = yield this.interviewService.getSimilarInterviewReviews(companyName, interviewReviewId);
                res.status(200).json(similarReviews);
            }
            catch (err) {
                return res.status(err.status).json(err.message);
            }
        });
        this.getRouter = () => this.router;
        this.manager = manager;
        this.interviewService = new interview_service_1.InterviewService(this.manager);
        this.initialiseRoutes();
    }
}
exports.InterviewRouter = InterviewRouter;
