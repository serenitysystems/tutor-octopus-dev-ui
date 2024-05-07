import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quizes",
  initialState: {
    data: {},
    activeQuiz: {},
  },
  reducers: {
    setQuizes: (state, action) => {
      state.data = action.payload;
    },
    setActiveQuiz: (state, action) => {
      state.activeQuiz = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuizes, setActiveQuiz } = quizSlice.actions;
export const quizesData = (state) => state.quiz;

export default quizSlice.reducer;
