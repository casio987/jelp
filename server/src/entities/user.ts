import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { CompanyExperienceEntity } from "./companyReview";
import { InterviewExperienceEntity } from "./interviewReview";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @OneToMany(() => InterviewExperienceEntity, interviewExperience => interviewExperience.user)
  interviewExperiences: InterviewExperienceEntity[];

  @OneToMany(() => CompanyExperienceEntity, CompanyExperienceEntity => CompanyExperienceEntity.user)
  companyExperiences: CompanyExperienceEntity[];
}
