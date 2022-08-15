import { EntityManager } from "typeorm";
import { HTTPError } from "../components/Error";
import { getLogger } from "../components/Logger";
import { InterviewReviewEntity } from "../entities/interviewReview";
import { UserEntity } from "../entities/user";

export class InterviewService {
  private manager: EntityManager;
  private logger = getLogger();

  constructor(manager: EntityManager) {
    this.manager = manager;
  }

  public postInterviewReview = async (
    userId: string,
    atCompany: string,
    jobTitle: string,
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
}