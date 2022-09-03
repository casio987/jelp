import axios from "axios";
import { ICompaniesResponse, ICompanyResponse, IEmptyResponse } from "../interfaces/api-responses";

export const getCompanyReview = async (companyReviewId: string): Promise<ICompanyResponse> => {
  try {
    const { status, data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/company/${companyReviewId}`, {
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
    const { status, data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/company`, {
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

export const getSelfCompanyReviews = async (): Promise<ICompaniesResponse> => {
  try {
    const { status, data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/self/company`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem(process.env.REACT_APP_TOKEN!)}`
      }
    });
    return { status, data };
  } catch (err: any) {
    throw err;
  }
};

export const getCompanyReviews = async (): Promise<ICompaniesResponse> => {
  try {
    const { status, data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/company`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem(process.env.REACT_APP_TOKEN!)}`
      }
    });
    return { status, data };
  } catch (err: any) {
    throw err;
  }
};

export const getSimilarCompanyReviews = async (companyName: string, companyReviewId: string): Promise<ICompaniesResponse> => {
  try {
    const { status, data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/company/similar/${companyName}/${companyReviewId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem(process.env.REACT_APP_TOKEN!)}`
      }
    });
    return { status, data };
  } catch (err: any) {
    throw err;
  }
};