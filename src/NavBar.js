import React from 'react';
import {NavLink} from 'react-router-dom'

function NavBar() {

  return (
    <nav>
      <NavLink exact to="/dogs">
        Home
      </NavLink>
      <NavLink exact to="/dogs/add">
        Add Dog
      </NavLink>
    </nav>
  );
}

export default NavBar;
