import { SCREEN_ROLE_MAP } from "../Constant";

export const screenRoleMapping = (id) => async (dispatch) => {
    let res = await Api("roles/screen/mapping", "GET", null);
  
    if (!res.success) {
      alert(res.message);
    }
    dispatch({
      type: SCREEN_ROLE_MAP,
    //   payload: res.data,
    });
  };