import { Router, NextFunction, Request, Response } from "express";
import { EntityManager } from "typeorm";
import { IRouter } from "../interfaces/IRouter";
import validationMiddleware from "../middleware/validation.middleware";
import { UserService } from "../services/user.service";
import { AuthSchema } from "../schemas/user.schema";

export class UserRouter implements IRouter {
  private router: Router = Router();
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
        validationMiddleware(AuthSchema),
        this.register
      )
      .post(
        '/user/login',
        validationMiddleware(AuthSchema),
        this.login
      )
  }

  private register = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { email, password } = req.body;
    try {
      const token = await this.userService.registerUser(email, password);
      res.status(200).json(token);
    } catch (err: any) {
      return res.status(err.status).json(err.message);
    }
  };

  private login = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { email, password } = req.body;
    try {
      const token = await this.userService.loginUser(email, password);
      res.status(200).json(token)
    } catch (err: any) {
      return res.status(err.status).json(err.message);
    }
  };

  public getRouter = () => this.router;
}