import { combineReducers } from "redux";
import theme from "./theme/themeSlice";
import base from "./base";
import auth from "./auth";

const rootReducer = (asyncReducer) => (state, action) => {
  const combinedReducer = combineReducers({
    theme,
    auth,
    base,
    ...asyncReducer,
  });
  return combinedReducer(state, action);
};

export default rootReducer;
