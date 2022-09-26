import { useEffect, useState } from "react";
import { AnimationProps } from "../App";
import useMedia from "../Hooks/useMedia";
import styles from "./Header.module.scss";

export default function Header({ animation }: AnimationProps) {
  const [menu, setMenu] = useState<boolean>(false);
  const mobile = useMedia("(max-width: 1024px)");

  function handdleHash(e: React.MouseEvent<HTMLAnchorElement>) {
    let hash = document.querySelector(
      e.currentTarget.attributes[0].value
    ) as HTMLAnchorElement;
    e.preventDefault();
    if (hash) {
      return window.scrollTo({
        top: hash.offsetTop - 150,
        left: 0,
        behavior: "smooth",
      });
    }
  }
  function toggleMenu() {
    document.querySelector("body")!.classList.toggle("noscroll");
    setMenu(!menu);
  }
  return (
    <header
      className={`${styles.header} ${animation || menu ? styles.active : ""}`}
    >
      <main className={styles.header__content}>
        <h2>
          Patric Oliveira
          <span>FrontEnd Developer</span>
        </h2>
        {mobile && (
          <button
            onClick={toggleMenu}
            className={`${styles.btnMenu} ${menu ? "active" : ""}`}
          ></button>
        )}
        <nav className={`${styles.header__menu}  ${menu ? "active" : ""}`}>
          <ul>
            <li>
              <a onClick={handdleHash} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={handdleHash} href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a onClick={handdleHash} href="#works">
                Works
              </a>
            </li>
            <li>
              <a onClick={handdleHash} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </header>
  );
}
