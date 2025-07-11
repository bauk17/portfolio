import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { DiDocker } from "react-icons/di";
import { SiSequelize } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import * as Styled from "./CssComponents";
import { useState, type JSX } from "react";

type Technology = {
  name: string;
  icon: JSX.Element;
};

const listOfTechnologies = [
  { name: "React", icon: <FaReact size={100} /> },
  { name: "Node.js", icon: <FaNode size={100} /> },
  { name: "Java", icon: <FaJava size={100} /> },
  { name: "Docker", icon: <DiDocker size={100} /> },
  { name: "Sequelize", icon: <SiSequelize size={100} /> },
  { name: "AWS", icon: <FaAws size={100} /> },
];

function TechnologyCarousel() {
  const [technologies, setTechnologies] =
    useState<Technology[]>(listOfTechnologies);

  const scrollArray = () => {
    const newList = [...technologies];
    const firstElement = newList.shift();
    if (firstElement) newList.push(firstElement);
    setTechnologies(newList);
  };

  return (
    <div>
      <Styled.CarouselContainer>
        {technologies.map((tech, index) => (
          <div key={index}>{tech.icon}</div>
        ))}
      </Styled.CarouselContainer>
      <button onClick={scrollArray}>Next list item</button>
    </div>
  );
}
export default TechnologyCarousel;
