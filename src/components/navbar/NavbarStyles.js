import {Navbar} from "react-bootstrap";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledNavbar = styled(Navbar)`
  display: flex;
  column-gap: 30px;
  align-items: center;
`;

export const StyledDropdownLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: white;
  padding: 2px 0;

  .dropdown_menu {
    display: none;
    position: absolute;
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
    padding: 2px 0px;
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