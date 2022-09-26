import { useEffect, useState } from "react";
import Title from "../Helpers/Title";
import styles from "./index.module.scss";
import { Skill, SkillProps } from "./Skill";
import { ReactComponent as ReactSvg } from "../../../assets/react.svg";
import { ReactComponent as Vue } from "../../../assets/vuejs.svg";

export default function Skills() {
  const [skillsList, setSkillsList] = useState<SkillProps[] | null>(null);
  useEffect(() => {
    setSkillsList([
      {
        text: "ReactJS e React com Typescript",
        institution: "XPE",
        link: "text",
        type: "react",
      },
      {
        text: "TDD com Jest e React Testing Librar",
        institution: "XPE",
        link: "text",
        type: "react",
      },
      {
        text: "Curso Vue JS 2 - O Guia Completo (incl. Vue Router & Vuex)",
        institution: "Udemy",
        link: "https://www.udemy.com/course/vue-js-completo/",
        type: "vue",
      },
      {
        text: "Vue.js Completo",
        institution: "Origamid",
        link: "https://www.origamid.com/curso/vue-js-completo/",
        type: "vue",
      },
      {
        text: "NuxtJs",
        institution: "XPE",
        link: "text",
        type: "vue",
      },
      {
        text: "WordPress Como CMS",
        institution: "Origamid",
        link: "https://www.origamid.com/curso/wordpress-como-cms/",
        type: "wordpress",
      },
      {
        text: "WordPress REST API",
        institution: "Origamid",
        link: "https://www.origamid.com/curso/wordpress-rest-api/",
        type: "wordpress",
      },
      {
        text: "Desenvolvimento Responsivo com HTML5, CSS3 e Javascript",
        institution: "Udemy",
        link: "https://www.udemy.com/course/desenvolvimento-responsivo-com-html5-css3-e-javascript/",
        type: "",
      },
      {
        text: "UI Design Avançado",
        institution: "Origamid",
        link: "https://www.origamid.com/curso/ui-design-avancado/",
        type: "ui",
      },
      {
        text: "Controle de versão - Git",
        institution: "",
        link: "",
        type: "git",
      },
    ]);
  }, []);

  return (
    <section className={styles.skills} id="skills">
      <main className={styles.container}>
        <span data-anime="split">
          <span data-anime="show">
            <Title text="Skills" />
          </span>
        </span>
        <ul>
          {skillsList?.map((skill, index) => (
            <li key={index}>
              <span data-anime="split">
                <span data-anime="show">
                  <Skill
                    text={skill.text}
                    institution={skill.institution}
                    link={skill.link}
                    type={skill.type}
                  />
                </span>
              </span>
            </li>
          ))}
        </ul>
      </main>
      <figure className={styles.backIconLeft}>
        <ReactSvg />
      </figure>
      <figure className={styles.backIconRight}>
        <Vue />
      </figure>
    </section>
  );
}
