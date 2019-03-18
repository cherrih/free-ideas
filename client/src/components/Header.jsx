import React from 'react';

const Header = (props) => {
  
  const freeStyle = {
    left: props.mouseX,
    transform: `rotate(${props.mouseX}deg)`
  }
  const WTFStyle = {
    left: 100 + props.mouseX,
    transform: `rotate(${props.mouseX}deg)`
  }
  const submitStyle = {
    left: 200 + props.mouseX,
    transform: `rotate(${props.mouseX}deg)`
  }
  return (
    <div className="header-container">
      <div className="header-bubble free-ideas" style={freeStyle}>
        free
        <br />
        ideas
      </div>
      <div className="header-bubble WTF" style={WTFStyle}>
        WTF?!
      </div>
      <div className="header-bubble submit-an-idea" style={submitStyle}>
        submit
        <br />
        an idea
      </div>
    </div>
  )
}

export default Header;
