import { NavbarContainer, NavbarItem, NavbarList } from "./NavbarCss";

function Navbar() {
  return (
    <div>
      <NavbarContainer>
        <NavbarList>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </NavbarList>
      </NavbarContainer>
    </div>
  );
}

export default Navbar;
