import { createApi } from "@reduxjs/toolkit/query/react";
import { apiBaseQuery } from "./apiService";
import { Category } from "../types";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getAllCategories: builder.query<Category[], void>({
      query() {
        return {
          url: "/categories",
          credentials: "include",
        };
      },
      transformResponse: (response: any) => response.categories,
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoryApi;
