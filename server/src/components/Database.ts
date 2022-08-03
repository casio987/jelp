import { DataSource } from "typeorm";
import { Logger } from "winston";
import { getLogger } from "./Logger";

export class Database {
  private dbConnection: DataSource;
  private logger: Logger;

  constructor() {
    this.dbConnection = new DataSource({
      // TODO: update with env fields
      type: "postgres",
      host: "db",
      port: 1234,
      username: "postgres",
      password: "secretpassword",
      database: "postgres",
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
    this.dbConnection.initialize();
    this.logger.info('started connection to db');
  }

  public stop = async () => {
    if (this.dbConnection.isInitialized) await this.dbConnection.destroy();
  }
}