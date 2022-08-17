import { EntityManager } from "typeorm";
import { HTTPError } from "../components/Error";
import { getLogger } from "../components/Logger";
import { CompanyReviewEntity } from "../entities/companyReview";
import { UserEntity } from "../entities/user";

const PAGINATION_LIMIT = 10;

export class CompanyService {
  private manager: EntityManager;
  private logger = getLogger();

  constructor(manager: EntityManager) {
    this.manager = manager;
  }

  public postCompanyReview = async (
    userId: string,
    jobTitle: string,
    atCompany: string,
    experience: string,
    rating: number,
    isCurrentEmployee: boolean
  ) => {
    try {
      const user = await this.manager
        .createQueryBuilder(UserEntity, "user")
        .where("user.id = :id", { id: userId })
        .getOne();

      if (!user) {
        this.logger.info(`Could not find user with id ${userId} to make a company review.`);
        throw new HTTPError(401, "Unauthorised user.");
      } else {
        const newCompanyReview = new CompanyReviewEntity();
        newCompanyReview.jobTitle = jobTitle;
        newCompanyReview.atCompany = atCompany;
        newCompanyReview.experience = experience;
        newCompanyReview.rating = rating;
        newCompanyReview.isCurrentEmployee = isCurrentEmployee;
        newCompanyReview.user = user;

        await this.manager.save(newCompanyReview);
        this.logger.info(`User with email ${user.email} created a new company review.`);
        return;
      }
    } catch (err: any) {
      throw err;
    }
  }

  public getCompanyReview = async (companyReviewId: string) => {
    try {
      this.logger.info(`Trying to get company review ${companyReviewId}`);
      const companyReview = await this.manager
        .createQueryBuilder(CompanyReviewEntity, "companyReview")
        .where("companyReview.id = :id", { id: companyReviewId })
        .getOne();

      if (!companyReview) {
        this.logger.info(`Could not find companyReview with id ${companyReviewId}.`);
        throw new HTTPError(404, "The requested resource was not found.");
      } else {
        this.logger.info(`Company review with id ${companyReviewId} found.`);
        return companyReview;
      }
    } catch (err: any) {
      throw err;
    }
  }

  public getSelfCompanyReviews = async (offset: number, userId: string) => {
    try {
      const companyReviews = await this.manager
        .createQueryBuilder(CompanyReviewEntity, "companyReview")
        .select([
          "companyReview.id",
          "companyReview.jobTitle",
          "companyReview.atCompany",
          "companyReview.experience",
          "companyReview.rating"
        ])
        .where("companyReview.user = :userId", { userId: userId })
        .take(PAGINATION_LIMIT)
        .skip(offset)
        .getMany()

      if (!companyReviews) {
        this.logger.info(`Could not find company reviews from user with id ${userId}.`);
        throw new HTTPError(404, "The requested resource was not found.");
      } else {
        this.logger.info(`List of company reviews made by user found.`);
        return companyReviews;
      }
    } catch (err: any) {
      throw err;
    }
  }

  public getCompanyReviews = async (offset: number) => {
    try {
      const companyReviews = await this.manager
        .createQueryBuilder(CompanyReviewEntity, "companyReview")
        .take(PAGINATION_LIMIT)
        .skip(offset)
        .getMany()

      if (!companyReviews) {
        this.logger.info(`Could not find any company reviews.`);
        throw new HTTPError(404, "The requested resource was not found.");
      } else {
        this.logger.info(`List of company reviews found.`);
        return companyReviews;
      }
    } catch (err: any) {
      throw err;
    }
  }

}