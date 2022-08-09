import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from "./user";

@Entity()
export class InterviewExperienceEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => UserEntity, user => user.id)
  @JoinColumn()
  user: UserEntity;

  @Column()
  public role: string;

  @Column()
  public atCompany: string;

  @Column()
  public applicationInterviewExperience: string;

  @Column()
  public questionsAsked: string;

  @Column()
  public rating: number;

  @Column()
  public createdAt: Date;
}
