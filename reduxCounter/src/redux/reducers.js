import {
    combineReducers
} from "redux";
import counterReducer from "./modules/counter";

// ROOT REDUCER
export default combineReducers({
    counter: counterReducer
});