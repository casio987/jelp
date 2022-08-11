import { IAuthResponse } from "../interfaces/api-responses";
import { API_URL } from "./config";

export const postLogin = async (email: string, password: string): Promise<IAuthResponse> => {
  try {
    const response = await fetch(`${API_URL}/api/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return { status: response.status, data };
  } catch (err: any) {
    throw err;
  }
};

export const postRegister = async (email: string, password: string): Promise<IAuthResponse> => {
  try {
    const response = await fetch(`${API_URL}/api/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return { status: response.status, data };
  } catch (err: any) {
    throw err;
  }
};

// TODO: postLogout