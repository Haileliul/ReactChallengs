import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Dude lala" },
  { id: "1", name: "Haile baye" },
  { id: "2", name: "Baye Tamire" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
