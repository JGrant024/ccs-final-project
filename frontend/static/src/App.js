import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import LoginForm from "./pages/Login";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";
import GroupProfile from "./pages/Group";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const token = Cookies.get("Authorization");
    if (token) {
      setToken(token);
    }
  }, [token]);

  console.log(token);

  return (
    <BrowserRouter>
      <>{token && <Sidebar />}</>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<></>} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="/group" element={<GroupProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
