import { REQUEST_ISSUES, RECEIVE_ISSUES } from "../constants/actiontype";

export default function issues(state = {
  isFetching: true, 
  items:[] 
}, action) {
  switch (action.type) {
    case REQUEST_ISSUES:
      return Object.assign({}, state, {
        isFetching:true,
      });
    case RECEIVE_ISSUES:
      return Object.assign({}, state, {
        isFetching:false,
        items:action.post,
      });
    default:
      return state;
  }
}