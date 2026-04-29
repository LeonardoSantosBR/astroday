import axios from "axios";
const apiUrl = process.env.EXPO_NASA_API_BASE_URL;

export const api = axios.create({
  baseURL: apiUrl
});