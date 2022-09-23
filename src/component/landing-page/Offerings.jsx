import React from "react";
import OrnamentImg from "../../assets/ornament-img.svg";
import {
  Col,
  Row,
  Card,
  CardTitle,
  CardBody,
  Button,
  Input,
  Form,
} from "reactstrap";

const Offerings = () => {
  return (
    <div className="offering-section">
      <img className="ornament-img" src={OrnamentImg} alt="ornament_img" />
      <img className="ornament-2-img" src={OrnamentImg} alt="ornament_img" />
      <Row className="mt-5 p-5">
        <Col>
          <Card className="p-5 offering-card">
            <CardTitle>
              <h2 className="text-center">Let us send you offerings</h2>
              <br />
            </CardTitle>
            <div className="d-flex">
              <CardBody>
                <Col>
                  <Form className=" d-flex justify-content-between mx-5 col-15">
                    <Input
                      className="offering-input"
                      type="email"
                      placeholder="Input your email address in here"
                      required
                    />

                    <Button className="sub-btn col-4 p-4 mx-3 offering-input">
                      Subscribe Now
                    </Button>
                  </Form>
                </Col>
              </CardBody>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Offerings;
