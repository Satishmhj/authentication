import { Api } from "../../../Api";
import { CREATE_USER, USER_API } from "../Constant";

const INITIAL_STATE = {
  userList: [],
};

const fetchUserApiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_API:
      return {
        ...state,
        userList: action.payload,
      };
    case CREATE_USER:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default fetchUserApiReducer;
