import { combineReducers } from "redux";
import ComponentsDataReducer from "./componentData";

const rootReducer = combineReducers({ ComponentsDataReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
