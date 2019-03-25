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
  renderEvents (year, month, date) {
    let returnEvents = [];
    if(this.props.events[year][month][date]) {
      this.props.events[year][month][date].map(event => {
        returnEvents.push(<div>{event.title}</div>)
      })  
    }
    return returnEvents;
  }

  renderDates () {
    const { currMonth } = this.state;
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
      for (let i = 0; i < 7; i ++) {
        formattedDate = dateFns.format(day, dateFormat);
        const year = dateFns.getYear(day);
        const month = dateFns.getMonth(day);
        const date = dateFns.getDate(day);

        days.push(
          <div className={`calendar-date ${
            dateFns.isSameMonth(day, monthStart) ?
            "current-month" : "not-current"
          }`} key={day}>
            <div>{this.renderEvents(year, month, date)}</div>
            <span className="calendar-number">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
      <div className="calendar-row" key={day}>{days}</div>
      )
      days = [];
    }
    return <div className="calendar-body">{rows}</div>
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