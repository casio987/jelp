import { IEmptyResponse, IInterviewResponse, IInterviewsResponse } from "../interfaces/api-responses";
import { API_URL } from "./config";

export const postInterviewReview = async (
  atCompany: string,
  jobTitle: string,
  experience: string,
  questionsAsked: string,
  rating: number,
  offerReceived: boolean
): Promise<IEmptyResponse> => {
  try {
    const response = await fetch(`${API_URL}/api/interview`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem(process.env.REACT_APP_TOKEN!)!}`
      },
      body: JSON.stringify({
        atCompany,
        jobTitle,
        experience,
        questionsAsked,
        rating,
        offerReceived
      }),
    });

    const data = await response.json();
    return { status: response.status, data };
  } catch (err: any) {
    throw err;
  }
};

export const getInterviewReview = async (interviewReviewId: string): Promise<IInterviewResponse> => {
  try {
    const response = await fetch(`${API_URL}/api/interview/${interviewReviewId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem(process.env.REACT_APP_TOKEN!)!}`
      }
    });

    const data = await response.json();
    return { status: response.status, data };
  } catch (err: any) {
    throw err;
  }
};

export const getSelfInterviewReviews = async (offset: number): Promise<IInterviewsResponse> => {
  try {
    const response = await fetch(`${API_URL}/api/self/interview/${offset}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem(process.env.REACT_APP_TOKEN!)!}`
      }
    });

    const data = await response.json();
    return { status: response.status, data };
  } catch (err: any) {
    throw err;
  }
};

export const getInterviewReviews = async (offset: number): Promise<IInterviewsResponse> => {
  try {
    const response = await fetch(`${API_URL}/api/interview/${offset}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem(process.env.REACT_APP_TOKEN!)!}`
      }
    });

    const data = await response.json();
    return { status: response.status, data };
  } catch (err: any) {
    throw err;
  }
};
