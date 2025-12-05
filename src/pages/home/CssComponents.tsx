import styled from "styled-components";

export const HomeWrapper = styled.div`
  min-height: 400px;
`;

export const Title = styled.h1`
  font-size: 2em;
  color: #cecece;
`;

export const Introduce = styled.p`
  font-size: 38px;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 100;
  margin-left: 68px;
  margin-top: 60px;

  @media (max-width: 500px) {
    font-size: 32px;
    margin-top: 50px;
    margin-left: 34px;
    font-weight: 200;
    text-align: center;
  }
`;

export const ButtonSection = styled.div`
  width: 50%;
  margin-left: 48px;
  margin-top: 70px;
  display: flex;

  @media (max-width: 500px) {
    margin-top: 50px;
    width: 100%;
    margin-left: 34px;

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
    margin-left: 10px;
    margin-right: 10px;
    width: 140px;
    font-size: 20px;
    height: 55px;
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
    font-size: 19px;
    margin-left: 62px;
    text-align: center;
  }
`;

export const NextPageButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: 1px solid #2a4072;

  color: white;
  background-color: #0f172a;

  top: 390px;
  right: 100px;

  &:hover {
    background-color: #121f3d;
    cursor: pointer;
  }
`;
