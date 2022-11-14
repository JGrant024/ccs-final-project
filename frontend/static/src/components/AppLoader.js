import styles from "./app-loader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOtter } from "@fortawesome/free-solid-svg-icons";

export const AppLoader = () => {
  return (
    <div className={styles.center}>
    <FontAwesomeIcon icon={faOtter} 
        className={`${styles.circle} ${styles.pulse} ${styles.blue}`}
      />
    </div>
  );
};