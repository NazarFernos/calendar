import React from 'react';
import DatePicker from '../Calendar';
import './styles.scss';


const Main = () => {

    return (
        <main className="main">
            <div className="background">
                <div className="textbox">
                    <div className="title">
                        <h1>
                            Choose the day  <br /> for the meeting
                        </h1>
                    </div>
                    <div className="text">
                        <h4>
                            We encourage you to book your <br />
                            appointment online. <br />
                            This will save you time.
                        </h4>
                    </div>
                </div>
            </div>
            <div className="calendar">
                <DatePicker />
            </div>
        </main>
    )
}

export default Main;