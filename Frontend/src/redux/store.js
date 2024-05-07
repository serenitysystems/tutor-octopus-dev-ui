import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizslice";

export default configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
