import { useEffect, useState } from "react";
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
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    };

    const response = fetch(`api/v1/users/profiles/user/${id}/`, options);
    if (response.ok) {
      console.log(response);
    }
  }, [id]);

  const [showModal, setShowModal] = useState(false);
  const [emptyFeedMessage, setEmptyFeedMessage] = useState(false);

  // useEffect(() => {}, [profileID]);

  // useEffect(() => {}, []);

  //   if (selectedUserDetailsLoading) {
  //     return (
  //       <>
  //         <main className="main-container">
  //           <h4 className="title">Profile</h4>
  //           <h2>Loading...</h2>
  //         </main>
  //       </>
  //     );
  //   }

  return (
    <>
      {/* <main className="main-container">
        <h4 className="title">Profile</h4>
        <div className={styles.profileContainer}>
          {selectedUserDetails?.photo ? (
            <img
              className={`avatar ${styles.profilePhoto}`}
              src={selectedUserDetails?.photo}
              alt="gojo"
            />
          ) : (
            <BsPersonCircle className={styles.profilePhoto} />
          )}

          <section className={styles.profileInfo}>
            <div>
              <p className={styles.displayName}>
                {props.loggedInUser.username}
              </p>
              <p className={styles.userName}>
                @{selectedUserDetails?.userName}
              </p>
            </div> */}

      {/* <p>{selectedUserDetails?.bio}</p> */}

      {/* <div className={styles.followerFollowing}>
              <p>{selectedUserDetails?.followers?.length} Followers</p>
              <p>{selectedUserDetails?.following?.length} Following</p>
            </div> */}

      {/* {selectedUserDetails?.portfolioLink && (
              <a
                className={styles.portfolioLink}
                href={selectedUserDetails?.portfolioLink}
                target="__blank"
              >
                {selectedUserDetails?.portfolioLink}
              </a>
            )} */}
      {/* </section> */}

      {/* {id === profileID && (
            <button onClick={() => setShowModal(true)} className="btn">
              Edit
            </button>
          )} */}

      {/* {id !== profileID &&
            (userDetails?.following.some((user) => user === profileID) ? (
              <button
                onClick={() => console.log("testing")}
                className="btn btn-outline"
              >
                Unfollow
              </button>
            ) : (
              <button onClick={() => console.log("testing")} className="btn">
                Follow
              </button>
            ))}
        </div> */}
      {/* {userPostsLoading ? (
          <PostLoader />
        ) : (
          <InfiniteScroll
            dataLength={userPosts.length} //This is important field to render the next data
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
            {userPosts?.map((post) => {
              return <PostCard key={post.postID} {...post} />;
            })}
          </InfiniteScroll> */}

      {/* {newUserPostsLoading && <PostLoader />}  */}
      {/* {emptyFeedMessage && id === profileID && (
          <h2>Start posting already!</h2>
        )} */}
      {/* {emptyFeedMessage && id !== profileID && <h2>Wow... so empty..</h2>} */}
      {/* <ProfileEditModal
          setShowModal={() => setShowModal(false)}
          showModal={showModal}
        />  */}
      {/* </main> */}
    </>
  );
};

export default Profile;
