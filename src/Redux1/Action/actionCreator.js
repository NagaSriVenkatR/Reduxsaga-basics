import { GET_USERS_FETCH } from "./ACtion";

export function takeGetUserFetchAction() {
  return{
    type:GET_USERS_FETCH
  };
}