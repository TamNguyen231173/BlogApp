import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

const userReducer = userSlice.reducer;
export default userReducer;

export const { logout, setUser } = userSlice.actions;
