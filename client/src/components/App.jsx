import React from 'react';
import Header from './Header.jsx';
import Calendar from './Calendar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),      
    };
  }

  render() {
    return (
      <>
        <Header/>
        <Calendar />
        <footer>
          <div className="catch">catch that f*cking idea... </div>
        </footer>
      </>
    );
  }
}

export default App;