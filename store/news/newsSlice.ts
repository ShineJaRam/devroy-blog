import { createSlice } from "@reduxjs/toolkit";

export interface NewsData {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  title: string;
  link: string;
  description: string;
}

export interface NewsState {
  isLoading: boolean;
  data: NewsData[];
  error: boolean;
}

const initialState: NewsState = {
  isLoading: false,
  data: [],
  error: false
};

export const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getNews: (state) => {
      state.isLoading = true;
    },
    getNewsSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getNewsError: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.data = [];
      console.log("에러 메세지", action.payload);
    }
  }
});

export const fetchNewsActions = NewsSlice.actions;
export default NewsSlice.reducer;
