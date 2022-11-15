import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import Profile from "./pages/Profile";
import LoginForm from "./pages/Login";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";
import GroupProfile from "./pages/Group";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const callback = () => {
      if (user) {
        setIsLoggedIn(true);
        setLoggedInUser(user);
      }
    };
    callback();
  }, []);

  return (
    <BrowserRouter>
      <>
        {/* {isLoggedIn && (
          <Sidebar setIsLoggedIn={setIsLoggedIn} loggedInUser={loggedInUser} />
        )} */}
      </>
      <Routes>
        <Route path="welcome" element={<Welcome />} />
        <Route
          path="login"
          element={
            <LoginForm
              setIsLoggedIn={setIsLoggedIn}
              setLoggedInUser={setLoggedInUser}
            />
          }
        />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<></>} />
        <Route
          path="/profile/:profileID"
          element={<Profile loggedInUser={loggedInUser} />}
        />
        <Route path="group" element={<GroupProfile />} />
        <Route path="testing" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
