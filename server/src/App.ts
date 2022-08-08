import express, { Application } from 'express';
import cors from "cors";
import { Database } from './components/Database';
import { EntityManager } from 'typeorm';
import { Logger } from "winston";
import { getLogger } from "./components/Logger";


export class App {
  private express: Application;
  private port: number;
  private db = new Database();
  private manager: EntityManager;
  private logger: Logger;
  
  // TODO: add routers and services
  constructor(port: number) {
    this.port = port;
    this.express = this.setUpExpress();
    this.manager = this.db.getManager();
    this.logger = getLogger();
    // this.setUpRouters();
  }

  private setUpExpress = () => {
    const app = express()
      .use(cors())
      .use(express.json())
      .use(express.urlencoded({ extended: true }));
    
    return app;
  }

  // private setUpRouters = (routers: IRouter[]) => {
  //   routers.forEach((router: IRouter) => {
  //     this.express.use("/api", router.getRouter());
  //   })
  // }

  public start = async () => {
    this.logger.info('attempting to start server');
    this.express.listen(this.port);
    await this.db.start();
    this.logger.info(`server listening on port ${this.port}`);
  }

  public stop = async () => {
    await this.db.stop();
  }
}