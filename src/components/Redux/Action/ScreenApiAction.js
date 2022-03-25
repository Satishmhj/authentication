import { Api } from "../../../Api";
import { DELETE_SCREEN, SCREEN_API } from "../Constant";

export const screenApi = () => async (dispatch) => {
  let res = await Api("screens", "GET", null);

  if (!res.success) {
    alert(res.message);
  }
  dispatch({
    type: SCREEN_API,
    payload: res.data,
  });
};
export const screenCreate = (data) => async (dispatch) => {
  let res = await Api("screens", "post", data);

  if (!res.success) {
    alert(res.message);
  }
  dispatch({
    type: SCREEN_API,
    payload: res.data,
  });
};
export const deleteScreen = (id) => async (dispatch) => {
  let res = await Api(`screens/${id}`, "DELETE", null);

  if (!res.success) {
    alert(res.message);
  }
  dispatch({
    type: DELETE_SCREEN,
    // payload: res.data,
  });
};
