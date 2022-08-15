import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { CompanyReviewEntity } from "./companyReview";
import { InterviewReviewEntity } from "./interviewReview";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @OneToMany(() => InterviewReviewEntity, interviewReview => interviewReview.user)
  interviewExperiences: InterviewReviewEntity[];

  @OneToMany(() => CompanyReviewEntity, companyReview => companyReview.user)
  companyExperiences: CompanyReviewEntity[];
}
