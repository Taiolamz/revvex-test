import React from "react";
import "../../styles/landing-page/pricing-page.css";
import "../../styles/landing-page/home-page.scss";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import MenuBar from "./NavBar";
import Slider from "./Slider";
import Footer from "./Footer";
import Offerings from "./Offerings";

const Pricing = () => {
  return (
    <div>
      {/* navbar */}
      <MenuBar />
      <br />

      <Container className="mt-5 pricing menu-bar home-page">
        <Row>
          <Col className="text-center yearly-section mt-5">
            <h2>
              Managing your budget as
              <br /> Simple as A, B, C
            </h2>
            <div className="d-flex justify-content-center mx-3 mt-5">
              <Button className="trans-btn mx-3 p-3 col-2 year-btn">
                Monthly
              </Button>
              <Button className="trans-btn mx-3 p-3 col-2 year-btn">
                Annually(Save 2%)
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="mt-5">
            <Card className="text-center mt-5 pricing-card">
              <CardTitle className="mt-5">
                <h4 className="mt-5">SME</h4>
              </CardTitle>
              <CardSubtitle className="mt-4">
                <h4>₦200,000/mnth</h4>
              </CardSubtitle>
              <CardBody>
                <p className="mt-4">1 - 5 Users</p>
                <p className="mt-4">No subsidiaries</p>
                <p className="mt-4">No Branches</p>
                <br />
                <Button className="mt-5 trans-btn">Start 14 Day Trial</Button>
              </CardBody>
            </Card>
          </Col>

          <Col className="mt-5">
            <Card className="text-center mt-5 pricing-card">
              <CardTitle className="mt-5">
                <h4 className="mt-5">Medium</h4>
              </CardTitle>
              <CardSubtitle className="mt-4">
                <h4>₦2,000,000/mnth</h4>
              </CardSubtitle>
              <CardBody>
                <p className="mt-4">5 - 20 Users</p>
                <p className="mt-4">3 subsidiaries</p>
                <p className="mt-4">6 Branches</p>
                <br />
                <Button className="mt-5 col-8">Start Plan</Button>
              </CardBody>
            </Card>
          </Col>

          <Col className="mt-5">
            <Card className="text-center mt-5 pricing-card">
              <CardTitle className="mt-5">
                <h4 className="mt-5">Large</h4>
              </CardTitle>
              <CardSubtitle className="mt-4">
                <h4>₦4,000,000/mnth</h4>
              </CardSubtitle>
              <CardBody>
                <p className="mt-4">21 - 50 Users</p>
                <p className="mt-4">6 subsidiaries</p>
                <p className="mt-4">12 Branches</p>
                <p className="mt-4">6 Organizations</p>
                {/* <br />  */}
                <Button className="mt-3 trans-btn col-8">Start Plan</Button>
              </CardBody>
            </Card>
          </Col>

          <Col className="mt-5">
            <Card className="text-center mt-5 pricing-card">
              <CardTitle className="mt-5">
                <h4 className="mt-5">Enterprise</h4>
              </CardTitle>
              <CardBody className="mt-5">
                <p className="mt-4">Abve 50 Users</p>
                <p className="mt-4">Unlimited Subsidiaries</p>
                <p className="mt-4">Unlimited Branches</p>
                <p className="mt-4">Organizations (Negotiable)</p>
                <Button className="mt-4 col-8">Contact Sales</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <br />
        <br />
        <br />

        {/* pricing-slider */}

        <Slider />

        {/* offerings */}
        <div className="pricing-offering">
          <Offerings />
        </div>
        <br />
        <br />
        <br />

        <div className="pricing-footer">
          <Footer />
        </div>

        <br />
        <br />
      </Container>
    </div>
  );
};

export default Pricing;
