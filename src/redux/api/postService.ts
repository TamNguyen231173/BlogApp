import { createApi } from "@reduxjs/toolkit/query/react";
import { apiBaseQuery } from "./apiService";
import {
  CreatePostRequest,
  GenericResponse,
  Post,
  PostByCategoryRequest,
  PostByUserRequest,
  UpdatePostRequest,
  Comment,
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
      providesTags: (result) => (result ? [{ type: "Posts", id: "LIST" }] : []),
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
      providesTags: (result) => (result ? [{ type: "Posts", id: "LIST" }] : []),
      transformResponse: (response: any) => response.posts,
    }),
    getPostsByUser: builder.query<Post[], PostByUserRequest>({
      query({ userId, page }) {
        return {
          url: `/posts/getPostsByUser/${userId}/${page}`,
          credentials: "include",
        };
      },
      providesTags: (result) => (result ? [{ type: "Posts", id: "LIST" }] : []),
      transformResponse: (response: any) => response.posts,
    }),
    deletePost: builder.mutation<GenericResponse, string>({
      query(id) {
        return {
          url: `/posts/manager/${id}`,
          method: "DELETE",
          credentials: "include",
        };
      },
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
      transformResponse: (response: any) => response,
    }),
    updatePost: builder.mutation<GenericResponse, UpdatePostRequest>({
      query(formData) {
        return {
          url: `/posts/manager/${formData.id}`,
          method: "PATCH",
          credentials: "include",
          body: formData,
        };
      },
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
      transformResponse: (response: any) => response,
    }),
    getComments: builder.query<Comment, number>({
      query(id) {
        return {
          url: `/posts/comment/${id}/1`,
          credentials: "include",
        };
      },
      transformResponse: (response: any) => response.data.post,
      providesTags: (result) =>
        result ? [{ type: "Posts", id: "COMMENT" }] : [],
    }),
    postComment: builder.mutation<GenericResponse, any>({
      query(formData) {
        return {
          url: `/posts/comment/${formData.postId}/1`,
          method: "POST",
          credentials: "include",
          body: formData,
        };
      },
      invalidatesTags: [{ type: "Posts", id: "COMMENT" }],
    }),
    deleteComment: builder.mutation<GenericResponse, any>({
      query(formData) {
        return {
          url: `/posts/comment/${formData.postId}/${formData.commentId}/1`,
          method: "DELETE",
          credentials: "include",
        };
      },
      invalidatesTags: [{ type: "Posts", id: "COMMENT" }],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostQuery,
  useGetPostsByCategoryQuery,
  useCreatePostMutation,
  useGetPostsByUserQuery,
  useLazyGetAllPostsQuery,
  useLazyGetPostQuery,
  useLazyGetPostsByCategoryQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
  useLazyGetCommentsQuery,
  usePostCommentMutation,
  useDeleteCommentMutation,
} = postApi;
