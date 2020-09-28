import React from 'react';
import Button from '../Button';
import Week from './Week';
import Days from './Days';
import Modal from '../Modal';
import './style.scss';
import {useDispatch, useSelector} from 'react-redux';
import calendarTypes from '../../redux/Calendar/types';


const mapState = ({calendar}) => ({
    shownDate: calendar.date,
    hideModal: calendar.hideModal,
    selectDate: calendar.selectedDate
});

const DatePicker = () => {

    const {shownDate, hideModal, selectDate} = useSelector(mapState);
    const dispatch = useDispatch();

    const showMonth = (months) => {
        dispatch ({
            type: calendarTypes.CHANGE_DATE,
            payload: shownDate.clone().add(months, 'months'),
        })
    }

    const pick = (selectDate) => {
        dispatch({
            type: calendarTypes.SELECT_DATE,
            payload: selectDate
        })
    }

    const toggleModal = () => {
        dispatch ({
            type: calendarTypes.MODAL_ACTIVITY,
            payload: !hideModal
        })
    }

    const configModal = () => {
        return {
            hideModal: hideModal,
            toggleModal: toggleModal()
        }
    };

    return (
        <div className="date-picker">
            <ul className="date-picker__head">
                <li>
                    <Button filled onClick={() => showMonth(-1)}>‹</Button>
                </li>
                <li>
                    <div className="date-picker__month">{shownDate.format('MMMM YYYY')}</div>
                </li>
                <li>
                    <Button filled onClick={() => showMonth(1)}>›</Button>
                </li>
            </ul>
            <hr/>
            <Days shownDate={shownDate} picked={selectDate} onPick={selectDate => pick(selectDate)}
                  toggleModal={() => toggleModal()}/>
            <hr/>
            <Week/>
            <hr/>
            {hideModal === true && (<Modal {...configModal}>
                <div className="modalContainer">
                    <div className="d-flex">
                        <button
                            className="hideModal"
                            onClick={() => toggleModal()}>
                            ×
                        </button>
                    </div>
                    <div className="modal_fields">
                        <div className="inputs">
                            <div>
                                <label htmlFor="month">Month</label>
                            </div>
                            <input
                                id="month"
                                type="text"
                                value={selectDate.format('MMMM')}
                                readOnly
                            />
                        </div>
                        <div className="inputs">
                            <div>
                                <label htmlFor="day">Day</label>
                            </div>
                            <input
                                id="day"
                                type="text"
                                value={selectDate.format('Do dddd')}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </Modal>)}
        </div>
    );

}

export default DatePicker;