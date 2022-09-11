import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../features/quiz/quizSlice";
import userReducer from "../features/user/userSlice";
import adminReducer from "../features/admin/adminSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    user: userReducer,
    admin: adminReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
