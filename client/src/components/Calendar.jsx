import React from 'react';
import Days from './Days.jsx';
import Dates from './Dates.jsx';

const Calendar = (props) => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="calendar-left">
          <div>Deadline</div>
          <div className="calendar-header-title">April 1</div>
        </div>
        <div className="calendar-header-right">
          <div>Idea N 1</div>
          <div className="calendar-header-title">Rogue</div>
        </div>
      </div>
      <Days />
      <Dates />
      <div>
        <span className="calendar-past">past</span>
        <span className="calendar-future">future</span>
      </div>
    </div>
  )
}

export default Calendar;