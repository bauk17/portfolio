import * as Styled from "./CssComponents";
import { useEffect, useState } from "react";
import { FaReact, FaJava, FaAws } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaNode } from "react-icons/fa6";
import { DiDocker } from "react-icons/di";
import { SiMysql, SiSequelize } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { DiPostgresql, DiMongodb } from "react-icons/di";

const listOfTechnologies = [
  {
    name: "React",
    icon: <FaReact size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "Node.js",
    icon: <FaNode size={100} />,
    description:
      "A JavaScript library for building user interfacesSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS",
  },
  {
    name: "Java",
    icon: <FaJava size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "Docker",
    icon: <DiDocker size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "Sequelize",
    icon: <SiSequelize size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "AWS",
    icon: <FaAws size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "MySQL",
    icon: <SiMysql size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "PostgreSQL",
    icon: <DiPostgresql size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  { name: "MongoDB", icon: <DiMongodb size={100} /> },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "TypeScript",
    icon: <TbBrandTypescript size={100} />,
    description: "A JavaScript library for building user interfaces",
  },

  {
    name: "React",
    icon: <FaReact size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "Node.js",
    icon: <FaNode size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "Java",
    icon: <FaJava size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "Docker",
    icon: <DiDocker size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "Sequelize",
    icon: <SiSequelize size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "AWS",
    icon: <FaAws size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "MySQL",
    icon: <SiMysql size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "PostgreSQL",
    icon: <DiPostgresql size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  { name: "MongoDB", icon: <DiMongodb size={100} /> },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "TypeScript",
    icon: <TbBrandTypescript size={100} />,
    description: "A JavaScript library for building user interfaces",
  },
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
    if (!autoPlay) setAutoPLay(true);
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
      <Styled.CarouselWrapper>
        <Styled.CarouselContainer
          animate={animate}
          style={{ transform: `translateX(-${currentIndex * 140}px)` }}
        >
          {listOfTechnologies.map((tech, index) => (
            <div key={index}>
              <Styled.CarouselItem>{tech.icon}</Styled.CarouselItem>
            </div>
          ))}
        </Styled.CarouselContainer>
      </Styled.CarouselWrapper>
    </div>
  );
}

export default TechnologyCarousel;
