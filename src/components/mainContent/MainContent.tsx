import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Projects from "../../pages/projects/Projects";

interface Props {
  activePage: string;
}

function MainContent({ activePage }: Props) {
  return (
    <div>
      {activePage === "Home" && <Home />}
      {activePage === "About" && <About />}
      {activePage === "Projects" && <Projects />}
      {activePage === "Contact" && <Contact />}
    </div>
  );
}

export default MainContent;
