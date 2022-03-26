import { combineReducers } from "redux";

import fetchUserApiReducer from "./Reducer/UserApiReducer";
import fetchScreenApiReducer from "./Reducer/ScreenReducer";
import fetchRoleApiReducer from "./Reducer/RoleReducer";

const rootReducer = combineReducers({
  user: fetchUserApiReducer,
  screen: fetchScreenApiReducer,
  role: fetchRoleApiReducer,
});

export default rootReducer;
