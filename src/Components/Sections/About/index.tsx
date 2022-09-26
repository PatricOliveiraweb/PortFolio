import Title from "../Helpers/Title";
import styles from "./index.module.scss";
import { ReactComponent as Js } from "../../../assets/js.svg";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <main className={styles.container}>
        <span data-anime="split">
          <span data-anime="show">
            <Title text="About me" />
          </span>
        </span>
        <p>
          <span data-anime="split">
            <span data-anime="show">
              Formed in analise and system desenvolviment in UnigranRio and
              pos-graduado in FrontEnd developer
            </span>
          </span>
          <span data-anime="split">
            <span data-anime="show">
              in XP Educação. Woriking since 2019 with Agencia Suprema using
              VueJS and WordPress.
            </span>
          </span>
        </p>
      </main>
      <figure className={styles.backIconLeft}>
        <Js />
      </figure>
    </section>
  );
}
