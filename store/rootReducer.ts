import { combineReducers } from "redux";
import newsSlice, { NewsData } from "./news/newsSlice";

export interface RootState {
  newsData: NewsData;
}

export const rootReducer = combineReducers({
  news: newsSlice
});
