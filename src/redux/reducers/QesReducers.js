import * as actions from "../constants/QesConstants";

const initialState = {
  qes: [],
};

export const QesReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_QES_REQUEST:
      return{
          ...state,
          loading:true
      };
    default:
      return state;
  }
};
