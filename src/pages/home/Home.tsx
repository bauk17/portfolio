import * as Styled from "./CssComponents";

interface HomeProps {
  setActivePage: (page: string) => void;
}

function Home({ setActivePage }: HomeProps) {
  return (
    <Styled.HomeWrapper>
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
        <Styled.Button
          onClick={() => {
            setActivePage("Projects");
          }}
        >
          See projects
        </Styled.Button>
        <Styled.Button
          onClick={() => {
            setActivePage("Contact");
          }}
        >
          Contact me
        </Styled.Button>
      </Styled.ButtonSection>
    </Styled.HomeWrapper>
  );
}

export default Home;
