import styled from "styled-components";

export const HomeWrapper = styled.div`
  min-height: 400px;

  @media (max-width: 500px) {
    max-width: 95%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 375px) {
    width: 375px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-top: 50px;
  }

  @media (max-width: 425px) {
    margin-left: 10px;
    width: 425px;
  }
`;

export const Introduce = styled.p`
  font-size: 38px;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 100;
  margin-left: 68px;
  margin-top: 60px;

  @media (max-width: 500px) {
    font-family: "Inter", sans-serif;
    font-size: 32px;
    font-weight: 200;
    width: 100%;
    text-align: center;
    margin-left: 0px;
  }

  @media (max-width: 375px) {
    font-size: 36px;
  }

  @media (max-width: 425px) {
  }
`;

export const Presentation = styled.p`
  font-size: 21px;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 100;
  margin-left: 68px;
  margin-top: 15px;

  @media (max-width: 500px) {
    font-size: 18px;
    max-width: 100%;

    text-align: center;
    margin-left: 0px;
  }

  @media (max-width: 375px) {
    font-size: 22px;
    margin-top: 20px;
  }
`;

export const ButtonSection = styled.div`
  width: 50%;
  margin-left: 48px;
  margin-top: 70px;
  display: flex;

  @media (max-width: 500px) {
    margin-top: 50px;
    width: 80%;
    margin-left: 0px;
    display: flex;
    justify-content: center;
  }
`;

export const Button = styled.button`
  background-color: #0039bc;

  text-align: center;
  font-size: 24px;
  font-family: "Inter", sans-serif;
  font-weight: 400;

  border-radius: 8px;
  border: 0;
  outline: none;
  width: 267px;

  height: 64px;
  margin-left: 20px;
  color: white;
  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: #002a8c;
    }
  }

  @media (max-width: 500px) {
    width: 140px;
    font-size: 20px;
    height: 55px;
    margin-left: 8px;
    margin-right: 8px;
  }

  @media (max-width: 500px) {
    width: 140px;
    font-size: 18px;
    height: 55px;
    margin-left: 12px;
    margin-right: 12px;
  }
`;
