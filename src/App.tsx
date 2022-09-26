import Banner from "./Components/Banner";
import Header from "./Components/Header";
import About from "./Components/Sections/About";
import Skills from "./Components/Sections/Skills";
import Works from "./Components/Sections/Works";
import Contact from "./Components/Sections/Contact";
import { useEffect, useState } from "react";

export interface AnimationProps {
  animation: boolean;
}

function App() {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const elementInView = (el: any, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) - offset
    );
  };

  function handleScroll() {
    setScroll(window.scrollY > 50);
    const animations = document.querySelectorAll<HTMLElement>("[data-anime]");
    animations.forEach((animation) => {
      if (
        animation.getBoundingClientRect().top <=
        (window.innerHeight || document.documentElement.clientHeight)
      ) {
        animation.style.transform = "translateY(0)";
        animation.style.opacity = "1";
      }
    });
  }
  return (
    <>
      <Header animation={scroll} />
      <Banner />
      <About />
      <Skills />
      <Works />
      <Contact />
    </>
  );
}

export default App;
