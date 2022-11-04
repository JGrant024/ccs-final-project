import Cookies from "js-cookie";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import LoginForm from "./pages/Login";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";
import GroupProfile from "./pages/Group";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleError = (err) => {
    console.warn(err);
  };
  const handleResponse = (response) => {
    if (response.ok) {
      Cookies.remove("Authorization");
      setIsLoggedIn(false);
    } else throw new Error("there was a network error");
  };
  const handleLogout = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFTOKEN": Cookies.get("csrftoken"),
      },
    };
    const response = await fetch("dj-rest-auth/logout/", options).catch(
      () => handleError
    );
    handleResponse(response);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<LoginForm setIsLoggedIn />} />
        <Route path="/signup" element={<SignUp setIsLoggedIn />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="/group" element={<GroupProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
