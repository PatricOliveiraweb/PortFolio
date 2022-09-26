import React from "react";
import styles from "./Banner.module.scss";
import { ReactComponent as Dev } from "../assets/dev.svg";
import Assign from "./Assign";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <header className={styles.banner__header}>
        <h2>
          <span className={styles.bars}>
            <span className={styles.fadeIn}>
              I am front end developer with focus on
            </span>
          </span>
          <span className={styles.bars}>
            <span className={styles.fadeIn}>
              React and VueJs based in Brazil. With
            </span>
          </span>
          <span className={styles.bars}>
            <span className={styles.fadeIn}>
              my years of experience in developing
            </span>
          </span>
          <span className={styles.bars}>
            <span className={styles.fadeIn}>
              aplications with a curious driven and a
            </span>
          </span>
          <span className={styles.bars}>
            <span className={styles.fadeIn}>thirst for knowledge.</span>
          </span>
        </h2>
        <figure className={styles.backIconRight}>
          <Dev />
        </figure>
      </header>
      <Assign />
    </section>
  );
}
