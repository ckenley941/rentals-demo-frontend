
//Eventually configure better
import axios from "axios";

const apiUrl = "https://search.outdoorsy.com/";

export const client = axios.create({
    baseURL: apiUrl,
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
//   client.interceptors.request.use((config) => {
//     const token = localStorage.getItem("access_token");
//     config.headers.Authorization = "Bearer " + token;
//     return config;
//   });