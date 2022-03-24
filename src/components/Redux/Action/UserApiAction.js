import { Api } from "../../../Api";
import { CREATE_USER, DELETE_USER, UPDATE_USER, USER_API } from "../Constant";

export const userApi = () => async (dispatch) => {
  let res = await Api("user", "GET", null);

  if (!res.success) {
    alert(res.message);
  }
  dispatch({
    type: USER_API,
    payload: res.data,
  });
};
export const createUser = (data) => async (dispatch) => {
  let res = await Api("user", "POST", data);
  // console.log(res);
  if (!res.success) {
    alert(res.message);
  }
  dispatch({
    type: CREATE_USER,
  });
};
export const deleteUser = (id) => async (dispatch) => {
  let res = await Api(
    `user/${id}`,

    "DELETE"
  );
  // console.log(res);

  // dispatch({
  //   type: DELETE_USER,
  //   payload: res.data,
  // });

  if (res.success) {
    dispatch(userApi());
  }
};

export const updateUser = (id, data) => async (dispatch) => {
  let res = await Api(`user/${id}`, "PUT", data);
  // console.log(data);

  if (res.success) {
    dispatch(userApi());
  } else {
    alert(res.message);
  }
  // dispatch({});
};
