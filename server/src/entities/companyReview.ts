import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from "./user";

@Entity()
export class CompanyExperienceEntity {
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
  public companyExperience: string;

  @Column()
  public rating: number;

  @Column()
  public createdAt: Date;
}
