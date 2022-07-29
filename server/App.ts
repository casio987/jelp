import express, { Application } from 'express';
import dotenv from "dotenv";

dotenv.config();

export class App {
  public express: Application;
  public port: number;

  constructor(port: number) {
    this.express = express();
    this.port = port;
  }

  public listen = () => {
    this.express.listen(this.port, () => {
      console.log(`server listening on port ${this.port}`);
    })
  }
}