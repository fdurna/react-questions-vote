import * as actions from "../constants/QesConstants";

const initialState = {
  qes: [],
};

export const QesReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_QES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_QES_SUCCESS:
      return {
        ...state,
        loading: false,
        qes: action.payload.data,
      };
    case actions.GET_QES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
