import { Router, NextFunction, Request, Response } from "express";
import { EntityManager } from "typeorm";
import { getLogger } from "../components/Logger";
import { IRouter } from "../interfaces/IRouter";
import { UserService } from "../services/Auth.service";

export class AuthRouter implements IRouter {
  private router: Router = Router();
  private logger = getLogger();
  private manager: EntityManager;
  private userService: UserService;

  constructor(manager: EntityManager) {
    this.manager = manager;
    this.userService = new UserService(this.manager);
    this.initialiseRoutes();

  }

  private initialiseRoutes = () => {
    this.router
      .post(
        '/user/register',
        // TODO: validation middleware
        this.register
      )
      .post(
        '/user/login',
        // TODO: validation middleware
        // TODO: service function
      )
      .post(
        '/user/logout',
        // TODO: auth middleware
        // TODO: service function
      )
  }

  private register = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { username, password } = req.body;
    try {
      await this.userService.registerUser(username, password);
      // res.status(201).json(token)
    } catch (err: any) {
      return next(err);
    }
  };

  // private login = async (
  //   req: Request,
  //   res: Response,
  //   next: NextFunction,
  // ) => {
  //   const { username, password } = req.body;
  //   try {
  //     await this.userService.registerUser(username, password);
  //     // res.status(201).json(token)
  //   } catch (err: any) {
  //     return next(err);
  //   }
  // };

  // private logout = async (
  //   req: Request,
  //   res: Response,
  //   next: NextFunction,
  // ) => {
  //   const { username, password } = req.body;
  //   try {
  //     await this.userService.registerUser(username, password);
  //     // res.status(201).json(token)
  //   } catch (err: any) {
  //     return next(err);
  //   }
  // };

  public getRouter = () => this.router;
}