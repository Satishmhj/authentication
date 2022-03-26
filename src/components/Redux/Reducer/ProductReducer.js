import { CREATE_PRODUCTS, DELETE_PRODUCTS, PRODUCTS, UPDATE_PRODUCTS } from "../Constant";

const INITIAL_STATE = {
  products: [],
};

const fetchProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case CREATE_PRODUCTS:
      return {
        ...state,
      };
    case DELETE_PRODUCTS:
      return {
        ...state,
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default fetchProductReducer;
