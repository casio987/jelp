import Joi from "joi";

export const PostCompanyReviewSchema = Joi.object({
  jobTitle: Joi.string().required(),
  atCompany: Joi.string().required(),
  experience: Joi.string().required(),
  rating: Joi.number().required(),
  isCurrentEmployee: Joi.boolean().required()
}).required();