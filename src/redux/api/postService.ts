import { createApi } from "@reduxjs/toolkit/query/react";
import { apiBaseQuery } from "./apiService";
import { Post } from "../types";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: apiBaseQuery,
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query() {
        return {
          url: `/posts`,
          credentials: "include",
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Posts" as const,
                id,
              })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
      transformResponse: (results: { data: { posts: Post[] } }) =>
        results.data.posts,
    }),
  }),
});

export const { useGetAllPostsQuery } = postApi;
