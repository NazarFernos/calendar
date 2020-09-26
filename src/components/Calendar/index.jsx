import React, { Component } from 'react';
import moment from 'moment';
import Button from '../Button';
import Week from './Week';
import Days from './Days';
import Modal from '../Modal';
import { setDate } from '../../redux/Calendar/actions';
import './style.css';


class DatePicker extends Component {
  constructor() {
    super()
    this.state = {
      shown: moment(),
      hideModal: true
    };
  }

  showMonth(months) {

    const shown = this.state.shown
      .clone().add(months, 'months');

    this.setState({shown});
  }

  quickPick(days) {

    const picked = moment().add(days, 'days');
    const shown = picked.clone();

    this.setState({picked, shown});
  }

  pick(date) {

    const picked = date.clone();
    const shown = picked.clone();

    this.setState({ picked, shown });
  }


  toggleModal() {

    const hideModal = !this.state.hideModal;

    this.setState({ hideModal });
  }

  configModal() {

    return {
      hideModal: this.state.hideModal,
      toggleModal: this.toggleModal()
    }
  };

  render() {
    const { shown, picked, hideModal } = this.state;
    const { setDate } = this.props;
    //console.log(store.getState())
    return (
      <div className="date-picker">
        <ul className="date-picker__head">
          <li>
            <Button filled onClick={ () => this.showMonth(-1) }>‹</Button>
          </li>
          <li>
            <div className="date-picker__month">{shown.format('MMMM YYYY')}</div>
          </li>
          <li>
            <Button filled onClick={() => this.showMonth(1)}>›</Button>
          </li>
        </ul>
        <hr />
          <Days shown={shown} picked={picked} onPick={ date => this.pick(date) } toggleModal={() => this.toggleModal()} />
        <hr />
        <Week />
        <hr />
        {hideModal === true && (<Modal {...this.configModal}>
          <div className="modalContainer">
            <div className="inp">
              <div className="inputs">
                <div>
                  <label htmlFor="month">Month</label>
                </div>
                <input
                  id="month"
                  type="text"
                  value={shown.format('MMMM')}
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
                  value={shown.format('Do dddd' )}
                  readOnly
                />
              </div>
            </div>
            
            <button 
              className="hideModal"
              onClick={() => this.toggleModal()}>
                ×
            </button>
          </div>
          
      </Modal>)}
      </div>
    );
  }
}

export default DatePicker;
