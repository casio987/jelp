import { ICompanyResponse } from "../interfaces/api-responses";
import { API_URL } from "./config";

export const getCompanyReview = async (companyReviewId: string): Promise<ICompanyResponse> => {
  try {
    const response = await fetch(`${API_URL}/api/company/${companyReviewId}`, {
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
