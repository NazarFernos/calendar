import { combineReducers } from "redux";
import calendarReducer from "./Calendar/reducer";


const rootReducer = combineReducers({
    calendar: calendarReducer
})

export default rootReducer;
