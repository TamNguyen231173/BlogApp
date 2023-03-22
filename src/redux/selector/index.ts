import { RootState } from "../store";

//user selector
export const userSelector = (state: RootState) => state.user.user;
