import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { UserEntity } from "./user";

@Entity()
export class CompanyReviewEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => UserEntity, user => user.id)
  @JoinColumn()
  user: UserEntity;

  @Column()
  public jobTitle: string;

  @Column()
  public atCompany: string;

  @Column()
  public experience: string;

  @Column()
  public rating: number;

  @Column()
  public isCurrentEmployee: boolean;

  @CreateDateColumn()
  public createdAt: Date;
}
