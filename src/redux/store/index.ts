import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "../reducers/userSlice";
import { authService, userService, postApi } from "../api";
import userReducer from "../reducers/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authService.reducerPath]: authService.reducer,
    [userService.reducerPath]: userService.reducer,
    [postApi.reducerPath]: postApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
    }).concat(
      authService.middleware,
      userService.middleware,
      postApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
