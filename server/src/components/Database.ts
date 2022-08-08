import { DataSource } from "typeorm";
import { Logger } from "winston";
import { getLogger } from "./Logger";
import "dotenv/config";

export class Database {
  private dbConnection: DataSource;
  private logger: Logger;

  constructor() {
    this.dbConnection = new DataSource({
      // TODO: update with env fields
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: false,
      migrations: [],
      subscribers: [],
    })
    this.logger = getLogger();

  }
  public getManager = () => (
    this.dbConnection.manager
  ) 

  public start = async () => {
    await this.dbConnection.initialize();
    this.logger.info('started connection to db');
  }

  public stop = async () => {
    if (this.dbConnection.isInitialized) await this.dbConnection.destroy();
  }
}