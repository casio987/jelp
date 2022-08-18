import { Router, Request, Response, NextFunction } from "express";
import { EntityManager } from "typeorm";
import { IGetUserAuthInfoRequest } from "../interfaces/IGetUserAuthInfoRequest";
import { IRouter } from "../interfaces/IRouter";
import { authenticationMiddleware } from "../middleware/authentication.middleware";
import validationMiddleware from "../middleware/validation.middleware";
import { PostInterviewReviewSchema } from "../schemas/interview.schema";
import { InterviewService } from "../services/interview.service";

export class InterviewRouter implements IRouter {
  private manager: EntityManager;
  private router: Router = Router();
  private interviewService: InterviewService;

  constructor(manager: EntityManager) {
    this.manager = manager;
    this.interviewService = new InterviewService(this.manager);
    this.initialiseRoutes();
  }

  private initialiseRoutes = () => {
    this.router
      .get(
        '/self/interview/:offset',
        authenticationMiddleware,
        this.getSelfInterviewReviews
      )
      .post(
        '/interview',
        [
          validationMiddleware(PostInterviewReviewSchema),
          authenticationMiddleware
        ],
        this.postInterviewReview
      )
      .get(
        '/interview/:interviewReviewId',
        authenticationMiddleware,
        this.getSingleInterviewReview
      )
      .get(
        '/interview/:offset',
        authenticationMiddleware,
        this.getInterviewReviews
      )
      .get(
        '/interview/similar',
        authenticationMiddleware,
        this.getSimilarReviews
      )
  }

  private getSingleInterviewReview = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { interviewReviewId } = req.params;
    try {
      const interviewReview = await this.interviewService.getSingleInterviewReview(interviewReviewId);
      res.status(200).json(interviewReview);
    } catch (err: any) {
      return res.status(err.status).json(err.message);
    }
  };

  private getSelfInterviewReviews = async (
    req: IGetUserAuthInfoRequest,
    res: Response,
    next: NextFunction,
  ) => {
    const userId = req.userId;
    const { offset } = req.params;
    try {
      const interviewReviews = await this.interviewService.getSelfInterviewReviews(
        parseInt(offset),
        userId
      );
      res.status(200).json(interviewReviews);
    } catch (err: any) {
      return res.status(err.status).json(err.message);
    }
  };

  private postInterviewReview = async (
    req: IGetUserAuthInfoRequest,
    res: Response,
    next: NextFunction,
  ) => {
    const { jobTitle, atCompany, experience, questionsAsked, rating, offerReceived } = req.body;
    const userId = req.userId;
    try {
      await this.interviewService.postInterviewReview(
        userId,
        jobTitle,
        atCompany,
        experience,
        questionsAsked,
        rating,
        offerReceived
      );
      res.status(200).json({});
    } catch (err: any) {
      return res.status(err.status).json(err.message);
    }
  };

  private getInterviewReviews = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { offset } = req.params;
    try {
      const interviewReviews = await this.interviewService.getInterviewReviews(parseInt(offset));
      res.status(200).json(interviewReviews);
    } catch (err: any) {
      return res.status(err.status).json(err.message);
    }
  };

  private getSimilarReviews = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { company } = req.body;
      const similarReviews = await this.interviewService.getSimilarInterviewReviews(company);
      res.status(200).json(similarReviews);
    } catch (err: any) {
      return res.status(err.status).json(err.message);
    }
  };

  public getRouter = () => this.router;
}