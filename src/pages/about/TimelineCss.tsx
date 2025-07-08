import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-left: 68px;
  margin-top: 80px;
  width: 800px;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 200;

  @media (max-width: 375px) {
    margin-left: 0px;
    width: 100%;

    font-family: "Inter", sans-serif;
    font-size: 16px;
    margin-top: 0px;
    text-align: center;
  }

  @media (max-width: 425px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const AboutLetter = styled.div`
  margin-top: 50px;
`;

export const AboutContent = styled.div`
  margin-left: 64px;
  margin-top: 150px;

  @media (max-width: 375px) {
    margin-left: 0px;
    margin-top: 120px;
  }

  @media (max-width: 425px) {
    margin-left: 23px;
    margin-top: 120px;
  }
`;

export const TimelineWrapper = styled.div`
  margin-top: 60px;
  margin-left: 98px;
  width: 800px;
  position: relative;
  display: flex;
  justify-content: space-between;

  @media (max-width: 375px) {
    margin-left: 20px;
    width: 340px;
  }

  @media (max-width: 425px) {
    margin-left: 11px;
    width: 95%;
  }
`;

export const TimeLineContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  @media (max-width: 375px) {
  }
`;

export const TimeLineLabel = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14.5px;

  @media (max-width: 375px) {
    font-size: 9px;
    font-family: "Inter", sans-serif;
  }

  @media (max-width: 425px) {
    font-size: 11px;
  }
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

  @media (max-width: 375px) {
    width: 15px;
    height: 15px;
    margin-top: 20px;
  }
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

  @media (max-width: 375px) {
    top: 36px;
    left: 30px;
  }

  @media (max-width: 425px) {
    top: 36px;
    left: 30px;
  }
`;
