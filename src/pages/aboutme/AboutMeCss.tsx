import styled, { keyframes } from "styled-components";

export const fadeAnimation = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const AboutMeWrapper = styled.div`
  margin-left: 210px;
  margin-top: 150px;
  width: 650px;
  font-family: "Inter", sans-serif;
  font-size: 22px;
  font-weight: 300;
`;

export const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AboutMeDescription = styled.div`
  height: 150px;
  animation: ${fadeAnimation} 0.4s ease;
`;

export const AboutMeStepButton = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? "#0039bc" : "#cfcfcf")};
  width: 18px;
  height: 18px;
  margin-right: 25px;
  margin-top: 40px;
  cursor: pointer;
  border-radius: 100%;
  border: none;
`;
