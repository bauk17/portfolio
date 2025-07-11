import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { DiDocker } from "react-icons/di";
import { SiSequelize } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import * as Styled from "./CssComponents";

function TechnologyCarousel() {
  return (
    <div>
      <Styled.CarouselContainer>
        <FaReact size={100} />
        <FaNode size={100} />
        <FaJava size={100} />
        <DiDocker size={100} />
        <SiSequelize size={100} />
        <FaAws size={100} />
      </Styled.CarouselContainer>
    </div>
  );
}
export default TechnologyCarousel;
