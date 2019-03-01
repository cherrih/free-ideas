import React from 'react';

const Header = (props) => {
  return (
    <div className="header-container">
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
    </div>
  )
}

export default Header;
