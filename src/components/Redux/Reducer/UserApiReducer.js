import { Api } from "../../../Api";
import { CREATE_USER, DELETE_USER, UPDATE_USER, USER_API } from "../Constant";

const INITIAL_STATE = {
  userList: [],
  userDelete: [],
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
    case DELETE_USER:
      let deleteUser = [...state];
      let index = deleteUser.findIndex((item) => {
        return item.id == action.payload.id;
      });

      deleteUser.splice(index, 1);

      return {
        ...state,
        userDelete: deleteUser,
      };
      case UPDATE_USER:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default fetchUserApiReducer;
