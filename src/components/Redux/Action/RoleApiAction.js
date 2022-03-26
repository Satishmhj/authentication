import { Api } from "../../../Api";
import { ROLE_API } from "../Constant";

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
