import { useState } from "react";
import * as Styled from "./AboutMeCss";

function About() {
  const steps = [
    {
      id: 0,
      description:
        "I’m a developer who likes to understand systems from end to end—how the user interacts with the interface and how the logic underneath supports every step. My work today is grounded in solid back-end development and API architecture, where performance, clarity, and predictable behavior matter just as much as clean interfaces.",
    },
    {
      id: 1,
      description:
        "I’m comfortable designing, structuring, and maintaining APIs that integrate smoothly with front-end applications and external services. I care about building reliable flows, handling data responsibly, and making sure every piece of the system communicates in a way that feels natural for both developers and users.",
    },
    {
      id: 2,
      description:
        "Lately, I’ve been refining the way I think about architecture, scalability, and long-term maintainability. I’ve also been experimenting with new tools and patterns that help me write more thoughtful and future-proof solutions.",
    },
    {
      id: 3,
      description:
        "My goal is to keep evolving into a developer who delivers stable, well-designed systems—from the interface layer to the data layer—while continuing to expand my perspective and technical depth as the work grows.",
    },
  ];

  const [stepIndex, setStepIndex] = useState(0);

  return (
    <Styled.AboutMeWrapper>
      <Styled.AboutMeDescription key={steps[stepIndex].id}>
        {steps[stepIndex].description}
      </Styled.AboutMeDescription>
      <Styled.AboutMeContainer>
        {steps.map((item, index) => (
          <Styled.AboutMeStepButton
            key={item.id}
            onClick={() => {
              setStepIndex(index);
            }}
            active={index == stepIndex}
          />
        ))}
      </Styled.AboutMeContainer>
    </Styled.AboutMeWrapper>
  );
}

export default About;
