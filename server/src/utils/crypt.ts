import crypto from "crypto";
import jwt from "jsonwebtoken";
import { HTTPError } from "../components/Error";
import { IToken } from "../interfaces/IToken";

export const hash = (password: string): string => {
  return crypto.createHash("sha512").update(password).digest("hex");
}

export const generateToken = (id: number): string => {
  const token = jwt.sign({ id: id }, process.env.JWT_SECRET as jwt.Secret, {
    // TODO: current placeholder
    expiresIn: "1d"
  })
  return token;
};

export const verifyToken = (token: string): IToken => {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret) as IToken;
    return payload;
  } catch (err: any) {
    throw new HTTPError(401, "Unauthorised user.");
  }
}
