import React, { useState } from "react";
import "../../styles/landing-page/nav.css";
import { useHistory } from "react-router-dom";
import {
  Nav,
  Container,
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  NavbarToggler,
  NavLink,
  Button,
} from "reactstrap";
import RevvexLogo from "../../assets/revvex-logo.svg";

const MenuBar = () => {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Container className="menu-bar footer">
        <Navbar
          fixed="top"
          container
          color="light"
          className="nav-bar p-4"
          light
          expand="md"
        >
          <NavbarBrand href="/" className="px-3">
            <img src={RevvexLogo} alt="revvex_logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle}  className="harmburger"/>
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="nav-items ml-auto">
              <NavItem>
                <NavLink className="link">FAQS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={`link nav-page${
                    window.location.pathname === "/pricing" ? "" : "nav-page"
                  }`}
                  onClick={() => history.push("/pricing")}
                  href="/pricing"
                >
                  Pricing
                </NavLink>
              </NavItem>
            </Nav>
            <Button className="login-btn trans-btn">Login</Button>
            <Button className="create-btn">
              Create Account
            </Button>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default MenuBar;
