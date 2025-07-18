import { FaReact, FaJava, FaAws } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaNode } from "react-icons/fa6";
import { DiDocker } from "react-icons/di";
import { SiMysql, SiSequelize } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { DiPostgresql, DiMongodb } from "react-icons/di";
import { MdNavigateNext } from "react-icons/md";
import * as Styled from "./CssComponents";
import { useEffect, useState, type JSX } from "react";

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
  { name: "MySQL", icon: <SiMysql size={100} /> },
  { name: "PostgreSQL", icon: <DiPostgresql size={100} /> },
  { name: "MongoDB", icon: <DiMongodb size={100} /> },
  { name: "JavaScript", icon: <RiJavascriptLine size={100} /> },
  { name: "TypeScript", icon: <TbBrandTypescript size={100} /> },

  { name: "React", icon: <FaReact size={100} /> },
  { name: "Node.js", icon: <FaNode size={100} /> },
  { name: "Java", icon: <FaJava size={100} /> },
  { name: "Docker", icon: <DiDocker size={100} /> },
  { name: "Sequelize", icon: <SiSequelize size={100} /> },
  { name: "AWS", icon: <FaAws size={100} /> },
  { name: "MySQL", icon: <SiMysql size={100} /> },
  { name: "PostgreSQL", icon: <DiPostgresql size={100} /> },
  { name: "MongoDB", icon: <DiMongodb size={100} /> },
  { name: "JavaScript", icon: <RiJavascriptLine size={100} /> },
  { name: "TypeScript", icon: <TbBrandTypescript size={100} /> },
];

function TechnologyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [autoPlay, setAutoPLay] = useState(true);

  const visibleCount = listOfTechnologies.length / 2;

  const scrollArray = () => {
    setAnimate(true);
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(scrollArray, 2000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  useEffect(() => {
    if (currentIndex === visibleCount) {
      setTimeout(() => {
        setAnimate(false);
        setCurrentIndex(0);
      }, 500);
    }
  }, [currentIndex, visibleCount]);

  return (
    <div>
      <Styled.CarouselWrapper
        onMouseEnter={() => setAutoPLay(false)}
        onMouseLeave={() => setAutoPLay(true)}
      >
        <Styled.CarouselContainer
          animate={animate}
          style={{ transform: `translateX(-${currentIndex * 140}px)` }}
        >
          {listOfTechnologies.map((tech, index) => (
            <Styled.CarouselItem key={index}>{tech.icon}</Styled.CarouselItem>
          ))}
        </Styled.CarouselContainer>
      </Styled.CarouselWrapper>
      <Styled.CarouselNextButton
        onClick={scrollArray}
        onMouseEnter={() => setAutoPLay(false)}
        onMouseLeave={() => setAutoPLay(true)}
      >
        <MdNavigateNext color="white" size={25} />
      </Styled.CarouselNextButton>
    </div>
  );
}

export default TechnologyCarousel;
