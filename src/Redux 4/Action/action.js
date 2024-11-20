import { SUBMIT_FORM_FAILURE, SUBMIT_FORM_REQUEST, SUBMIT_FORM_SUCCESS } from "../Type/type"

export const submitFormRequest = (formData) => ({
  type:SUBMIT_FORM_REQUEST,
  payload:formData,
});
export const submitFormSuccess = (message) => ({
  type:SUBMIT_FORM_SUCCESS,
  payload:message,
});
export const submitFormFailure = (error) => ({
  type:SUBMIT_FORM_FAILURE,
  payload:error,
});