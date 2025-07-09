import Navbar from "../../components/Navbar";
import * as Styled from "./CssComponents";

function Home() {
  return (
    <div>
      <Navbar />
      <Styled.Introduce>
        Hi,
        <br /> I’m Cauã Pereira, and Software Developer
      </Styled.Introduce>
    </div>
  );
}

export default Home;
