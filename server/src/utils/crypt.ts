import crypto from "crypto";
import jwt from "jsonwebtoken";

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

// TODO: update this
// export const verifyToken = (token: string): boolean => {
//   const payload = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret);

//   if (payload) // do something
//   return false;
// }
