import { CREATE_SCREEN, DELETE_SCREEN, SCREEN_API } from "../Constant";

const INITIAL_STATE = {
  screens: [],
};

const fetchScreenApiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SCREEN_API:
      return {
        ...state,
        screens: action.payload,
      };
    case CREATE_SCREEN:
      return {
        ...state,
        // screens: action.payload,
      };
    case DELETE_SCREEN:
      return {
        ...state,
        // screens: action.payload,
      };

    default:
      return state;
  }
};

export default fetchScreenApiReducer;
