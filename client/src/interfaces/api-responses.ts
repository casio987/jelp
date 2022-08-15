export interface IAuthResponse {
  status: number;
  data: string;
};

export interface IEmptyResponse {
  status: number;
  data: {} | string;
}