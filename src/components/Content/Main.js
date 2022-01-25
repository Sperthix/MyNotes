import Contact from "../Contact/Contact";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Welcome from "./Welcome";

const Main = () => {
  return (
    <section>
      <Welcome />
      <AboutMe />
      <Portfolio />
      <Contact />
    </section>
  );
};

export default Main;
