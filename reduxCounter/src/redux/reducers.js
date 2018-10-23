import {
    combineReducers
} from "redux";
import counterReducer from "./modules/counter";
import nameReducer from './modules/name';

// ROOT REDUCER
export default combineReducers({
    counter: counterReducer,
    counterName: nameReducer,
});