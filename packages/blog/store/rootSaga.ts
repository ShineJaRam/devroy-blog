import createSagaMiddleware from "redux-saga";
import { all, call } from "redux-saga/effects";
import watchGetData from "~store/fetchDataSaga";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([call(watchGetData)]);
}

export default sagaMiddleware;
