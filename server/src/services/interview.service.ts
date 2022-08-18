import { EntityManager } from "typeorm";
import { HTTPError } from "../components/Error";
import { getLogger } from "../components/Logger";
import { InterviewReviewEntity } from "../entities/interviewReview";
import { UserEntity } from "../entities/user";

const PAGINATION_LIMIT = 10;

export class InterviewService {
  private manager: EntityManager;
  private logger = getLogger();

  constructor(manager: EntityManager) {
    this.manager = manager;
  }

  public postInterviewReview = async (
    userId: string,
    jobTitle: string,
    atCompany: string,
    experience: string,
    questionsAsked: string,
    rating: number,
    offerReceived: boolean
  ) => {
    try {
      const user = await this.manager
        .createQueryBuilder(UserEntity, "user")
        .where("user.id = :id", { id: userId })
        .getOne();

      if (!user) {
        this.logger.info(`Could not find user with id ${userId} to make an interview review.`);
        throw new HTTPError(401, "Unauthorised user.");
      } else {
        const newInterviewReview = new InterviewReviewEntity();
        newInterviewReview.jobTitle = jobTitle;
        newInterviewReview.atCompany = atCompany;
        newInterviewReview.experience = experience;
        newInterviewReview.questionsAsked = questionsAsked;
        newInterviewReview.rating = rating;
        newInterviewReview.offerReceived = offerReceived;
        newInterviewReview.user = user;

        await this.manager.save(newInterviewReview);
        this.logger.info(`User with email ${user.email} created a new interview review.`);
        return;
      }
    } catch (err: any) {
      throw err;
    }
  }

  public getSingleInterviewReview = async (interviewReviewId: string) => {
    try {
      this.logger.info(`Trying to get interview review ${interviewReviewId}`);
      const interviewReview = await this.manager
        .createQueryBuilder(InterviewReviewEntity, "interviewReview")
        .where("interviewReview.id = :id", { id: interviewReviewId })
        .getOne();

      if (!interviewReview) {
        this.logger.info(`Could not find interviewReview with id ${interviewReviewId}.`);
        throw new HTTPError(404, "The requested resource was not found.");
      } else {
        this.logger.info(`Interview review with id ${interviewReviewId} found.`);
        return interviewReview;
      }
    } catch (err: any) {
      throw err;
    }
  }

  public getSelfInterviewReviews = async (offset: number, userId: string) => {
    try {
      const interviewReviews = await this.manager
        .createQueryBuilder(InterviewReviewEntity, "interviewReview")
        .select([
          "interviewReview.id",
          "interviewReview.jobTitle",
          "interviewReview.atCompany",
          "interviewReview.experience",
          "interviewReview.rating"
        ])
        .where("interviewReview.user = :userId", { userId: userId })
        .take(PAGINATION_LIMIT)
        .skip(offset)
        .getMany()

      if (!interviewReviews) {
        this.logger.info(`Could not find an interview reviews from user with id ${userId}.`);
        throw new HTTPError(404, "The requested resource was not found.");
      } else {
        this.logger.info(`List of interview reviews made by user found.`);
        return interviewReviews;
      }
    } catch (err: any) {
      throw err;
    }
  }

  public getInterviewReviews = async (offset: number) => {
    try {
      const interviewReviews = await this.manager
        .createQueryBuilder(InterviewReviewEntity, "interviewReview")
        .take(PAGINATION_LIMIT)
        .skip(offset)
        .getMany()

      if (!interviewReviews) {
        this.logger.info(`Could not find any interview reviews.`);
        throw new HTTPError(404, "The requested resource was not found.");
      } else {
        this.logger.info(`List of interview reviews found.`);
        return interviewReviews;
      }
    } catch (err: any) {
      throw err;
    }
  }

  // TODO: decide if should send error when empty or simply send
  // an error
  public getSimilarInterviewReviews = async (company: string) => {
    try {
      const similarReviews = await this.manager
        .createQueryBuilder(InterviewReviewEntity, "interviewReview")
        .take(2)
        .where("interviewReview.atCompany = :atCompany", { atCompany: company })
        .getMany();

      if (!similarReviews) {
        this.logger.info(`Could not find any similar interview reviews.`);
        throw new HTTPError(404, "The requested resource was not found.");
      } else {
        this.logger.info(`Similar interview reviews found.`);
        return similarReviews;
      }
    } catch (err: any) {
      throw err;
    }
  }

}