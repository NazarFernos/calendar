import calendarTypes from "./types";
import moment from 'moment';


const initialState = {
    shown: moment()
}


const calendarReducer = (state = initialState, action) => {
    switch(action.type) {
        case calendarTypes.SET_DATE:
            return {
                ...state,
                shown: state.shown.format('Do dddd' )
            }
        default:
            return state
    }

}

export default calendarReducer;