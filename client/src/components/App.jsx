import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <header>
          <div className="header-bubble free-ideas">
            free
            <br />
            ideas
          </div>
          <div className="header-bubble WTF">
            WTF?!
          </div>
          <div className="header-bubble submit-an-idea">
            submit
            <br />
            an idea
          </div>
        </header>
        <div className="calendar">
          <div className="calendar-top">
            <div>Deadline</div>
            <div>Idea N 1</div>
          </div>
        </div>
        <footer>
          <div className="catch">catch that f*cking idea... </div>
        </footer>
      </>
    );
  }
}

export default App;