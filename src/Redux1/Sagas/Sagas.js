import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import { GET_USERS_FAILURE, GET_USERS_FETCH, GET_USERS_SUCCESS } from "../Action/ACtion";
async function userFetch() {
  return axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.data;
  }).catch((err) => {
    throw err;
  });
}
function* getUsersFetch() {
  try {
    const users = yield call(userFetch);
    yield put({type: GET_USERS_SUCCESS,users});
  } catch (error) {
    yield put({type:GET_USERS_FAILURE,error});
  }
}
function* mySaga() {
  while (true) {
    yield take(GET_USERS_FETCH);
    yield call(getUsersFetch);
  }
}
export default mySaga;