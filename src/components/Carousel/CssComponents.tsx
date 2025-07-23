import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 830px;
  overflow: hidden;
  margin-left: 40px;
  margin-top: 70px;

  position: relative;
  &:hover {
  }
`;

export const CarouselContainer = styled.div<{ animate: boolean }>`
  display: flex;
  gap: 40px;
  padding: 18px;
  transition: ${(props) =>
    props.animate ? "transform 0.5s ease-in-out" : "none"};
`;

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  min-width: 100px;
  position: relative;
`;

export const CarouselNextButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: 1px solid #2a4072;

  color: white;
  background-color: #0f172a;
  top: 670px;

  left: 834px;

  &:hover {
    background-color: #121f3d;
    cursor: pointer;
  }
`;
