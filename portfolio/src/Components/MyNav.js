import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem, NavLink } from "reactstrap";
import logo from "../logo.png";

const MyNav = () => {
  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <img src={logo} alt="logo" height="60px" width="60px" />
        </NavbarBrand>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="./Contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};

export default MyNav;
