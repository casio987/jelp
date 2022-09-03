import { IEmptyResponse, IInterviewResponse, IInterviewsResponse } from "../interfaces/api-responses";
import axios from "axios";

export const postInterviewReview = async (
  atCompany: string,
  jobTitle: string,
  experience: string,
  questionsAsked: string,
  rating: number,
  offerReceived: boolean
): Promise<IEmptyResponse> => {
  try {
    const { status, data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/interview`, {
      atCompany,
      jobTitle,
      experience,
      questionsAsked,
      rating,
      offerReceived
    }, 
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem(process.env.REACT_APP_TOKEN!)}`
      }
    });
    return { status, data };
  } catch (err: any) {
    throw err;
  }
};

export const getInterviewReview = async (interviewReviewId: string): Promise<IInterviewResponse> => {
  try {
    const { status, data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/interview/${interviewReviewId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem(process.env.REACT_APP_TOKEN!)}`
      }
    });
    return { status, data };
  } catch (err: any) {
    throw err;
  }
};

export const getSelfInterviewReviews = async (): Promise<IInterviewsResponse> => {
  try {
    const { status, data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/self/interview`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem(process.env.REACT_APP_TOKEN!)}`
      }
    });
    return { status, data };
  } catch (err: any) {
    throw err;
  }
};

export const getInterviewReviews = async (): Promise<IInterviewsResponse> => {
  try {
    const { status, data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/interview`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem(process.env.REACT_APP_TOKEN!)}`
      }
    });
    return { status, data };
  } catch (err: any) {
    throw err;
  }
};

export const getSimilarInterviewReviews = async (companyName: string, interviewReviewId: string): Promise<IInterviewsResponse> => {
  try {
    const { status, data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/interview/similar/${companyName}/${interviewReviewId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem(process.env.REACT_APP_TOKEN!)}`
      }
    });
    return { status, data };
  } catch (err: any) {
    throw err;
  }
};
