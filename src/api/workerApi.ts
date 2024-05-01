import axios from "axios";

const baseUrl = "http://localhost:3000/api/v1/worker";

export const loginWorker = async (userData: any): Promise<any> => {
  try {
    const response = await axios.post(`${baseUrl}/login`, userData);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const createSurvey = async (
  surveyData: any,
  token: string
): Promise<any> => {
  try {
    const response = await axios.post(`${baseUrl}/create-survey`, surveyData, {
      headers: {
        Authorization: `Bearer ${token}`, // Set the bearer token in the request headers
      },
    });
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const createWorker = async (workerData: any): Promise<any> => {
  try {
    const response = await axios.post(`${baseUrl}/create`, workerData);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const predictDiabetes = async (data: any): Promise<any> => {
  try {
    const response = await axios.post(`${baseUrl}/diabetes/predict`, data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
