import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-left: 68px;
  margin-top: 80px;
  width: 800px;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 200;
`;

export const AboutLetter = styled.div`
  margin-top: 50px;
`;

export const AboutContent = styled.div`
  margin-left: 64px;
  margin-top: 150px;
`;

export const TimelineWrapper = styled.div`
  margin-top: 30px;
  margin-left: 98px;
  width: 800px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const TimeLineContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const TimeLineLabel = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14.5px;
`;

export const TimelineButton = styled.button<{
  active?: boolean;
  isDone?: boolean;
}>`
  background-color: ${({ active, isDone }) =>
    isDone ? "#17a005" : active ? "#0039bc" : "#cfcfcf"};
  width: 20px;
  height: 20px;
  margin-top: 15px;
  border-radius: 100%;
  cursor: pointer;
  border: none;
`;

export const TimeLineProgressBar = styled.div<{
  progress: number;
  isDone: boolean;
}>`
  position: absolute;
  top: 40.5px;
  left: 45px;

  height: 4px;

  background-color: ${({ isDone }) => (isDone ? "#17a005" : "#0039bc")};
  width: calc(${({ progress }) => progress}% - 21px);
  transition: width 0.4s ease;
  z-index: 0;
`;
