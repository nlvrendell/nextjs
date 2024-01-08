import UpperBody from "./UpperBody";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Footer from "./Footer";
import Projects from "./Projects";
import Contact from "./Contact/Index";

const Home = () => {
  return (
    <>
      <UpperBody />
      <div className="mx-40 transition-all" id="home">
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
