import { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";
import { getLogger } from "../components/Logger";

const logger = getLogger();

export const validationMiddleware = (schema: ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.validate(req.body);
    const { error } = result;
    if (error) {
      logger.info(`Invalid request body - Error: ${error.message} - ${JSON.stringify(req.body)}`);
      res.status(400).json({
        message: "Invalid request body"
      });
      return;
    }
    next();
  };

export default validationMiddleware;