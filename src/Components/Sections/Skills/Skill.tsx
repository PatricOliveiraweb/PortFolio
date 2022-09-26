import React from "react";
import styles from "./Skill.module.scss";

export interface SkillProps {
  text: string;
  institution: string;
  link: string;
  type: string;
}

export const Skill = ({ text, institution, link, type }: SkillProps) => {
  return (
    <p className={`${styles.skill} ${styles.separator} ${type}`}>
      {text} - <a href={link}>{institution}</a>
    </p>
  );
};
