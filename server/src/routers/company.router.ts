import { Router, Request, Response, NextFunction } from "express";
import { EntityManager } from "typeorm";
import { IGetUserAuthInfoRequest } from "../interfaces/IGetUserAuthInfoRequest";
import { IRouter } from "../interfaces/IRouter";
import { authenticationMiddleware } from "../middleware/authentication.middleware";
import validationMiddleware from "../middleware/validation.middleware";
import { PostCompanyReviewSchema } from "../schemas/company.schema";
import { CompanyService } from "../services/company.service";

export class CompanyRouter implements IRouter {
  private manager: EntityManager;
  private router: Router = Router();
  private companyService: CompanyService;

  constructor(manager: EntityManager) {
    this.manager = manager;
    this.companyService = new CompanyService(this.manager);
    this.initialiseRoutes();
  }

  private initialiseRoutes = () => {
    this.router
      .get(
        '/self/company/:offset',
        authenticationMiddleware,
        this.getSelfCompanyReviews
      )
      .post(
        '/company',
        [
          validationMiddleware(PostCompanyReviewSchema),
          authenticationMiddleware
        ],
        this.postCompanyReview
      )
      .get(
        '/company/:companyReviewId',
        authenticationMiddleware,
        this.getSingleCompanyReview
      )
      .get(
        '/company/:offset',
        authenticationMiddleware,
        this.getCompanyReviews
      )
  }

  private getSingleCompanyReview = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { companyReviewId } = req.params;
    try {
      const companyReview = await this.companyService.getCompanyReview(companyReviewId);
      res.status(200).json(companyReview);
    } catch (err: any) {
      return res.status(err.status).json(err.message);
    }   
  };

  private getSelfCompanyReviews = async (
    req: IGetUserAuthInfoRequest,
    res: Response,
    next: NextFunction,
  ) => {
    const userId = req.userId;
    const { offset } = req.params;
    try {
      const companyReviews = await this.companyService.getSelfCompanyReviews(parseInt(offset), userId);
      res.status(200).json(companyReviews);
    } catch (err: any) {
      return res.status(err.status).json(err.message);
    }
  };

  private postCompanyReview = async (
    req: IGetUserAuthInfoRequest,
    res: Response,
    next: NextFunction,
  ) => {
    const { jobTitle, atCompany, experience, rating, isCurrentEmployee } = req.body;
    const userId = req.userId;
    try {
      await this.companyService.postCompanyReview(
        userId,
        jobTitle,
        atCompany,
        experience,
        rating,
        isCurrentEmployee
      );
      res.status(200).json({});
    } catch (err: any) {
      res.status(err.status).json(err.message);
    }
  };

  private getCompanyReviews = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { offset } = req.params;
    try {
      const companyReviews = await this.companyService.getCompanyReviews(parseInt(offset));
      res.status(200).json(companyReviews);
    } catch (err: any) {
      res.status(err.message).json(err.status);
    }
  };

  public getRouter = () => this.router;
}