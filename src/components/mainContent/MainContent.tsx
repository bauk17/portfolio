import Timeline from "../../pages/about/Timeline";
import About from "../../pages/aboutme/About";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Projects from "../../pages/projects/Projects";
import * as Styled from "./MainContentCss";

type PageName = "Home" | "Timeline" | "Projects" | "Contact" | "About";

const PageMap: Record<PageName, React.FC> = {
  Home,
  Timeline,
  Projects,
  Contact,
  About,
};

interface Props {
  activePage: string;
}

function MainContent({ activePage }: Props) {
  const Component = PageMap[activePage as PageName];

  return (
    <Styled.ContentWrapper>
      <Styled.PageContainer key={activePage}>
        <Component />
      </Styled.PageContainer>
    </Styled.ContentWrapper>
  );
}

export default MainContent;
