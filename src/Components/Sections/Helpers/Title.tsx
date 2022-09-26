import styles from "./Title.module.scss";

interface TitleProps {
  text: string;
}
const Title = ({ text }: TitleProps) => {
  return (
    <h2 className={styles.sectionTitle}>
      <span className={styles.separatorLarge}></span>
      {text}
    </h2>
  );
};

Title.propTypes = {};

export default Title;
