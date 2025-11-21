import { useState, type JSX } from "react";
import * as Styled from "./AboutCss";
import FirstContact from "./timeline/FirstContact";
import FirstProjects from "./timeline/FirstProjects";
import Degree from "./timeline/Degree";

function About() {
  const timelines = [
    { id: "first", label: "Primeiro time", content: <FirstContact /> },
    { id: "second", label: "2nd time", content: <FirstProjects /> },
    { id: "third", label: "3rd time", content: <Degree /> },
  ];
  const [timelineIndex, setTimelineIndex] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setTimelineIndex((prev) => (prev + 1) % timelines.length);
          console.log(timelines[timelineIndex]);
        }}
      >
        NEXT
      </button>
      <Styled.TimelineNav>
        <Styled.TimelineUl>
          <Styled.TimelineItem>aaa</Styled.TimelineItem>
          <Styled.TimelineItem>aaa</Styled.TimelineItem>
          <Styled.TimelineItem>aaa</Styled.TimelineItem>
        </Styled.TimelineUl>
      </Styled.TimelineNav>
      <Styled.AboutContainer>
        {/* timelines[timelineIndex].content */}
        I'm passionate about using technology and creative problem-solving to
        build efficient, real-world solutions that help people and business
        achieve their goals. My name is Cauã Pereira, a 21-year-old Software
        Developer currently pursuing a degree in Computer Science. I had my
        first contact with programming at the age of 17, and I immediately fell
        in love with the endless possibilities of creating solutions through
        code. Since then, I’ve been continuously learning and building projects
        to strengthen my skills. Ambition drives me to grow every day, not only
        as a professional but also as a person, always striving to improve and
        deliver better softwares.
      </Styled.AboutContainer>
    </div>
  );
}

export default About;
