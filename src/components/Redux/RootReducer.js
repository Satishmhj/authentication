import { combineReducers } from "redux";

import fetchUserApiReducer from "./Reducer/UserApiReducer";
import fetchScreenApiReducer from "./Reducer/ScreenReducer";
import fetchRoleApiReducer from "./Reducer/RoleReducer";
import ScreenRoleMapReducer from "./Reducer/ScreenRoleMapReducer";
import fetchProductReducer from "./Reducer/ProductReducer";

const rootReducer = combineReducers({
  user: fetchUserApiReducer,
  screen: fetchScreenApiReducer,
  role: fetchRoleApiReducer,
  map: ScreenRoleMapReducer,
  products: fetchProductReducer,
});

export default rootReducer;
