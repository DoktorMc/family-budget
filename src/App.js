import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./modules/Navbar/pages/Navbar";
import { useDispatch, useSelector } from "react-redux";
import LogInPage from "./modules/Auth/pages/LogInPage";
import "./App.scss";
import { auth } from "./store/firebase-config";
import { setUser, setLoading } from "./store/slices/userSlice";
import LoaderSpinCube from "./helper/loader/loaderSpinCube";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
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
        
        navigate('/')
      } else {
        console.log("User is not logged in!");
        dispatch(setLoading(false));
        // navigate('/login')
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user.user);

  const isLoading = useSelector((state) => state.data.user.user.isLoading);

  return (
    <main className="App">
      {isLoading ? (
        <LoaderSpinCube />
      ) : (
        <>
          {user ? (
            <>
              <Navbar />
              <main className="outlet-container">
                <Outlet></Outlet>
              </main>
            </>
          ) : (
            <LogInPage />
          )}
        </>
      )}
    </main>
  );
}

export default App;
