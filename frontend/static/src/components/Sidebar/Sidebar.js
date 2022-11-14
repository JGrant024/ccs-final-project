import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";
import {
  MdOutlineFeed,
  MdExplore,
  MdPeopleAlt,
  MdBookmark,
} from "react-icons/md";
import { BsPersonCircle, BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from "react";
import { GiSittingDog } from "react-icons/gi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const LogoSection = () => {
  return (
    <section className={styles.logo}>
      <GiSittingDog className={styles.icon} />
    </section>
  );
};

export const Sidebar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("api/v1/users/profiles/user/update")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [user]);

  const handleError = (err) => {
    console.warn(err);
  };

  const handleResponse = (response) => {
    if (response.ok) {
      Cookies.remove("Authorization");
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
    const response = await fetch("dj-rest-auth/logout/", options).catch(
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
          to="/explore"
        >
          <MdExplore className={styles.icon} />{" "}
          <p className="flex-center">Explore</p>
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
          to="/people"
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
          to={`/profile/${user?.user_id}`}
        >
          <BsPersonCircle className={styles.icon} />
          <p className="flex-center">My Profile</p>
        </NavLink>
      </section>

      <section className={styles.accountSetting}>
        <div className={styles.account}>
          {user?.profile_picture ? (
            <img
              className="avatar avatar-standard"
              src={user?.profile_picture}
              alt="profile"
            />
          ) : (
            <BsPersonCircle className="avatar avatar-standard" />
          )}

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
