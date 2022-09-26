import styles from "./Work.module.scss";
export interface workProps {
  title: string;
  skills: string;
  complements: string;
  owner: string;
  name: string;
  url: string;
}

const images = [1, 2, 3];

interface workInterface {
  work: workProps;
}
export const Work = ({ work }: workInterface) => {
  return (
    <li className={styles.work}>
      <span>
        <span className={styles.show}>
          <a href={work.url} target="_blank">
            <span className={styles.separator}></span>
            {work.title}
          </a>
        </span>
      </span>
      <span>
        <span className={styles.fadeIn}>
          <p>Skills: {work.skills}</p>
          <p>Complementos: {work.complements}</p>
        </span>
      </span>
      <figure>
        {images.map((index) => (
          <img
            src={
              new URL(
                `../../../assets/images/${work.name}_0${index}.jpg`,
                import.meta.url
              ).href
            }
            alt={work.owner}
            key={index}
            data-anime="image"
          />
        ))}
      </figure>
      <figcaption>
        <p>{work.owner}</p>
      </figcaption>
    </li>
  );
};
