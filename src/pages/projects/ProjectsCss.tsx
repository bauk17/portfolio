import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 60px;
  margin-left: 68px;

  width: 900px;
`;

export const ProjectsCards = styled.a`
  text-align: center;
  width: 300px;
  border-radius: 10px;
  margin-top: 100px;
  margin-right: 40px;
  height: 280px;
  background-color: #10224d;

  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.7;
    transform: translateY(-4px);
    cursor: pointer;
    transition: 0.5s all ease;
  }
`;

export const ProjectTitle = styled.div`
  font-family: "Inter", sans-serif;
  margin-top: 15px;
  font-size: 20px;
`;

export const ProjectDescription = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  height: 150px;

  margin-top: 30px;
`;
