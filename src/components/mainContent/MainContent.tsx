import About from "../../pages/about/About";
import Home from "../../pages/home/Home";

interface Props {
  activePage: string;
}

function MainContent({ activePage }: Props) {
  return (
    <div>
      {activePage === "Home" && <Home />}
      {activePage === "About" && <About />}
    </div>
  );
}

export default MainContent;
