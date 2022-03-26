import { Api } from "../../../Api";
import { DELETE_ROLE, ROLE_API, UPDATE_ROLE } from "../Constant";

export const roleApi = () => async (dispatch) => {
  let res = await Api("roles", "GET", null);

  if (!res.success) {
    alert(res.message);
  }
  dispatch({
    type: ROLE_API,
    payload: res.data,
  });
};
export const roleCreate = (data) => async (dispatch) => {
  let res = await Api("roles", "POST", data);

  if (!res.success) {
    alert(res.message);
  }
  dispatch({
    type: ROLE_API,
  });
};
export const roleDelete = (id) => async (dispatch) => {
  let res = await Api(`roles/${id}`, "DELETE", null);

  if (!res.success) {
    alert(res.message);
  }
  dispatch({
    type: DELETE_ROLE,
  });
};
export const roleUpdate = (id, data) => async (dispatch) => {
  let res = await Api(`roles/${id}`, "PUT", data);

  if (!res.success) {
    alert(res.message);
  } else {
    dispatch(roleApi());
  }
  dispatch({
    type: UPDATE_ROLE,
  });
};
