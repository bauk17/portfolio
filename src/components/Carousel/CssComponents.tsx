import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 830px;
  overflow: hidden;
  margin-left: 40px;

  position: relative;
  &:hover {
  }

  @media (max-width: 500px) {
    margin-left: 20px;
    overflow: hidden;
    width: 375px;
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
  }
`;

export const CarouselNextButton = styled.button`
  position: absolute;

  width: 50px;
  height: 50px;
  z-index: 9999;
  border-radius: 50%;
  border: 1px solid #2a4072;

  color: white;
  background-color: #0f172a;
  top: 35%;
  right: -18px;

  &:hover {
    cursor: pointer;
  }
`;
