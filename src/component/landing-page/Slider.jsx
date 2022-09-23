import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import "../../styles/landing-page/slider.scss";
import SmileWoman from "../../assets/smile-woman-img.svg";
import BudgetIcon from "../../assets/budgeting-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const Slider = () => {
  const data = [
    {
      id: 1,
      company_name: "ZOJAPAY",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatem iste saepe, eos optio illum eum minus provident aliquid. Veritatis sed est accusamus repudiandae libero itaque, sit dolorum perferendis neque!",
    },
    {
      id: 2,
      company_name: "ZOJATECH",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatem iste saepe, eos optio illum eum minus provident aliquid. Veritatis sed est accusamus repudiandae libero itaque, sit dolorum perferendis neque!",
    },
    {
      id: 3,
      company_name: "ITHORIZON",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatem iste saepe, eos optio illum eum minus provident aliquid. Veritatis sed est accusamus repudiandae libero itaque, sit dolorum perferendis neque!",
    },
  ];
  return (
    <div>
      <Container className="mt-5 slider">
        <Row className="mt-5">
          <Col className="d-flex justify-content-center">
            <img
              className="smile-woman"
              src={SmileWoman}
              alt="smile_woman_img"
            />
              <Col className="d-flex">
            <Card className="slider-card">
                <div className="mx-5 p-5 mt-5">
                  <div className="d-flex mx-5 zojatech">
                    <img src={BudgetIcon} />
                    <h5 className="mx-3 mt-2 ">ZOJATECH</h5>
                  </div>
                  <p className="mx-5 mt-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officia libero sunt quidem rem deserunt quos aut assumenda!
                    Eius quisquam ad eum ullam inventore fugiat velit
                    consequuntur tenetur quas. Quibusdam, officia!
                  </p>

                  <br />

                  <p className="mt-5 mx-5">
                    <b>Johanne Doe</b>
                  </p>
                  <p className="mx-5">VP, Finance, ZojatechGoons</p>
                </div>
            </Card>
              </Col>
          </Col>
        </Row>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        ></Swiper>
      </Container>
    </div>
  );
};
export default Slider;
