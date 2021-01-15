import { combineReducers } from "redux";
import auth from "./auth";
import checkpoint from "./checkpoint";

export default combineReducers({
  auth,
  checkpoint,
});
