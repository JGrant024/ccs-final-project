/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { BsPersonCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import styles from "./profile.module.css";
import Button from "react-bootstrap/Button";

const Profile = (props) => {
  const { profileID } = useParams();
  const id = props.loggedInUser?.id;
  const [user, setUserInfo] = useState();

  useEffect(() => {
    const fetchUserDetails = async () => {
      fetch(`/api/v1/users/profiles/user/${id}/`)
        .then((response) => response.json())
        .then((data) => setUserInfo(data));
    };
    if (id) {
      fetchUserDetails();
    }
  }, [id]);

  const [showModal, setShowModal] = useState(false);
  const [emptyFeedMessage, setEmptyFeedMessage] = useState(false);

  if (Boolean(user) === false) {
    return (
      <>
        <main className="main-container">
          <h4 className="title">Profile</h4>
          <h2></h2>
        </main>
      </>
    );
  }
  return (
    <main className="main-container">
      <h4 className="title">Profile</h4>
      <div className={styles.profileContainer}>
        {user?.profile_picture ? (
          <img
            className={`avatar ${styles.profilePhoto}`}
            src={user?.profile_picture}
            alt="gojo"
          />
        ) : (
          <BsPersonCircle className={styles.profilePhoto} />
        )}
        <section className={styles.profileInfo}>
          <div>
            <p className={styles.displayName}>{props.loggedInUser?.username}</p>
            <p className={styles.userName}>@{user?.userName}</p>
          </div>
        </section>
        {<p>{user?.bio}</p>}
        {
          <div className={styles.followerFollowing}>
            <p>{user?.followers?.length} Followers</p>
            <p>{user?.following?.length} Following</p>
          </div>
        }
        {user?.portfolioLink && (
          <a
            className={styles.portfolioLink}
            href={user?.portfolioLink}
            target="__blank"
          >
            {user?.portfolioLink}
          </a>
        )}
        {<section />}
        <Button variant="primary" size="lg" className={styles.button}>
          Follow
        </Button>{" "}
        <button onClick={() => console.log("testing")} className={styles.button}>
          Unfollow
        </button>
      </div>
      <h2>Start posting already!</h2>
      <br></br>
      <div>Comment Section</div>
      {<main />}
    </main>
  );
};

export default Profile;
