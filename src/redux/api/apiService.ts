import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiBaseUrl = "http://172.22.192.1:8000/api/";

export const apiBaseQuery = fetchBaseQuery({
  baseUrl: apiBaseUrl,
});

export const apiReducerPath = "apiService";
