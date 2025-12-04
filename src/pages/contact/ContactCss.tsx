import styled from "styled-components";

export const ContactWrapper = styled.div`
  text-align: center;
  margin-top: 100px;
  margin-left: 68px;
  width: 868px;
  max-height: 800px;
`;

export const ContactPresentation = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 22px;
  font-weight: 200;
`;

export const ContactCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 68px;
  margin-top: 150px;

  width: 868px;
  border: none;
`;

export const ContactCards = styled.a`
  width: 180px;
  height: 200px;
  border-radius: 8px;

  text-decoration: none;

  background-color: #10224d;

  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
    transform: translateY(-4px);

    transition: 0.5s all ease;
  }
`;
