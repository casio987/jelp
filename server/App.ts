import express, { Application } from 'express';
import cors from "cors";
import mongoose from "mongoose";
import { IController } from "./src/interfaces/IController";
import dotenv from "dotenv";

dotenv.config();

export class App {
  public express: Application;
  public port: number;

  constructor(controllers: IController[], port: number) {
    this.express = this.setUpExpress();
    this.port = port;

    this.initialiseDatabaseConnection();
    this.initialiseControllers(controllers);
  }

  private setUpExpress = () => {
    const app = express()
      .use(cors())
      .use(express.json())
      .use(express.urlencoded({ extended: true }));
    
    return app;
  }

  private initialiseDatabaseConnection = () => {
    // TODO; get mongodb uri
    mongoose.connect("" || "asd", () => {
      console.log('DB connected :)');
    });
  }

  private initialiseControllers = (controllers: IController[]) => {
    controllers.forEach((controller: IController) => {
      this.express.use('/api', controller.getRouter());
    })
  }

  public listen = () => {
    this.express.listen(this.port, () => {
      console.log(`server listening on port ${this.port}`);
    })
  }
}