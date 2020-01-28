import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
// import { SUCCESS, ERROR, CLEAR } from "../actions/types";

// export default function alert(state = {}, action) {
//   switch (action.type) {
//     case SUCCESS:
//       return {
//         type: "alert alert-success",
//         message: action.message
//       };
//     case ERROR:
//       return {
//         type: "alert alert-danger",
//         message: action.message
//       };
//     case CLEAR:
//       return {};
//     default:
//       return state;
//   }
// }
