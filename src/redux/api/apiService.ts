import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiBaseUrl = "http://192.168.1.8:8000/api";

export const apiBaseQuery = fetchBaseQuery({
  baseUrl: apiBaseUrl,
});

export const apiReducerPath = "apiService";
