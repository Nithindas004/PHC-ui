import axios from "axios";

const baseUrl = "https://phc-backend-n4d7.onrender.com/api/v1/admin";

// Login
export const login = async (userData: any) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, userData);
    return response?.data;
  } catch (error: any) {
    throw error.response?.data;
  }
};

// Fetch Surveys
export const fetchSurveys = async (token: string) => {
  try {
    const response = await axios.get(`${baseUrl}/fetch-surveys`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

// Download Surveys
export const downloadSurveys = async (token: string) => {
  try {
    const response = await axios.get(`${baseUrl}/download-surveys`, {
      responseType: "blob",
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

// Dashboard Analytics
export const fetchDashboardAnalytics = async () => {
  try {
    const response = await axios.get(`${baseUrl}/dashboard-analytics`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

//update survey
export const updateSurvey = async (surveyData: any) => {
  try {
    const response = await axios.put(`${baseUrl}/update-survey`, surveyData);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const createCampaign = async (data: any) => {
  try {
    const response = await axios.post(`${baseUrl}/campaign`, data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
export const getCampaign = async () => {
  try {
    const response = await axios.get(`${baseUrl}/campaign`);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
