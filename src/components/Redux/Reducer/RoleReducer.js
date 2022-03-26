import { CREATE_ROLE, DELETE_ROLE, ROLE_API, UPDATE_ROLE } from "../Constant";

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
    case CREATE_ROLE:
      return {
        ...state,
      };
    case DELETE_ROLE:
      return {
        ...state,
      };
    case UPDATE_ROLE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default fetchRoleApiReducer;
