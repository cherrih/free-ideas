import React from 'react';

const Days = (props) => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return (
    <div className="calendar-days">{days.map((day, i) => <div className="calendar-day-name" id={day} key={i}>{day}</div>)}</div>
  )
}

export default Days;