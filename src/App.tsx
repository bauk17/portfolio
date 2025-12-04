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
      <MainContent activePage={pages[activeIndex]} />

      {pages[activeIndex] == "Contact" ? false : <TechnologyCarousel />}

      {/*<Styled.NextPageButton
        onClick={() => {
          setActiveIndex((prev) => (prev + 1) % pages.length);
        }}
      >
        <MdNavigateNext color="white" size={25} />
      </Styled.NextPageButton>*/}
    </div>
  );
}

export default App;
