import { Api } from "../../../Api";
import { CREATE_PRODUCTS, DELETE_PRODUCTS, PRODUCTS, UPDATE_PRODUCTS } from "../Constant";

export const fetchProducts = () => async (dispatch) => {
  const res = await Api("product", "GET", null);

  if (!res.success) {
    alert(res.message);
  }

  dispatch({
    type: PRODUCTS,
    payload: res.data,
  });
};
export const createProducts = (data) => async (dispatch) => {
  const res = await Api("product", "POST", data);

  if (!res.success) {
    alert(res.message);
  }

  dispatch({
    type: CREATE_PRODUCTS,
    // payload: res.data,
  });
};
export const deleteProduct = (id) => async (dispatch) => {
  const res = await Api(`product/${id}`, "DELETE", null);

  if (!res.success) {
    alert(res.message);
  }

  dispatch({
    type: DELETE_PRODUCTS,
    // payload: res.data,
  });
};
export const updateProducts = (id, data) => async (dispatch) => {
  const res = await Api(`product/${id}`, "DELETE", data);

  if (!res.success) {
    alert(res.message);
  }

  dispatch({
    type: UPDATE_PRODUCTS,
    // payload: res.data,
  });
};
