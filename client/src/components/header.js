import React from 'react';

const Header = ({ user }) => {

  if (Object.keys(user).length) {
    return (
      // all the logged in links
      <div>
        <h1>Chicken Tinder</h1>
      </div>
    )
  } else {
    return (
      //not logged in links
      <div>
        <h1>Chicken Tinder</h1>
      </div>
    )
  }
}

export default Header;
