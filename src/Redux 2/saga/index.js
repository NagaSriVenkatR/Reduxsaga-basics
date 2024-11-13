import { call, put, takeEvery } from "redux-saga/effects";
import { fetchDataFailure, fetchDataSuccess } from "../action";

const fetchDataFromAPI = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log("Fetched data:", data); // Debug log
    return data;
  } catch (error) {
    throw error;
  }
};
function* fetchData() {
  try {
    const data = yield call(fetchDataFromAPI);
    console.log("Data in saga:", data);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}
export function* watchFetchData() {
  yield takeEvery("FETCH_DATA_SUCCESS",fetchData);
}