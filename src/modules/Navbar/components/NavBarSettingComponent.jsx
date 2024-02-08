import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import sprite from '../../../img/navbar.svg'
import { useDispatch } from 'react-redux';
import { removeUser } from "../../../store/slices/userSlise";
import { signOut } from "firebase/auth";
import { auth } from '../../../store/firebase-config'


const NavBarSettingComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(removeUser());
    signOut(auth);
    navigate('/login')
  }

  return (
    <div className="navbar-setings-component">
      <NavLink to="/setings" className="navbar-setings-component-setting">
        <svg className="navbar-icon">
          <use xlinkHref={sprite + "#settings"} />
        </svg>
        <p className="navbar-item-title">Setting</p>
      </NavLink>
      <span className="navbar-setings-component-logout" onClick={handleLogout}>
        <svg className="navbar-icon">
          <use xlinkHref={sprite + "#logout"} />
        </svg>
        <p className="navbar-item-title">Logout</p>
      </span>
    </div>
  );
};

export default NavBarSettingComponent;
