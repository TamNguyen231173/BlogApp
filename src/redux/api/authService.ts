import { createApi } from "@reduxjs/toolkit/query/react";
import { LoginInput, RegisterInput } from "../../features/auth/screens";
import { userService } from "./userService";
import { apiBaseQuery } from "./apiService";
import { GenericResponse } from "../types";

export const authService = createApi({
  reducerPath: "authService",
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    register: builder.mutation<GenericResponse, RegisterInput>({
      query(data) {
        return {
          url: "auth/register",
          method: "POST",
          body: data,
        };
      },
    }),
    login: builder.mutation<
      { access_token: string; status: string },
      LoginInput
    >({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userService.endpoints.getUser.initiate(null));
        } catch (error) {
          console.log("error", error);
        }
      },
    }),
    logout: builder.mutation<void, void>({
      query() {
        return {
          url: "auth/logout",
          credentials: "include",
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authService;
