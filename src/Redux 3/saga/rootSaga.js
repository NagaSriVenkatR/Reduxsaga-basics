import { all } from "redux-saga/effects";
import watchFetchData from "./Saga";

export default function* rootSaga(){
  yield all([watchFetchData()]);
}