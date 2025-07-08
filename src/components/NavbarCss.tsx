import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;

  margin-top: 70px;

  width: 100%;

  @media (max-width: 500px) {
    margin-top: 50px;
    width: 100%;

    display: flex;
    justify-content: center;

    margin-left: 0px;
  }

  @media (max-width: 375px) {
    display: flex;
    justify-content: center;
    width: 100%;

    margin-top: 60px;
    margin-left: 0px;
  }

  @media (max-width: 425px) {
    margin-left: 0px;
    width: 100%;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  justify-content: center;

  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 30px;
  @media (max-width: 500px) {
    margin-left: 4px;
  }

  @media (max-width: 375px) {
    margin-left: 0px;
  }
`;

export const NavbarItem = styled.li<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? "#0039bc" : "#fff")};
  font-size: 34px;
  font-family: "Inter", sans-serif;
  margin: 38px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
    transition: 0.5s all ease;
  }

  @media (max-width: 500px) {
    font-size: 19px;
    margin: 7px;
  }

  @media (max-width: 375px) {
    font-size: 17px;
    margin: 6px;
  }
`;
