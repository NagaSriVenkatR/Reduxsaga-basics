import { all } from "redux-saga/effects";
import watchSubmitForm from "./saga";

export default function* rootSaga() {
  yield all([watchSubmitForm()]);
}