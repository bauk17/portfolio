import Timeline from "../../pages/about/Timeline";
import About from "../../pages/aboutme/About";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Projects from "../../pages/projects/Projects";
import * as Styled from "./MainContentCss";

type PageName = "Home" | "Timeline" | "Projects" | "Contact" | "About";

const PageMap: Record<PageName, React.ComponentType<any>> = {
  Home,
  Timeline,
  Projects,
  Contact,
  About,
};

interface Props {
  activePage: string;

  setActivePage: (page: string) => void;
}

function MainContent({ activePage, setActivePage }: Props) {
  const Component = PageMap[activePage as PageName];

  return (
    <Styled.ContentWrapper>
      <Styled.PageContainer key={activePage}>
        {Component === Home ? (
          <Home setActivePage={setActivePage} />
        ) : (
          <Component />
        )}
      </Styled.PageContainer>
    </Styled.ContentWrapper>
  );
}

export default MainContent;
