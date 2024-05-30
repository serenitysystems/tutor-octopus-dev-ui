import { createSlice } from "@reduxjs/toolkit";
import { QUIZESDATA } from "../TutorPanel/Quiz/QuizMain";

export const quizSlice = createSlice({
  name: "quizes",
  initialState: {
    data: [],
    activeQuiz: {},
  },
  reducers: {
    setQuizes: (state, action) => {
      state.data = action.payload;
    },
    setActiveQuiz: (state, action) => {
      state.activeQuiz = action.payload;
    },
    addQuiz: (state, action) => {
      state.data.push(action.payload);
    },
    updateQuiz: (state, action) => {
      const updatedQuiz = action.payload;
      const index = state.data.findIndex(
        (quiz) => quiz._id === updatedQuiz._id
      );
      if (index !== -1) {
        state.data[index] = updatedQuiz;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuizes, setActiveQuiz, addQuiz, updateQuiz } =
  quizSlice.actions;
export const quizesData = (state) => state.quiz;

export default quizSlice.reducer;
