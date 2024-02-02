import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarPagesLinkComponent = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" > Dashboard </NavLink>
        </li>
        <li>
          <NavLink to="/operations" >Income & Expenses</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBarPagesLinkComponent;
