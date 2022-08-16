export interface IAuthResponse {
  status: number;
  data: string;
};

export interface IEmptyResponse {
  status: number;
  data: {} | string;
};

export interface IInterviewResponse {
  status: number;
  data: IInterviewReviewData;
};

export interface IInterviewsResponse {
  status: number;
  data: IInterviewReviewData[];
};

export interface IInterviewReviewData {
  id: number;
  jobTitle: string;
  atCompany: string;
  experience: string;
  questionsAsked: string;
  rating: number;
  offerReceived: boolean;
  createdAt: string;
};