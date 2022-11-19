import { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
// import { shuffleArray } from "../../utils/shuffleArray";
import styles from "./recommendations.module.css";

const Recommendations = (props) => {
  const [recommendation, setRecommendation] = useState({});

  const [shuffledUsers, setShuffledUsers] = useState([]);

  const location = useLocation();

  const userDetails = [];

  return (
    <aside className={styles.aside}>
      <p className={styles.containerTitle}>Create New Event</p>
      {props.searchByResults.slice(0, 4).map((result) => {
        const { name, rating, vicinity, types, photos } = result;

        console.log(result);

        return (
          <div key={""} className={styles.userContainer}>
            {photos ? (
              <img
                className="avatar avatar-standard"
                src={photos[0].html_attributions[0]}
                alt="gojo"
              />
            ) : (
              <BsPersonCircle className="avatar-standard" />
            )}

            <NavLink className={styles.details} to={`/profile`}>
              <p className={styles.displayName}>{name}</p>
              <p className={styles.userName}>Rating: {rating}</p>
              {/* <p className={styles.userName} */}
            </NavLink>

            <button
              onClick={() => console.log("testing")}
              className="btn btn-outline"
            >
              Add Event
            </button>
          </div>
        );
      })}
      <NavLink className={styles.suggestMore} to="/people">
        Show More
      </NavLink>
    </aside>
  );
};

export default Recommendations;
