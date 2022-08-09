import Joi from "joi";

export const AuthSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
}).required();