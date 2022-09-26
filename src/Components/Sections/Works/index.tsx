import Title from "../Helpers/Title";
import styles from "./index.module.scss";
import { Work, workProps } from "./Work";
import { useEffect, useState } from "react";
import { ReactComponent as HTM } from "../../../assets/html5.svg";
import { ReactComponent as Css } from "../../../assets/css3-alt.svg";
import { ReactComponent as Ui } from "../../../assets/uikit.svg";
import { ReactComponent as WordPress } from "../../../assets/wordpress.svg";

export default function Works() {
  const [works, setWorks] = useState<workProps[] | null>(null);
  useEffect(() => {
    setWorks([
      {
        title: "Gotcha",
        skills: "HTML5  SASS  VueJS SASS",
        complements: "Wordpress  Rest API",
        owner:
          "Projeto desenvolvido para Gotcha, à serviço de Agência Suprema.",
        name: "gotcha",
        url: "https://www.gotcha.com.br/",
      },
      {
        title: "CDT Corinthias",
        skills: "HTML5  SASS  VueJS",
        complements: "Wordpress  Rest API",
        owner:
          "Projeto desenvolvido para Gotcha, à serviço de Agência Suprema.",
        name: "corinthias",
        url: "https://www.cartaodetodoscorinthians.com.br/",
      },
      {
        title: "RENNER & FRANTZ",
        skills: "HTML5  SASS  VueJS",
        complements: "Wordpress  Rest API",
        owner: "Projeto desenvolvido junto com o Design Welli Cardoso.",
        name: "renner",
        url: "http://www.rennerfrantz.com.br/",
      },
      {
        title: "Café Barão",
        skills: "HTML5  SASS PHP javascript",
        complements: "Wordpress",
        owner:
          "Projeto desenvolvido para Melita, à serviço de Agência Suprema.",
        name: "cafebarao",
        url: "https://www.cafebarao.com.br/",
      },
      {
        title: "Blog Moldura Minuto",
        skills: "HTML5  CSS3  VueJS",
        complements: "Wordpress  Rest API",
        owner:
          "Projeto desenvolvido para Gotcha, à serviço de Agência Suprema.",
        name: "moldura",
        url: "https://molduraminutoblog.com.br/",
      },
      {
        title: "EyeVision Inteligence",
        skills: "HTML5  SASS  PHP SASS",
        complements: "Wordpress",
        owner:
          "Projeto desenvolvido para Eyevision, à serviço de Agência Suprema.",
        name: "eyevsion",
        url: "https://eyevisionintelligence.com/",
      },
      {
        title: "Lufer",
        skills: "HTML5  CSS3  VueJS",
        complements: "Wordpress  Rest API",
        owner: "Projeto desenvolvido para Lufer, à serviço de Agência Suprema.",
        name: "lufer",
        url: "https://lufer.com.br/",
      },
      {
        title: "Pet de todos",
        skills: "HTML5  CSS3  VueJS",
        complements: "Wordpress  Rest API",
        owner:
          "Projeto desenvolvido para Gotcha, à serviço de Agência Suprema.",
        name: "pet",
        url: "https://petdetodos.com.br/",
      },
    ]);
  }, []);

  return (
    <section className={styles.works} id="works">
      <main className={styles.container}>
        <span>
          <span className={styles.show}>
            <Title text="Works" />
          </span>
        </span>
        <ul>
          {works?.map((work, index) => (
            <Work work={work} key={index} />
          ))}
        </ul>
      </main>
      <figure className={styles.backIconLeft}>
        <HTM />
      </figure>
      <figure className={styles.backIconLeft}>
        <Css />
      </figure>
      <figure className={styles.backIconLeft}>
        <Ui />
      </figure>
      <figure className={styles.backIconLeft}>
        <WordPress />
      </figure>
    </section>
  );
}
