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
exports.CompanyRouter = void 0;
const express_1 = require("express");
const authentication_middleware_1 = require("../middleware/authentication.middleware");
const validation_middleware_1 = __importDefault(require("../middleware/validation.middleware"));
const company_schema_1 = require("../schemas/company.schema");
const company_service_1 = require("../services/company.service");
class CompanyRouter {
    constructor(manager) {
        this.router = (0, express_1.Router)();
        this.initialiseRoutes = () => {
            this.router
                .get('/self/company', authentication_middleware_1.authenticationMiddleware, this.getSelfCompanyReviews)
                .post('/company', [
                (0, validation_middleware_1.default)(company_schema_1.PostCompanyReviewSchema),
                authentication_middleware_1.authenticationMiddleware
            ], this.postCompanyReview)
                .get('/company/:companyReviewId', authentication_middleware_1.authenticationMiddleware, this.getSingleCompanyReview)
                .get('/company', authentication_middleware_1.authenticationMiddleware, this.getCompanyReviews)
                .get('/company/similar/:companyName/:companyReviewId', authentication_middleware_1.authenticationMiddleware, this.getSimilarReviews);
        };
        this.getSingleCompanyReview = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { companyReviewId } = req.params;
            try {
                const companyReview = yield this.companyService.getCompanyReview(companyReviewId);
                res.status(200).json(companyReview);
            }
            catch (err) {
                return res.status(err.status).json(err.message);
            }
        });
        this.getSelfCompanyReviews = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.userId;
            try {
                const companyReviews = yield this.companyService.getSelfCompanyReviews(userId);
                res.status(200).json(companyReviews);
            }
            catch (err) {
                return res.status(err.status).json(err.message);
            }
        });
        this.postCompanyReview = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { jobTitle, atCompany, experience, rating, isCurrentEmployee } = req.body;
            const userId = req.userId;
            try {
                yield this.companyService.postCompanyReview(userId, jobTitle, atCompany, experience, rating, isCurrentEmployee);
                res.status(200).json({});
            }
            catch (err) {
                res.status(err.status).json(err.message);
            }
        });
        this.getCompanyReviews = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const companyReviews = yield this.companyService.getCompanyReviews();
                res.status(200).json(companyReviews);
            }
            catch (err) {
                res.status(err.message).json(err.status);
            }
        });
        this.getSimilarReviews = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { companyName, companyReviewId } = req.params;
            try {
                const similarReviews = yield this.companyService.getSimilarCompanyReviews(companyName, companyReviewId);
                res.status(200).json(similarReviews);
            }
            catch (err) {
                res.status(err.message).json(err.status);
            }
        });
        this.getRouter = () => this.router;
        this.manager = manager;
        this.companyService = new company_service_1.CompanyService(this.manager);
        this.initialiseRoutes();
    }
}
exports.CompanyRouter = CompanyRouter;
