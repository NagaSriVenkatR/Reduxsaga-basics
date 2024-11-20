const initialState = {
  loading:false,
  success:null,
  error:null,
};
export default function formReducer(state=initialState,action) {
  switch (action.type) {
    case 'SUBMIT_FORM_REQUEST':
      return{
        ...state,
        loading:true,
        success:null,
        error:null
      };
    case 'SUBMIT_FORM_SUCCESS':
      return{
        ...state,
        loading:false,
        success:action.payload
      };
    case 'SUBMIT_FORM_FAILURE':
      return{
        ...state,
        loading:false,
        error:action.payload
      }
    default:
      return state;
  }
}