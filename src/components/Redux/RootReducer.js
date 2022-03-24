import { combineReducers } from "redux";

import fetchUserApiReducer from "./Reducer/UserApiReducer";
import fetchScreenApiReducer from "./Reducer/ScreenReducer";

const rootReducer = combineReducers({
  user: fetchUserApiReducer,
  screen: fetchScreenApiReducer,
});

export default rootReducer;
