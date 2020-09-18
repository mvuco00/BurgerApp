import * as actionTypes from "../actions/actionTypes";
import { updateObjects } from "../utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return updateObjects(state, { error: null, loading: true });
    case actionTypes.AUTH_SUCCESS:
      return updateObjects(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
      });
    case actionTypes.AUTH_FAIL:
      return updateObjects(state, { error: action.error, loading: false });

    case actionTypes.AUTH_LOGOUT:
      return updateObjects(state, { token: null, userId: null });

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
