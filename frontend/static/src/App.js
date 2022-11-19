import Cookies from "js-cookie";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import UserProfile from "./pages/UserProfile";
import Profile from "./pages/Profile";
import LoginForm from "./pages/Login";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";
import GroupProfile from "./pages/Group";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Otters } from "./pages/Otters";
import Places from "./pages/Places";
import Recommendations from "./pages/Recommendations";
import RecommendationsList from "./pages/RecommendationsList";
import Events from "./components/Events";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const testing = useRef("hi");
  const user = JSON.parse(localStorage.getItem("user"));
  const location = window.location;

  const libraries = ["places"];
  const [searchByResults, setSearchByResults] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setLoggedInUser(user);
    }
  }, []);

  useEffect(() => {});

  return (
    <BrowserRouter>
      <div
        className={`${
          location.pathname !== "/login" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/welcome" &&
          "container"
        }`}
      >
        {isLoggedIn && (
          <Sidebar
            setIsLoggedIn={setIsLoggedIn}
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        )}

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
            path="/profile"
            element={<Profile loggedInUser={loggedInUser} />}
          />
          <Route
            path="/profile/:profileID"
            element={<Profile loggedInUser={loggedInUser} />}
          />
          <Route path="group" element={<GroupProfile />} />
          <Route path="testing" element={<UserProfile />} />
          <Route path="/otters" element={<Otters />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
          <Route path="/events" element={<Events />} />
          notes
          {/* <Route path="/" element={<Feed />} /> */}
        </Routes>
        {isLoggedIn && <Recommendations searchByResults={searchByResults} />}
        <LoadScript
          googleMapsApiKey="AIzaSyABLxEcVSAK2EWpfE3VSI5zS_3MwFSB_X4"
          libraries={libraries}
        >
          <Places
            setSearchByResults={setSearchByResults}
            searchByResults={searchByResults}
          />
        </LoadScript>
      </div>
    </BrowserRouter>
  );
}
export default App;
