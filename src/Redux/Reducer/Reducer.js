import { FETCH_USER, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "../Type/Type";

const initialState = {
  user: null,
  loading: false,
  error: null
};
function userReducer(state = initialState, action) {
 switch (action.type) {
  case FETCH_USER:
    return {
      ...state,loading:true,error:null
    };
  case FETCH_USER_SUCCESS:
    return{
      ...state,loading:false,user:action.payload
    };
  case FETCH_USER_FAILURE:
    return{
      ...state,loading:false,error:action.payload
    };
  default:
    return state;
 }
}

export default userReducer
