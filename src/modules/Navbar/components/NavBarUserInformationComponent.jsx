import { Avatar } from "@mui/joy";
import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../../../store/firebase-config";

const NavBarUserInformationComponent = () => {
  const userCurrent = auth.currentUser;
  console.log("Curr", userCurrent);
  const user = useSelector((state) => state.data.user.user);
  console.log(user);
  return (
    <div className="navbar-user">
      {userCurrent.photoURL ? (
        <Avatar size="lg" alt={user.userName} src={userCurrent.photoURL} />
      ) : ( 
        <Avatar sx={{ fontSize: 25 }} size="lg">
          {user.userName.charAt(0).toUpperCase()}
        </Avatar>
      )}

      {/* <img className="navbar-user-icon" src="" alt="user_icon" /> */}
      <span className="navbar-user-name">{user.userName}</span>
    </div>
  );
};

export default NavBarUserInformationComponent;
