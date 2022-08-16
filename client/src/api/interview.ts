import { IEmptyResponse } from "../interfaces/api-responses";
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
