import { createApi } from "@reduxjs/toolkit/query/react";
import { apiBaseQuery } from "./apiService";
import {
  CreatePostRequest,
  GenericResponse,
  Post,
  PostByCategoryRequest,
} from "../types";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: apiBaseQuery,
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    createPost: builder.mutation<GenericResponse, CreatePostRequest>({
      query(formData) {
        return {
          url: "/posts/data/1",
          method: "POST",
          credentials: "include",
          body: formData,
        };
      },
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
      transformResponse: (response: any) => response.data,
    }),
    getAllPosts: builder.query<Post[], number>({
      query(pageNumber) {
        return {
          url: `/posts/data/${pageNumber}`,
          credentials: "include",
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: "Posts" as const,
                _id,
              })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
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
  useCreatePostMutation,
} = postApi;
