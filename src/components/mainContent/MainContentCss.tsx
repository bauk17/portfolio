import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 50vh;
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 0.3s ease forwards;
`;
