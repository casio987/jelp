import { IAuthResponse } from "../interfaces/api-responses";
import axios from "axios";

export const postLogin = async (email: string, password: string): Promise<IAuthResponse> => {
  try {
    const { status, data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/login`, {
      email,
      password
    });
    
    return { status, data };
  } catch (err: any) {
    throw err;
  }
};

export const postRegister = async (email: string, password: string): Promise<IAuthResponse> => {
  try {
    const { status, data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/register`, {
      email,
      password
    });
    
    return { status, data };
  } catch (err: any) {
    throw err;
  }
};