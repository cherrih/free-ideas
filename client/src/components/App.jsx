import React from 'react';
import Header from './Header.jsx';
import Calendar from './Calendar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      mouseX: null,
      mouseY: null   
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