import { Avatar } from "@mui/joy";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../../../store/firebase-config";

const NavBarUserInformationComponent = () => {
  const [curUser, setCurUser] = useState("");

  const userForNav = useSelector((state) => state.data.user.user.user);

  useEffect(() => {
    setCurUser(auth.currentUser);
  }, []);

  return (
    <div className="navbar-user">
      {curUser.photoURL ? (
        <Avatar size="lg" alt={userForNav.userName} src={curUser.photoURL} />
      ) : (
        <Avatar sx={{ fontSize: 25 }} size="lg">
          {userForNav.userName != null
            ? userForNav.userName.charAt(0).toUpperCase()
            : userForNav.email.charAt(0).toUpperCase()}
        </Avatar>
      )}
      {userForNav.userName != null ? (
        <span className="navbar-user-name">{userForNav.userName}</span>
      ) : (
        <span className="navbar-user-name">{userForNav.email}</span>
      )}
    </div>
  );
};

export default NavBarUserInformationComponent;
