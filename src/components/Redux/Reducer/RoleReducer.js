import { ROLE_API } from "../Constant";

const INITIAL_STATE = {
  roles: [],
};

const fetchRoleApiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ROLE_API:
      return {
        ...state,
        roles: action.payload,
      };

    default:
      return state;
  }
};

export default fetchRoleApiReducer;
