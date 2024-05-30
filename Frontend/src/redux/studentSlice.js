import { createSlice } from "@reduxjs/toolkit";

export const studentDetailSlice = createSlice({
  name: "Student Details",
  initialState: {
  
  },
  reducers: {
    setStudentDetails: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStudentDetails } = studentDetailSlice.actions;
export const studentDetails = (state) => state.student;

export default studentDetailSlice.reducer;
