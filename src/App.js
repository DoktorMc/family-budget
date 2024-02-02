import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./modules/Navbar/pages/Navbar";

import "./App.css";
import { useSelector } from "react-redux";
import LogInPage from "./modules/Auth/pages/LogInPage";

function App() {
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
