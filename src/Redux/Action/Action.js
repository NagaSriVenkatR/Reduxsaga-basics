import { FETCH_USER, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "../Type/Type";

export const fetchUser = (userId) => ({
  type:FETCH_USER,
  payload:{userId},
});
export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload : user,
});
export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload : error,
});