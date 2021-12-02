import { fetchNewsActions } from "./newsSlice";
import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";

const fetch = () => {
  return axios.get(`https://openapi.naver.com/v1/search/news.json`, {
    params: {
      query: ""
    },
    headers: {
      "X-Naver-Client-Id": process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || "",
      "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET || ""
    }
  });
};

function* fetchNews() {
  try {
    const response: AxiosResponse = yield call(fetch);
    console.log("response 데이터 확인", response);
    yield put(fetchNewsActions.getNewsSuccess(response.data.articles));
  } catch (error) {
    console.error(error);
    yield put(fetchNewsActions.getNewsError(error));
  }
}

function* watchGetNews() {
  yield takeLatest(fetchNewsActions.getNews, fetchNews);
}

export default watchGetNews;
