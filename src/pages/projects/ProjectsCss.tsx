import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 60px;
  margin-left: 68px;

  width: 900px;

  @media (max-width: 375px) {
    width: 375px;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 80px;
  }

  @media (max-width: 425px) {
    width: 95%;
    flex-direction: column;
    justify-content: center;
    margin-left: 21px;
    margin-top: 20px;
  }
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

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 170px;
    width: 95%;
    margin-right: 0px;
    margin-top: 17px;
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
    width: 95%;
    margin-right: 0px;
    margin-top: 30px;
  }
`;

export const ProjectTitle = styled.div`
  font-family: "Inter", sans-serif;
  margin-top: 15px;
  font-size: 20px;

  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

export const ProjectDescription = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  height: 150px;

  margin-top: 30px;

  @media (max-width: 375px) {
    margin-top: 12px;
    font-size: 12px;
    width: 90%;
  }
`;
