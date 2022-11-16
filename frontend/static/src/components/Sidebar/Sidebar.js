import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./sidebar.module.css";
import {
  MdOutlineFeed,
  MdExplore,
  MdPeopleAlt,
  MdBookmark,
} from "react-icons/md";
import { BsPersonCircle, BsThreeDots } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOtter } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import { AiOutlinePlus } from "react-icons/ai";

function LogoSection() {
  return (
    <section className={styles.logo}>
      <FontAwesomeIcon icon={faOtter} className="icon" />
    </section>
  );
}

export const Sidebar = (props) => {
  const [dropDown, setDropDown] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleError = (err) => {
    console.warn(err);
  };

  const handleResponse = (response) => {
    if (response.ok) {
      Cookies.remove("Authorization");
      props.setIsLoggedIn(false);
      localStorage.clear();
      props.setLoggedInUser(null);
      navigate("/welcome");
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
    const response = await fetch("/dj-rest-auth/logout/", options).catch(
      () => handleError
    );

    handleResponse(response);
  };

  return (
    <nav className={styles.nav}>
      <LogoSection />

      <section className={styles.icons}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles.iconContainer} ${styles.active} `
              : `${styles.iconContainer}`
          }
          to="/"
        >
          <MdOutlineFeed className={styles.icon} />
          <p className="flex-center">Home</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles.iconContainer} ${styles.active} `
              : `${styles.iconContainer}`
          }
          to="/Recommendations"
        >
          <MdExplore className={styles.icon} />{" "}
          <p className="flex-center">Recommendations</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles.iconContainer} ${styles.active} `
              : `${styles.iconContainer}`
          }
          to="/bookmark"
        >
          <MdBookmark className={styles.icon} />{" "}
          <p className="flex-center">Bookmarks</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles.iconContainer} ${styles.active} `
              : `${styles.iconContainer}`
          }
          to="/Otters"
        >
          <MdPeopleAlt className={styles.icon} />{" "}
          <p className="flex-center">Otters</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles.iconContainer} ${styles.active} `
              : `${styles.iconContainer}`
          }
          to={`/profile/${user?.id}`}
        >
          <BsPersonCircle className={styles.icon} />
          <p className="flex-center">My Profile</p>
        </NavLink>
      </section>

      <section
        className={styles.btnContainer}
      >
        <button className={`btn ${styles.newBtn}`}>
          <AiOutlinePlus />
        </button>
        <p>New Post</p>
      </section>

      <section className={styles.accountSetting}>
        <div className={styles.account}>
          <BsPersonCircle className="avatar avatar-standard" />

          <span className="flex-center">{user?.username}</span>
        </div>

        <BsThreeDots
          onClick={() => setDropDown(!dropDown)}
          className={styles.more}
        />
      </section>

      {dropDown && (
        <div className={styles.dropdown}>
          <ul>
            <li onClick={handleLogout} className={styles.item}>
              Log out
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
