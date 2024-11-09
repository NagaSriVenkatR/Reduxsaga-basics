import { GET_USERS_FAILURE, GET_USERS_SUCCESS } from "../Action/ACtion";

const initialState = { }
function myReducer(state = initialState , action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state, payload:action.users
      };
    case GET_USERS_FAILURE:
      return{
        ...state,payload:action.error
      };
    default:
      return state;
  }
} 
export default myReducer;