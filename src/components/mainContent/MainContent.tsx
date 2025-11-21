import About from "../../pages/about/About";
import * as MainContentStyled from "./MainContentCss";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Projects from "../../pages/projects/Projects";
import { useEffect, useState } from "react";

type PageName = "Home" | "About" | "Projects" | "Contact";

const PageComponentMap: Record<PageName, React.FC> = {
  Home: Home,
  About: About,
  Projects: Projects,
  Contact: Contact,
};

interface MainContentProps {
  activePage: string;
}

function MainContent({ activePage }: MainContentProps) {
  const pages = ["Home", "About", "Projects", "Contact"];

  const activeIndex = pages.indexOf(activePage);

  const transformOffset = `translateX(-${activeIndex * 100}%)`;

  return (
    <MainContentStyled.default.ContentWrapper>
      <MainContentStyled.default.ContentTrack transformOffset={transformOffset}>
        {pages.map((pageName) => {
          const Component = PageComponentMap[pageName as PageName];
          if (!Component) return null;

          return (
            <MainContentStyled.default.PageContent key={pageName}>
              <Component />
            </MainContentStyled.default.PageContent>
          );
        })}
      </MainContentStyled.default.ContentTrack>
    </MainContentStyled.default.ContentWrapper>
  );
}

export default MainContent;
