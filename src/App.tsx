import TechnologyCarousel from "./components/Carousel/TechnologyCarousel";
import MainContent from "./components/mainContent/MainContent";

import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const pages = ["Home", "Timeline", "Projects", "Contact", "About"];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Navbar
        pages={pages}
        activePage={pages[activeIndex]}
        setActivePage={(page) => setActiveIndex(pages.indexOf(page))}
      />
      <MainContent
        activePage={pages[activeIndex]}
        setActivePage={(page) => setActiveIndex(pages.indexOf(page))}
      />

      {pages[activeIndex] === "Contact" ||
      pages[activeIndex] === "About" ? null : (
        <TechnologyCarousel />
      )}
    </div>
  );
}

export default App;
