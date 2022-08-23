import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { UserEntity } from "./user";

@Entity()
export class InterviewReviewEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => UserEntity, user => user.interviewExperiences)
  public user: UserEntity;

  @Column()
  public jobTitle: string;

  @Column()
  public atCompany: string;

  @Column()
  public experience: string;

  @Column()
  public questionsAsked: string;

  @Column()
  public rating: number;

  @Column()
  public offerReceived: boolean;

  @CreateDateColumn()
  public createdAt: Date;
}
