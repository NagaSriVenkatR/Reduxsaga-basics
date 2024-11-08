import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUserFailure, fetchUserSuccess } from "../Action/Action";
import { FETCH_USER } from "../Type/Type";

function fetchUserApi(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then((response) => response.json());
}
function* fetchUserSaga(action) {
  try {
    const user = yield call(fetchUserApi,action.payload.userId);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}
function* Sagas() {
  yield takeEvery(FETCH_USER,fetchUserSaga);
}
export default Sagas;