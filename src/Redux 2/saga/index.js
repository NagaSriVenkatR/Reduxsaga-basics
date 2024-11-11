import { call, put, takeEvery } from "redux-saga/effects";
import { fetchDataFailure, fetchDataSuccess } from "../action";

const fetchDataFromAPI = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/4"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
function* fetchData() {
  try {
    const data = yield call(fetchDataFromAPI);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}
export function* watchFetchData() {
  yield takeEvery("FETCH_DATA_REQUEST",fetchData);
}