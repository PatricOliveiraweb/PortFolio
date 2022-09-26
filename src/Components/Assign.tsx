import styles from "./Assign.module.scss";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Gmail } from "../assets/google.svg";
export default function Assign() {
  return (
    <section className={styles.assign}>
      <span className={`${styles.active} ${styles.split} `}>
        <span className={styles.show}>
          <h2>Patric Oliveira</h2>
          <a href="linkedin">
            <Linkedin />
          </a>
          <span className={styles.separator}></span>
          <a href="linkedin">
            <Gmail /> <span>patricoliveira1@gmail.com</span>
          </a>
        </span>
      </span>
    </section>
  );
}
