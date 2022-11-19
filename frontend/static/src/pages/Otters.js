/* eslint-disable no-undef */
import { BsPersonCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "../pages/"

export const Otters = () => {
  //there is where you store the data you receive back from the fetch request
  const [allUsers, setAllUsers] = useState([]);

  const id = "";
  const userDetails = "";

  const otherUsers = allUsers.filter((user) => user.id !== id);

  return (
    <>
      <main className="main-container">
        <h4 className="title">People</h4>

        {otherUsers.map((user) => {
          const { id, photo, displayName, userName } = user;
          return (
            <div className={styles.userContainer}>
              {photo ? (
                <img
                  className="avatar avatar-standard"
                  src={photo}
                  alt="profile"
                />
              ) : (
                <BsPersonCircle className="avatar-standard" />
              )}
              <NavLink to={`/profile/${id}`}>
                <p className={styles.displayName}>{displayName}</p>
                <p className={styles.userName}>@{userName}</p>
              </NavLink>
              t
              {userDetails?.following.some((user) => user === id) ? (
                <button
                  className="btn btn-outline"
                >
                  Unfollow
                </button>
              ) : (
                <button
                  
                  className="btn"
                >
                  Follow
                </button>
              )}
            </div>
          );
        })}
      </main>
    </>
  );
};
