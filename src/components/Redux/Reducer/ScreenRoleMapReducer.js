import { SCREEN_ROLE_MAP } from "../Constant";

const INITIAL_STATE = {
  map: [],
};

const ScreenRoleMapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SCREEN_ROLE_MAP:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default ScreenRoleMapReducer;
