import { createSlice } from "@reduxjs/toolkit";

const initialStateValue =
  "pk.eyJ1IjoiZGhhZmFnayIsImEiOiJjbGFtazgyeWYwOGR6M25yd2Mxb2gwNmNqIn0.iFl4jbREm5pGc9vS-QuE9Q"; // use my own token

export const tokenSlice = createSlice({
  name: "token",
  initialState: { value: initialStateValue },
  reducers: {
    token: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { token } = tokenSlice.actions;

export default tokenSlice.reducer;
