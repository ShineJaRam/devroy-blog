import createSagaMiddleware from "redux-saga";
import { all, call } from "redux-saga/effects";
import watchGetNews from "./news/newsSaga";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([call(watchGetNews)]);
}

export default sagaMiddleware;
