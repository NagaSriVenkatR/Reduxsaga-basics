import { call, put, takeEvery } from "redux-saga/effects";
import { submitFormFailure, submitFormSuccess } from "../Action/action";
import { SUBMIT_FORM_REQUEST } from "../Type/type";

function submitFormAPI(formData) {
  return fetch("https://jsonplaceholder.typicode.com/posts",{
    method:'POST',
    headers:{'Content-Type ' : 'application/json'},
    body:JSON.stringify(formData),
  })
  .then((response) => response.json())
  .catch((error) => {
    throw error;
  });
}
function* submitFormSaga(action) {
  try {
    const response = yield call(submitFormAPI,action.payload);
    yield put(submitFormSuccess("Form Submitted Successfully !",response));
  } catch (error) {
    yield put(submitFormFailure('Failed to submit the form, please try again'));
  }
}
export default function* watchSubmitForm() {
  yield takeEvery(SUBMIT_FORM_REQUEST, submitFormSaga);
}