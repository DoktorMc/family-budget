import React from "react";
import NavBarPagesLinkComponent from "../components/NavBarPagesLinkComponent";
import NavBarUserInformationComponent from "../components/NavBarUserInformationComponent";
import "./Navbar.css";
import NavBarSettingComponent from "../components/NavBarSettingComponent";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3 className="navbar-title">Family Budget</h3>
      <div className="navbar-content">
        <NavBarUserInformationComponent />

        <NavBarPagesLinkComponent />

        <NavBarSettingComponent />
      </div>
    </div>
  );
};

export default Navbar;
