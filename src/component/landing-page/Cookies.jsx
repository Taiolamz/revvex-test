import React from "react";
import { Container, Row, Col } from "reactstrap";
import MenuBar from "./NavBar";
import "../../styles/landing-page/cookies.scss";
import Footer from "./Footer";

const Cookies = () => {
  return (
    <div>
      <MenuBar />
      <Row className="mt-5 cookies-policy">
        <Col className="mt-5 p-4">
          <h4 className="mt-5 text-center">Cookies Policy</h4>
        </Col>
      </Row>
      <Container className="cookies">
        <br />
        
        <Row className="mt-5">
          <Col>
            <p>
              This Cookie Policy explains how Revvex, is using cookies and
              similar technologies when You visit our website located
              at https://revvex.io
            </p>
            <h2 className="mt-5">WHAT IS A COOKIE?</h2>


            <p>
              A cookie is a small text file that a website saves on Your
              computer or mobile device when You visit the site. It enables the
              website to remember Your actions and preferences (such as login,
              language, font size and other preferences) over a period of time,
              so that You do not have to keep re-entering them whenever You come
              back to the site or browse from one page to another.
            </p>


            <h2 className="mt-5">WHAT TYPES OF COOKIES DO WE USE?</h2>


            <ul className="mt-5">
              <li>Essential cookies</li>
              <p>
                These are cookies which are strictly necessary for our website
                to be able to operate or to provide You with a service on our
                website which You have requested. Without these cookies You
                would not be able to use our website’s features.
              </p>


              <li className="mt-5">Functionality cookies</li>
              <p>
                These cookies allow the website to remember choices You make
                (such as Your username, language, or the region You are in) and
                provide enhanced, more personal features.
              </p>


              <li className="mt-5">Performance cookies</li>
              <span>
                These cookies collect information about how visitors use our
                website, for instance which pages visitors go to most often, and
                if they get error messages from web pages. These cookies do not
                collect information that identifies a visitor. All information
                these cookies collect is aggregated and therefore anonymous. It
                is only used to improve how our website works.
              </span>
              <span><br />
                To place these cookies, we use Google Analytics and Yandex
                Metrica. Please note that these are third party cookies.
              </span>


              <li className="mt-5">Advertising cookies</li>
              <p>
                Our website does not place any third-party advertisements via
                cookies. We rely only on such advertising cookies, which allow
                us to place our advertisements on third-party websites, which
                You visit after visiting our website
              </p>
            </ul>


            <p className="mt-5">
              You can also control cookies through settings of the browser that
              You are using. Bellow, you will find links to cookie management
              within different browsers
            </p>
            <p className="mt-4">Chrome</p>
            <p className="mt-4">Safari</p>
            <p className="mt-4">Firefox</p>
            <p className="mt-4">Opera</p>
            <p className="mt-4">Internet Explorer</p>


            <h3 className="mt-5">Contact Us</h3>
            
            <p className="mt-3">
              If You have any questions or comments regarding our Cookie Policy,
              please contact us at info@revvex.io{" "}
            </p>
          </Col>
        </Row>


        <br />
        <br />
        <br />
        <div className="privacy-footer">
        <Footer />
        </div>
        <br />
        <br />
        <br />


      </Container>
    </div>
  );
};

export default Cookies;
