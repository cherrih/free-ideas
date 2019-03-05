import React from 'react';
import dateFns from 'date-fns';

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currMonth: new Date(),
      selectedDate: new Date()
    }
  }

  // const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  renderDates () {
    const { currMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = 'D';
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      console.log(day, endDate)
      for (let i = 0; i < 7; i ++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div>{formattedDate}</div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
      <div>{days}</div>
      )
      days = [];
    }
    return <div>{rows}</div>
  }
  render () {
    return (
      <>
      {this.renderDates()}
      </>
    )
  }
}

export default Dates;