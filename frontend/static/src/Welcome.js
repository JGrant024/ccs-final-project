import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOtter } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import "./styles.css";
const Welcome = () => {
    return (
        <div className="welcome">
            <div className="logo">
            <FontAwesomeIcon icon={faOtter} className="icon"/>
                <h1 className="website-name">Konnect</h1>
            </div>
            <div className="headline">
                <h1>
                    Seek out and connect with your people,{""}
                    <div className="underline">your tribe!</div>
                </h1>
            </div>
            <div className="btnContainer">
                <NavLink to="/signup">
                <Button variant="outline-primary">Signup</Button>
                </NavLink>
                <NavLink to="/login">
                <Button variant="secondary">Login</Button>
                </NavLink>
            </div>
        </div>
    )
}
export default Welcome;