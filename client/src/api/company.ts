import axios from "axios";
import { ICompaniesResponse, ICompanyResponse, IEmptyResponse } from "../interfaces/api-responses";
import { API_URL } from "./config";

export const getCompanyReview = async (companyReviewId: string): Promise<ICompanyResponse> => {
  try {
    const { status, data } = await axios.get(`${API_URL}/api/company/${companyReviewId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem(process.env.REACT_APP_TOKEN!)}`
      }
    }); 
    return { status, data };
  } catch (err: any) {
    throw err;
  }
};

export const postCompanyReview = async (
  atCompany: string,
  jobTitle: string,
  experience: string,
  rating: number,
  isCurrentEmployee: boolean
): Promise<IEmptyResponse> => {
  try {
    const { status, data } = await axios.post(`${API_URL}/api/company`, {
      atCompany,
      jobTitle,
      experience,
      rating,
      isCurrentEmployee
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

export const getSelfCompanyReviews = async (offset: number): Promise<ICompaniesResponse> => {
  try {
    const { status, data } = await axios.get(`${API_URL}/api/self/company/${offset}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem(process.env.REACT_APP_TOKEN!)}`
      }
    });
    return { status, data };
  } catch (err: any) {
    throw err;
  }
};

export const getCompanyReviews = async (offset: number): Promise<ICompaniesResponse> => {
  try {
    const { status, data } = await axios.get(`${API_URL}/api/company/${offset}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem(process.env.REACT_APP_TOKEN!)}`
      }
    });
    return { status, data };
  } catch (err: any) {
    throw err;
  }
};