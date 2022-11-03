import Cookies from "js-cookie";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
// import "./App.css";
import LoginForm from "./Components/LoginForm";
import RegistrationForm from "./Components/RegistrationForm";
import UserProfile from "./Components/UserProfile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = async () => {
    const handleError = (err) => {
      console.warn(err);
    };

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

    if (response.ok) {
      setIsLoggedIn(false);
    } else throw new Error("there was a network error");
  };

  const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!isLoggedIn ? (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            ) : (
              <li>
                <button onClick={handleLogout}>Sign Out</button>
              </li>
            )}
          </ul>
        </nav>
        <Outlet />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="login"
            element={<LoginForm setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
