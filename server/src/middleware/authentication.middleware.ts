import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { HTTPError } from "../components/Error";
import { IGetUserAuthInfoRequest } from "../interfaces/IGetUserAuthInfoRequest";
import { verifyToken } from "../utils/crypt";

export async function authenticationMiddleware (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith("Bearer ")) {
    return next(new HTTPError(401, "Unauthorised user."));
  }

  const token = bearer.split(" ")[1].trim();
  
  try {
    const payload = verifyToken(token);
    if (payload instanceof jwt.JsonWebTokenError) {
      return next(new HTTPError(401, "Unauthorised user."));
    }

    req.userId = payload.id
    return next();
  } catch (err) {
    return next(new HTTPError(401, "Unauthorised user."));
  }
}