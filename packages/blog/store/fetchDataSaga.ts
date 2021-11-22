import { fetchDataActions } from "./fetchDataSlice";
import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import * as process from "process";

const fetch = () => {
  return axios.get(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
};

function* fetchData() {
  try {
    const response: AxiosResponse = yield call(fetch);
    yield put(fetchDataActions.getDataSuccess(response.data.articles));
  } catch (error) {
    console.error(error);
    yield put(fetchDataActions.getDataError(error));
  }
}

function* watchGetData() {
  yield takeLatest(fetchDataActions.getData, fetchData);
}

export default watchGetData;
