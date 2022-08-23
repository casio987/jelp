import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
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

  @OneToMany(() => InterviewReviewEntity, interviewReview => interviewReview.user, {
    cascade: true,
    onDelete: "CASCADE"
  })
  @JoinColumn()
  public interviewExperiences: InterviewReviewEntity[];

  @OneToMany(() => CompanyReviewEntity, companyReview => companyReview.user, {
    cascade: true,
    onDelete: "CASCADE"
  })
  @JoinColumn()
  public companyExperiences: CompanyReviewEntity[];
}
