import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Button from "react-bootstrap/Button";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState();

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
      props.setIsLoggedIn(true);
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } else {
      setError(response.statusText);
      throw new Error("Network response was not OK.");
    }
  };

  const handleSubmit = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(userInfo),
    };

    const response = await fetch("/dj-rest-auth/login/", options).catch(
      () => handleError
    );
    handleResponse(response);
  };

  return (
    <section className="flex-center-container">
      <section className="formBox">
        <p className={error ? "errmsg" : "offscreen"} aria-live="assertive">
          {error}
        </p>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className={"inputBox"}>
            <input
              type="username"
              id="username"
              autoComplete="off"
              onChange={handleInput}
              required
            />
            <label className="flex-center" htmlFor="username">
              Username
            </label>
          </div>
          <div className={"inputBox"}>
            <input
              type="password"
              id="password"
              onChange={handleInput}
              required
            />
            <label className="flex-center" htmlFor="password">
              Password
            </label>
          </div>
          <Button variant="outline-primary" onClick={handleSubmit}>
            Sign In
          </Button>
        </form>
        <br />
        <div className={"actionLinks"}>
          <Link to="/signup">Need an account? Sign up!</Link>
        </div>
      </section>
    </section>
  );
};

export default LoginForm;
