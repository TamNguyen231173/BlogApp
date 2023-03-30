import { createApi } from "@reduxjs/toolkit/query/react";
import { apiBaseQuery } from "./apiService";
import { Post, PostByCategoryRequest } from "../types";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], number>({
      query(pageNumber) {
        return {
          url: `/posts/data/${pageNumber}`,
          credentials: "include",
        };
      },
      transformResponse: (response: any) => response.posts,
    }),
    getPost: builder.query<Post, string>({
      query(id) {
        return {
          url: `/posts/manager/${id}`,
          credentials: "include",
        };
      },
      transformResponse: (response: any) => response.data.post,
    }),
    getPostsByCategory: builder.query<Post[], PostByCategoryRequest>({
      query({ categoryId, page }) {
        return {
          url: `/posts/getPostsByCategory/${categoryId}/${page}`,
          credentials: "include",
        };
      },
      transformResponse: (response: any) => response.posts,
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostQuery,
  useGetPostsByCategoryQuery,
} = postApi;
