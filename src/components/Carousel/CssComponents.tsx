import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 830px;
  overflow: hidden;
  margin-left: 40px;

  position: relative;
  &:hover {
  }

  @media (max-width: 500px) {
    overflow: hidden;
    margin-left: 50px;

    width: 400px;
  }

  @media (max-width: 375px) {
    margin-left: 8px;
    margin-top: 20px;
  }

  @media (max-width: 425px) {
    margin-left: 8px;
    margin-top: 20px;
  }
`;

export const CarouselContainer = styled.div<{ animate: boolean }>`
  display: flex;
  gap: 40px;
  padding: 18px;
  transition: ${(props) =>
    props.animate ? "transform 0.5s ease-in-out" : "none"};

  @media (max-width: 500px) {
    gap: 40px;
  }
`;

export const CarouselItem = styled.div<{ isSelected?: boolean }>`
  opacity: ${(props) => (props.isSelected ? 0.5 : 1)};
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  min-width: 100px;
  position: relative;

  @media (max-width: 500px) {
    min-width: 80px;
  }
`;
