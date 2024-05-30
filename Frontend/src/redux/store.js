import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizslice";
import studentReducer from "./studentSlice";

export default configureStore({
  reducer: {
    quiz: quizReducer,
    student: studentReducer,
  },
});
