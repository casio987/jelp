import Joi from "joi";

export const PostInterviewReviewSchema = Joi.object({
  jobTitle: Joi.string().required(),
  atCompany: Joi.string().required(),
  experience: Joi.string().required(),
  questionsAsked: Joi.string().required(),
  rating: Joi.number().required(),
  offerReceived: Joi.boolean().required()
}).required();