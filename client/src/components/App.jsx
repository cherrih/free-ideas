import React from 'react';
import Header from './Header.jsx';
import Calendar from './Calendar.jsx';
import { CALENDAR_ID, API_KEY } from '../../../calendar.config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: null,
      mouseY: null,
      events: {
        2019: {
          0: {},
          1: {},
          2: {},
          3: {},
          4: {},
          5: {},
          6: {},
          7: {},
          8: {},
          9: {},
          10: {},
          11: {},
        },
        2020: {
          0: {},
          1: {},
          2: {},
          3: {},
          4: {},
          5: {},
          6: {},
          7: {},
          8: {},
          9: {},
          10: {},
          11: {},
        },
      }
    };
    this.mouseMove = this.mouseMove.bind(this);
  }

  mouseMove(e) {
    this.setState({
      mouseX: e.pageX,
      mouseY: e.pageY
    })
  }
  followMouse() {
    console.log('I need to move')
  }

  componentDidMount() {
    let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;
    const events = this.state.events;
    fetch(url)
      .then(response => response.json())
      .then(resp => {
        resp.items.map((event) => {
          const start = event.start.date || event.start.dateTime;
          const date = new Date(start);
          const year = date.getFullYear();
          const month = date.getMonth();
          const day = date.getDate();
          const dateObj = { start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary};
          if (events[year][month][day]) {
            events[year][month][day].push(dateObj)
          } else {
            events[year][month][day] = [dateObj]
          }
        })
        this.setState({
          events: events
        }, () => {console.log(this.state.events)})
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="body" onMouseMove={this.mouseMove}>
        <Header mouseX={this.state.mouseX} mouseY={this.state.mouseY}/>
        <Calendar events={this.state.events}/>
        <footer>
          <div className="catch">catch that f*cking idea... </div>
        </footer>
      </div>
    );
  }
}

export default App;