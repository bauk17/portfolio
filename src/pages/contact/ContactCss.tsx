import styled from "styled-components";

export const ContactWrapper = styled.div`
  text-align: center;
  margin-top: 100px;
  margin-left: 68px;
  width: 868px;
  max-height: 800px;

  @media (max-width: 375px) {
    width: 95%;
    margin-left: 10px;
  }

  @media (max-width: 425px) {
    width: 95%;
    margin-left: 15px;
  }
`;

export const ContactPresentation = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 22px;
  font-weight: 200;

  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

export const ContactCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 68px;
  margin-top: 150px;

  width: 868px;
  border: none;

  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-left: 0px;

    width: fit-content;
    margin: 150px auto 0 auto;
  }

  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    width: fit-content;

    margin: 100px auto 0 auto;
  }
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

  @media (max-width: 375px) {
    height: 140px;
    margin-right: 0px;
    width: 140px;
  }
`;

export const ContactCardIcon = styled.div`
  display: flex;
  font-size: 100px;

  @media (max-width: 375px) {
    font-size: 50px;
  }
`;
