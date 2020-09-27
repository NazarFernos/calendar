import calendarTypes from "./types";
import moment from 'moment';


const initialState = {
    date: moment(),
    hideModal: false,
    selectedDate: moment(),
}


const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case calendarTypes.CHANGE_DATE:
            return {...state, date: action.payload}
        case calendarTypes.MODAL_ACTIVITY:
            return {...state, hideModal: action.payload}
        case calendarTypes.SELECT_DATE:
            return {...state, selectedDate: action.payload}
        default:
            return state
    }
}

export default calendarReducer;