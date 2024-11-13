const initialState = {
  data: null,
  error: null,
  isloading:false,
};
const dataReducer = (state = initialState,action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, isLoading: true, error: null };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        error: null,
        isloading: false,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        data: null,
        error: action.payload,
        isloading: false,
      };
    case "DELETE_DATA_REQUEST":
      return {
        ...state,
        data: null,
        error: null,
      };
    default:
      return state;
  }
}
export default dataReducer;