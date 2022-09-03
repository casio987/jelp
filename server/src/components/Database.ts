import { DataSource, DataSourceOptions } from "typeorm";
import { Logger } from "winston";
import { getLogger } from "./Logger";
import "dotenv/config";
import { UserEntity } from "../entities/user";
import { CompanyReviewEntity } from "../entities/companyReview";
import { InterviewReviewEntity } from "../entities/interviewReview";
import { seed } from "../utils/seed";
export class Database {
  private dbConnection: DataSource;
  private logger: Logger;

  constructor() {
    const connectionOptions: DataSourceOptions = process.env.DATABASE_URL ? {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [
        UserEntity,
        CompanyReviewEntity,
        InterviewReviewEntity
      ],
      synchronize: true,
      logging: false,
      ssl: true,
      extra: {
        ssl: {
          require: true,
          rejectUnauthorised: false,
        }
      }
    } : {
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: false,
      entities: [
        UserEntity,
        CompanyReviewEntity,
        InterviewReviewEntity
      ],
      migrations: [],
      subscribers: [],
    };

    this.dbConnection = new DataSource(connectionOptions)
    this.logger = getLogger();

  }
  public getManager = () => (
    this.dbConnection.manager
  ) 

  public start = async () => {
    await this.dbConnection.initialize();
    this.logger.info('started connection to db');
    await seed(this.dbConnection.manager);
  }

  public stop = async () => {
    if (this.dbConnection.isInitialized) await this.dbConnection.destroy();
  }
}