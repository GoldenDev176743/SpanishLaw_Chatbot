// third-party
import { combineReducers } from "redux";

// project import
import chat from "./chat";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  chat,
});

export default reducers;
