import Navbar from "../../components/Navbar";
import * as Styled from "./CssComponents";

function Home() {
  return (
    <div>
      <Navbar />
      <Styled.Introduce>
        Welcome!
        <br /> I’m Cauã Pereira, a Software Developer
      </Styled.Introduce>
      <Styled.Presentation>
        I'm passionate about creating complete and efficient <br />
        software solutions. Here, you can explore some of my projects <br /> and
        get a sense of who I am as a professional.
      </Styled.Presentation>
      <Styled.ButtonSection>
        <Styled.Button>See projects</Styled.Button>
        <Styled.Button>Contact me</Styled.Button>
      </Styled.ButtonSection>
    </div>
  );
}

export default Home;
