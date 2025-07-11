import styled from "styled-components";

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
  margin-top: 80px;
`;

export const ButtonSection = styled.div`
  width: 50%;
  margin-left: 48px;
  margin-top: 70px;
  display: flex;
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
`;

export const Presentation = styled.p`
  font-size: 21px;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 100;
  margin-left: 68px;
  margin-top: 15px;
`;
