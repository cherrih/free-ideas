import React from 'react';
import Header from './Header.jsx';
import Calendar from './Calendar.jsx';
import { CALENDAR_ID, API_KEY } from '../../../calendar.config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      mouseX: null,
      mouseY: null,
      events: {}
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
    fetch(url)
      .then(response => response.json())
      .then(resp => {
        const events = {}
        resp.items.map((event) => {
          const start = event.start.date || event.start.dateTime;
          events[start] = {
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          }
        })
        this.setState({
          events: events
        }, () => console.log(this.state.events))
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="body" onMouseMove={this.mouseMove}>
        <Header mouseX={this.state.mouseX} mouseY={this.state.mouseY}/>
        <Calendar />
        <footer>
          <div className="catch">catch that f*cking idea... </div>
        </footer>
      </div>
    );
  }
}

export default App;