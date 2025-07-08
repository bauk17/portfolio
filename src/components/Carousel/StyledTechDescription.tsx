import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  
  }

  to {
    opacity: 1;
   
  }
`;

export const TechDescriptionContainer = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
  position: absolute;
  top: 450px;
  left: 640px;
  z-index: 10;
  width: 300px;
  height: 180px;
  border-radius: 7px;
  background-color: #141f38;
`;

export const TechDescriptionText = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-family: "Inter", sans-serif;
`;
