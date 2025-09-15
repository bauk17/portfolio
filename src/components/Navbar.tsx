import { NavbarContainer, NavbarItem, NavbarList } from "./NavbarCss";

interface Props {
  pages: string[];
  activePage: string;
  setActivePage: (page: string) => void;
}

function Navbar({ pages, activePage, setActivePage }: Props) {
  return (
    <div>
      <NavbarContainer>
        <NavbarList>
          {pages.map((item, index) => (
            <NavbarItem
              key={index}
              onClick={() => {
                setActivePage(item);
              }}
              $active={activePage === item}
            >
              {item}
            </NavbarItem>
          ))}
        </NavbarList>
      </NavbarContainer>
    </div>
  );
}

export default Navbar;
