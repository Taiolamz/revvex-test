import React from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import RevvexLogo from "../../assets/revvex-logo.svg";
import "../../styles/landing-page/footer.scss";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Container className="mt-5 footer home-page menu-bar ">
        <Row className="mt-5">
          <Col>
            <h4 className="mb-4">Feature</h4>
            <p>Budget</p>
            <p>Revenue</p>
            <p>Expenditure</p>
          </Col>

          <Col>
            <h4 className="mb-4">Resources</h4>
            <p>Blog</p>
          </Col>

          <Col>
            <h4 className="mb-4">We are social</h4>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Youtube</p>
          </Col>

          <Col>
            <h4 className="mb-4">Support</h4>
            <p>Help & Support</p>
            <p>Contact Us</p>
          </Col>

          <Col className="company">
            <h4 className="mb-4">Company</h4>
            <p 
              onClick={() => navigate("/privacy-policy")}
              className={`link nav-page${
                window.location.pathname === "/privacy-policy" ? "" : "nav-page"
              }`}
            >
              Privacy Policy
            </p>
            <p
              onClick={() => navigate("/terms-of-service")}
              className={`link nav-page${
                window.location.pathname === "/terms-of-service"
                  ? ""
                  : "nav-page"
              }`}
            >
              Terms of Service
            </p>
            <p
              onClick={() => navigate("/cookies-policy")}
              className={`link nav-page${
                window.location.pathname === "/cookies-policy" ? "" : "nav-page"
              }`}
            >
              Cookies Policy
            </p>
            <p
              onClick={() => navigate("/eula")}
              className={`link nav-page${
                window.location.pathname === "/eula" ? "" : "nav-page"
              }`}
            >
              EULA
            </p>
          </Col>
        </Row>

        <br />
        <br />
        <br />

        <Row>
          <Col className="d-flex justify-content-between">
            <img src={RevvexLogo} alt="revvex_logo" />
            <p className="rights">© 2022 Revvex. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
