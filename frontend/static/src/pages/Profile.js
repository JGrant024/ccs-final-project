/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { BsPersonCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import styles from "./profile.module.css";

const Profile = (props) => {
  const { profileID } = useParams();
  const id = props.loggedInUser?.id;
  const [user, setUserInfo] = useState();
  console.log({ id });
  console.log(profileID);

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

  useEffect(() => {}, [profileID]);

  useEffect(() => {}, []);

  console.log(user);

  // if (Boolean(user) === false) {
  //   return (
  //     <>
  //       <main className="main-container">
  //         <h4 className="title">Profile</h4>
  //         <h2>Loading...</h2>
  //       </main>
  //     </>
  //   );
  // }
  return (
    <main className="main-container">
      <h4 className="title">Profile</h4>
      <div className={styles.profileContainer}>
        {user?.photo ? (
          <img
            className={`avatar ${styles.profilePhoto}`}
            src={user?.photo}
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
        <button
          onClick={() => console.log("testing")}
          className="btn btn-outline"
        >
          Unfollow
        </button>
        : (
        <button onClick={() => console.log("testing")} className="btn">
          Follow
        </button>
        )
      </div>

      {/* <InfiniteScroll
        dataLength={user.length} //This is important field to render the next data
        next={() => dispatch(getNewUserPosts({ latestDoc, id: profileID }))}
        hasMore={latestDoc === undefined ? false : true}
        loader={<PostLoader />}
        endMessage={
          !emptyFeedMessage && (
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          )
        }
      >
        <PostLoader />;
        {user?.map((post) => {
          return <PostCard key={post.postID} {...post} />;
        })}
      </InfiniteScroll> */}

      <h2>Start posting already!</h2>

      {/* {
        <ProfileEditModal
          setShowModal={() => setShowModal(false)}
          showModal={showModal}
        />
      } */}
      {<main />}
    </main>
  );
};

export default Profile;
