import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_DATA_REQUEST, fetchDataFailure, fetchDataSuccess } from "../action/Action";

function fetchUserAPI() {
  return fetch("https://jsonplaceholder.typicode.com/users/5")
  .then((response)=>response.json())
  .catch((error) => {
    throw error;
  })
}
function* fetchDataSaga() {
  try {
    const data = yield call(fetchUserAPI);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put (fetchDataFailure(error.message));
  }
}
function* watchFetchData() {
  yield takeEvery(FETCH_DATA_REQUEST,fetchDataSaga);
}
export default watchFetchData;