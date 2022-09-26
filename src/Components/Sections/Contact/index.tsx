import Assign from "../../Assign";
import Title from "../Helpers/Title";
import styles from "./index.module.scss";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <main className={styles.container}>
        <span>
          <span>
            <Title text="Are you Minding a Project ?" />
          </span>
        </span>
        <Assign />
      </main>
    </section>
  );
}
