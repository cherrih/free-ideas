import React from 'react';
import Days from './Days.jsx';

const Calendar = (props) => {
  const today = new Date();
  console.log(today.getDay());
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
    </div>
  )
}

export default Calendar;