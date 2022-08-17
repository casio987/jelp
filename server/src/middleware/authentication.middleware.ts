import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IGetUserAuthInfoRequest } from "../interfaces/IGetUserAuthInfoRequest";
import { verifyToken } from "../utils/crypt";

export async function authenticationMiddleware (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction,
) {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(401).json("Unauthorised user.");
  }

  const token = bearer.split(" ")[1].trim();
  
  try {
    const payload = verifyToken(token);
    if (payload instanceof jwt.JsonWebTokenError) {
      return res.status(401).json("Unauthorised user.");
    }

    req.userId = payload.id
    return next();
  } catch (err) {
    return res.status(401).json("Unauthorised user.");
  }
}