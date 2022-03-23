import { combineReducers } from "redux";

import fetchUserApiReducer from "./Reducer/UserApiReducer";

const rootReducer = combineReducers({
  user: fetchUserApiReducer,
});

export default rootReducer;
