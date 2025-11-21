import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  margin-top: 70px;
`;

export const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 30px;
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
`;
