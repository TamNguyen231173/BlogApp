import { createApi } from "@reduxjs/toolkit/query/react";
import { apiBaseQuery } from "./apiService";
import { User } from "../types";
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
  }),
});

export const { useGetUserQuery } = userService;
