import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../components/authSlice";
import postsReducer from "./PostsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});
