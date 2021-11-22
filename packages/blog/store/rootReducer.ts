import { combineReducers } from "redux";
import defaultData, { DataInterface } from "./fetchDataSlice";

export interface RootState {
  defaultData: DataInterface;
}

export const rootReducer = combineReducers({
  data: defaultData
});
