import { createSlice } from "@reduxjs/toolkit";

export interface DataInterface {
  id: string;
  title: string;
}

export interface StateInterface {
  isLoading: boolean;
  data: DataInterface[];
  error: boolean;
}

const initialState: StateInterface = {
  isLoading: false,
  data: [],
  error: false
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state) => {
      state.isLoading = true;
    },
    getDataSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getDataError: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.data = action.payload;
    }
  }
});

export const fetchDataActions = dataSlice.actions;
export default dataSlice.reducer;
