import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const SignUp = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const passwordsMatch = useState();
  const [error, setError] = useState();
  const {ref,} = useRef();
  const handleInput = (event) => {
    const { id } = event.target;
    const { value } = event.target;
    setUserInfo({ ...userInfo, [id]: value });
  };
  const handleError = (error) => {
    console.warn(error);
  };
  const handleResponse = async (response) => {
    if (response.ok) {
      const data = await response.json();
      Cookies.set("Authorization", `Token ${data.key}`);
    } else {
      setError(response.statusText);
      throw new Error("Network response was not OK.");
    }
    setIsLoggedIn(true);
    navigate("/profile");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(userInfo),
    };
    const response = await fetch("/dj-rest-auth/registration/", options).catch(
      () => handleError
    );
    handleResponse(response);
  };
  useEffect(() => {
      const { password1, password2} = userInfo
      if (password1.length > 0 && password1 === password2) {
          console.log(
            "passwords match"
          )
      } else {
          console.log("passwords don’t match")
      }
  });
  return (
    <section className={"formBox"}>
        <h2>Sign Up!</h2>{" "}
      <p className={error ? "errmsg" : "offscreen"} aria-live="assertive">
        {error}
      </p>
      <form onSubmit={handleSubmit}>
        {/* firstName */}
        <div className={"inputBox"}>
          <input
            type="text"
            id="firstName"
            onChange={handleInput}
            autoComplete="off"
            required
          />
          <label htmlFor="firstName" className="flex-center">
            First Name
          </label>
        </div>
        <div className={"inputBox"}>
          <input
            type="text"
            id="lastName"
            onChange={handleInput}
            autoComplete="off"
            required
          />
          <label htmlFor="lastName" className="flex-center">
            Last Name
          </label>
        </div>
        {/* username */}
        <div className={"inputBox"}>
          <input
            type="text"
            id="username"
            onChange={handleInput}
            autoComplete="off"
            required
          />
          <label htmlFor="lastName" className="flex-center">
            User Name
          </label>
        </div>
        {/* email */}
        <div className={"inputBox"}>
          <input
            type="email"
            id="email"
            onChange={handleInput}
            autoComplete="off"
            required
          />
          <label htmlFor="email" className="flex-center">
            Email
          </label>
        </div>
        {/* Password */}
        <div className={"inputBox"}>
          <input
            type="password1"
            id="password1"
            onChange={handleInput}
            ref={ref}
            required
          />
          <label htmlFor="password" className="flex-center">
            Password
          </label>
        </div>
        {/* confirm password */}
        <p
          id="confirmnote"
          className={!passwordsMatch ? "instructions" : "offscreen"}
        >
          Must match the first password input field.
        </p>
        <div className={"inputBox"}>
          <input
            type="password2"
            id="password2"
            onChange={handleInput}
            required
          />
          <label htmlFor="password2" className="flex-center">
            Confirm Password
          </label>
        </div>
        {/* submit button */}
        <button className="btn">Sign Up!</button>
        <div className={"actionLinks"}>
          <Link to="/login">Already have an account? Login!</Link>
        </div>
      </form>
    </section>
  );
};
export default SignUp;