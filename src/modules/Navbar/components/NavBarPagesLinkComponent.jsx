import React from "react";
import { NavLink } from "react-router-dom";
import sprite from "../../../img/navbar.svg";

const NavBarPagesLinkComponent = () => {
  return (
    <ul className="navbar-pages-link">
      <li>
        <NavLink to="/" className="navbar-pages-link-item">
          <svg className="navbar-icon">
            <use xlinkHref={sprite + "#dashboard"} />
          </svg>
          <p className="navbar-item-title">Dashboard</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/transactions" className="navbar-pages-link-item">
          {" "}
          <svg className="navbar-icon">
            <use xlinkHref={sprite + "#wallet"} />
          </svg>
          <p className="navbar-item-title">Transactions</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/budget" className="navbar-pages-link-item">
          {" "}
          <svg className="navbar-icon">
            <use xlinkHref={sprite + "#edit_document"} />
          </svg>
          <p className="navbar-item-title">Budget</p>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBarPagesLinkComponent;
