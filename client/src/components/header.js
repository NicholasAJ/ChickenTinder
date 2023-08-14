import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({ user }) => {

  if (Object.keys(user).length) {
    return (
      // all the logged in links
      <div>
        <h1>Chicken Tinder</h1>
        <Link to='/'>Home</Link>
        <Link to='/logout'>Log Out</Link>
      </div>
    )
  } else {
    return (
      //not logged in links
      <div>
        <h1>Chicken Tinder</h1>
        <p>Track your tendies</p>
      </div>
    )
  }
}

export default Header;
