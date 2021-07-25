import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  column-gap: 30px;
  align-items: center;
`;

export const StyledDropdownMenu = styled.div`
  position: relative;
  padding: 2px 0;
  color: white;

  .dropdown_menu {
    display: none;
    position: absolute;
    z-index: 1000;
    width: 150px;
    background-color: white;
    top: 25px;
    border-radius: 5px;
    color: black;
  }

  &:hover {
    .dropdown_menu {
      display: block;
    }
  }

  .dropdown_menu_item {
    padding: 2px 0;
    font-size: 15px;

    & a {
      text-decoration: none;
      color: black;
    }

    &:hover {
      background-color: rgba(95, 93, 93, 0.08);
    }
  }
`;