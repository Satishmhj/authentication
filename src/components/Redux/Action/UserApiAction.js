import { Api } from "../../../Api";
import { CREATE_USER, USER_API } from "../Constant";

export const userApi = () => async (dispatch) => {
  let res = await Api("user", "GET", null);
  dispatch({
    type: USER_API,
    payload: res.data,
  });
};
export const createUser = (data) => async (dispatch) => {
  let res = await Api("user", "POST", data);
  dispatch({
    type: CREATE_USER,
    
  });
};
