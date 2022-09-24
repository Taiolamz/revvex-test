import React from "react";
import "../../styles/landing-page/home-page.css";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardTitle,
  CardBody,
} from "reactstrap";
import "../../styles/landing-page/home-page.scss";
// import "../../styles/landing-page/nav.css";
import MenuBar from "./NavBar";
import StockImg from "../../assets/StockImg.svg";
import WaveImg from "../../assets/WaveImg.svg";
import CheckboxIcon from "../../assets/Checkbox-icon.svg";
import DashboardImg from "../../assets/dashboard-img.svg";
import ChartImg from "../../assets/chart-img.svg";
import EconomyGraphImg from "../../assets/economy-graph-img.svg";
import ExpenditureImg from "../../assets/expenditure-img.svg";
import RevenueIcon from "../../assets/revenue-icon.svg";
import Footer from "./Footer";
import Offerings from "./Offerings";


const HomePage = () => {
  return (
    <div>
      {/* navbar */}
      <MenuBar />
      {/* navbar */}
      <br />

      {/* first section */}
      <Container className="p-5 mt-5 px-5 py-5 home-page menu-bar">
        <Row className="first-section">
          <Col>
            <h1>
              Power your strategy
              <br /> via Budgeting
              <br /> on Revvex
            </h1>
            <p className="mt-4">
              Without financial planning & budgeting, funds develop their own
              <br />
              plans! Prevent that by channeling them towards goals and getting
              <br /> a better overview of company performance with Revvex!
            </p>
            <span>Do more, with ease.</span>
            <br />
            <Button className="try-btn mt-5">Try Now!</Button>
          </Col>
          <Col>
            <img src={StockImg} alt="stock_img" />
          </Col>
        </Row>

        <br />
        <br />

        {/* second section */}

        <Row className="mt-5 second-section">
          <Col className="mt-5">
            <img src={WaveImg} alt="hand_img" />
            <h2 className="mt-5">
              Bid fragmented
              <br /> Solutions and messy
              <br /> spreadsheets farewell
            </h2>
          </Col>

          <Col className="py-5 mx-5 col-5">
            <br />
            <br />
            <div className="d-flex automate-text">
              <img src={CheckboxIcon} alt="check_box" />
              {" "}
              <p className="mx-4">
                Automate everything! From budget entry to approval to
                <br /> expense control
              </p>
            </div>
            <div className="d-flex mt-5 automate-text">
              {" "}
              <img src={CheckboxIcon} alt="check_box" />
              <p className="mx-4">
                Predict success by analyzing forecast or budgets
                <br /> against revenue, costs, profit, deal and more
              </p>
            </div>
            <div className="d-flex mt-5 automate-text">
              {" "}
              <img src={CheckboxIcon} alt="check_box " />
              <p className="mx-4">
                Discover untapped opportunities through
                <br /> enterprise-level reporting and powerful real-time
                <br /> dashboards.
              </p>
            </div>
          </Col>
        </Row>

        <br />
        <br />

        {/* third section */}

        <Row className="third-section">
          <Col className="mt-5">
            <img
              className="dashboard-img"
              src={DashboardImg}
              alt="onboard_img"
            />
          </Col>
          <Col className="p-5 mx-5 col-5">
            <img src={ChartImg} alt="chart_img" />
            <h3 className="mt-4">Clear dynamics statements</h3>
            <span>Your financial reports, just how you want them!</span>
            <div className="d-flex mt-4 financial-text">
              <img src={CheckboxIcon} alt="check_box" />
              <p className="mx-4">
                Why shuffle between spreadsheets and multiple
                <br /> tools when important data are a few clicks away?
              </p>
            </div>

            <div className="d-flex mt-4 financial-text">
              <img src={CheckboxIcon} alt="check_box" />
              <p className="mx-4">
                Monitor your company's financial performance and
                <br /> view/extract reports for executive-level decision-making.
              </p>
            </div>
          </Col>
        </Row>

        <br />
        <br />
        <br />
        <br />

        {/* fourth section */}

        <Row className="mt-5 fourth-section">
          <Col>
            <h2>
              How is Revvex different
              <br /> from other budgeting
              <br /> software?
            </h2>
            <p className="mt-4">
              While being easy to use, Revvex helps manage not just budgets
              <br />
              but your entire company financing in one place. Moreover,
              <br />
              Revvex reporting capabilities are incomparable to any other
              <br />
              budgeting solution on the market with a keen focus on the users.{" "}
            </p>
            <Button className="try-btn">Try Now !</Button>
          </Col>
          <Col className="col-5">
            <img src={EconomyGraphImg} alt="economy_graph_img" />
          </Col>
        </Row>

        <br />
        <br />
        <br />
        <br />

        {/* fifth-section */}

        <Row className="mt-5 fifth-section">
          <Col>
            <h2 className="mt-5">
              Amazing features to simplify
              <br /> your budget process.
            </h2>
          </Col>
        </Row>

        <Row className="mt-5 fifth-section">
          <Col className="feature-card">
            <Card className="mt-4 budget-card">
              <CardTitle>
                <div className="mt-3 p-3">
                  <img
                    className="mt-4"
                    src={ExpenditureImg}
                    alt="expenditure_img"
                  />
                  <h4 className="mt-4">Expenditure forecast</h4>
                </div>
              </CardTitle>
              <CardBody>
                <p>
                  Create a separate budget for each
                  <br /> project and track it against actual
                  <br /> income and expenses.
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col className="feature-card">
            <Card className="mt-4 budget-card">
              <CardTitle>
                <div className="mt-3 p-3">
                  <img
                    className="mt-4"
                    src={RevenueIcon}
                    alt="expenditure_img"
                  />
                  <h4 className="mt-4">Revenue Projections</h4>
                </div>
              </CardTitle>
              <CardBody>
                <p className="text">
                  Get a visual representation of your
                  <br /> business's current revenue and
                  <br /> projection so you can budget
                  <br /> effectively
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col className="feature-card">
            <Card className="mt-4 budget-card">
              <CardTitle>
                <div className="mt-3 p-3">
                  <img className="mt-4" src={RevenueIcon} alt="revenue_img" />
                  <h4 className="mt-4">Trackings</h4>
                </div>
              </CardTitle>
              <CardBody>
                <p>
                  Track your expenses, so that you
                  <br /> can curb unecessary spending
                  <br /> and create useful budgets to keep
                  <br /> your finances on track{" "}
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="mt-4 budget-card">
              <CardTitle>
                <div className="mt-3 p-3">
                  <img
                    className="mt-4"
                    src={RevenueIcon}
                    alt="expenditure_img"
                  />
                  <h4 className="mt-4">Reports & Analytics</h4>
                </div>
              </CardTitle>
              <CardBody>
                <p>
                  The report summarizes and
                  <br /> organizes your data in easily
                  <br />
                  digestible ways while analytics
                  <br /> enables questioning and exploring
                  <br /> that data further
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <br />


        <Offerings/>

        <br />
        <br />
        <br />

        {/* footer */}

        <Footer />
        {/* footer */}
      </Container>
    </div>
  );
};

export default HomePage;
