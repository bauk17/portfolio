import { useState } from "react";
import * as Styled from "./TimelineCss";
import FirstProject from "./timeline/FirstProject";
import Basics from "./timeline/Basics";
import StackChoose from "./timeline/StackChoose";
import FirstFullProject from "./timeline/FirstFullProject";
import Today from "./timeline/Today";

function Timeline() {
  const timelines = [
    { label: "Foundations", content: <Basics /> },
    { label: "Early Projects", content: <FirstProject /> },
    { label: "Tech Stack Selection", content: <StackChoose /> },
    { label: "First Complete Project", content: <FirstFullProject /> },
    { label: "Present", content: <Today /> },
  ];
  const [timelineIndex, setTimelineIndex] = useState(0);

  const timelineProgressBar = (timelineIndex / (timelines.length - 1)) * 95;

  const changeTimeLine = (index: number): void => {
    setTimelineIndex(index);
  };

  return (
    <div>
      <Styled.TimelineWrapper>
        {timelines.map((item, index) => (
          <Styled.TimeLineContainer key={index}>
            <Styled.TimeLineLabel>{item.label}</Styled.TimeLineLabel>
            <Styled.TimelineButton
              onClick={() => {
                changeTimeLine(index);
              }}
              active={index <= timelineIndex}
              isDone={timelineIndex == timelines.length - 1}
            />
          </Styled.TimeLineContainer>
        ))}
        <Styled.TimeLineProgressBar
          progress={timelineProgressBar}
          isDone={timelineIndex == timelines.length - 1}
        />
      </Styled.TimelineWrapper>

      <Styled.AboutContainer>
        <Styled.AboutContent>
          {timelines[timelineIndex].content}
        </Styled.AboutContent>
      </Styled.AboutContainer>
    </div>
  );
}

export default Timeline;
