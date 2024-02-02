import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./modules/Navbar/pages/Navbar";
import { useDispatch, useSelector } from "react-redux";
import LogInPage from "./modules/Auth/pages/LogInPage";
import "./App.css";
import { auth } from "./store/firebase-config";
import { setUser, setLoading } from "./store/slices/userSlise";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          setUser({
            uid: authUser.uid,
            userName: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("User is not logged in!");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);

  return (
    <main className="App">
      {user ? (
        <>
          <Navbar />
          <Outlet></Outlet>
        </>
      ) : (
        <LogInPage />
      )}
    </main>
  );
}

export default App;
