import React from 'react';
import Days from './Days.jsx';
import Dates from './Dates.jsx';

const Calendar = (props) => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="calendar-header-left">
          <div>Deadline</div>
          <div className="calendar-header-title">April 1</div>
        </div>
        <div className="calendar-header-right">
          <div>Idea N 1</div>
          <div className="calendar-header-title">Rogue</div>
        </div>
      </div>
      <Days />
      <Dates events={props.events}/>
    </div>
  )
}

export default Calendar;