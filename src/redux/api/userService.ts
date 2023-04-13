import { createApi } from "@reduxjs/toolkit/query/react";
import { apiBaseQuery } from "./apiService";
import { User, GenericResponse, Post } from "../types";
import { setUser } from "../reducers/userSlice";

export const userService = createApi({
  reducerPath: "userService",
  baseQuery: apiBaseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query<User, null>({
      query() {
        return {
          url: "users/info/me",
          credentials: "include",
        };
      },
      transformResponse: (result: { user: User }) => result.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
    toggleBookmark: builder.mutation<GenericResponse, string>({
      query(postId) {
        return {
          url: `users/bookmarks/1`,
          method: "POST",
          credentials: "include",
          body: { postId },
        };
      },
      invalidatesTags: [{ type: "User", id: "BOOKMARKS" }],
      transformResponse: (result: GenericResponse) => result,
    }),
    getUserBookmarks: builder.query<Post[], number>({
      query(page) {
        return {
          url: `users/bookmarks/${page}`,
          credentials: "include",
        };
      },
      providesTags: (result) =>
        result ? [{ type: "User", id: "BOOKMARKS" }] : [],
      transformResponse: (result: { posts: Post[] }) => result.posts,
    }),
  }),
});

export const {
  useGetUserQuery,
  useToggleBookmarkMutation,
  useGetUserBookmarksQuery,
} = userService;
