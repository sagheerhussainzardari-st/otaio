import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Col, Row } from "react-bootstrap";
import GetStarted from "../Buttons/GetStarted";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "productSlider",
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      loop: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: "0px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 320,
          settings: {
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "0px",
          },
        },
      ],
    };
    return (
      <div className="mainSliderFBA">
        <Container>
          <Row>
            <Col lg={8} className="m-auto text-center">
              <div className="StartUp">
                <span className="BgText">Our Services</span>
                <div className="OurServicesHeading FBAServe">
                  <h2>
                    <b>How Do We Manage Your Amazon FBA Store?</b>
                  </h2>
                  <p>
                    Amazon FBA Automation Services (FBA stands for "Fulfilled by
                    Amazon") handle all aspects of product fulfillment,
                    including packing, distribution, returns, and so on. Free up
                    your time with Amazon Automation FBA and focus on the larger
                    picture of your business, which is critical when selling
                    your automated Amazon business. We provide affordable Amazon
                    FBA automatic pricing for your FBA dropshipping needs.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Col lg={12}>
            <Slider {...settings}>
              <div>
                <img
                  className="FacebookSlideImgs"
                  src={"/Assets/AmazonFBA/slider/slide1.png"}
                  alt="Amazon FBA"
                ></img>
              </div>
              <div>
                <img
                  className="FacebookSlideImgs"
                  src={"/Assets/AmazonFBA/slider/slide2.png"}
                  alt="Amazon FBA"
                ></img>
              </div>
              <div>
                <img
                  className="FacebookSlideImgs"
                  src={"/Assets/AmazonFBA/slider/slide3.png"}
                  alt="Amazon FBA"
                ></img>
              </div>
              <div>
                <img
                  className="FacebookSlideImgs"
                  src={"/Assets/AmazonFBA/slider/slide4.png"}
                  alt="Amazon FBA"
                ></img>
              </div>
              <div>
                <img
                  className="FacebookSlideImgs"
                  src={"/Assets/AmazonFBA/slider/slide5.png"}
                  alt="Amazon FBA"
                ></img>
              </div>
              <div>
                <img
                  className="FacebookSlideImgs"
                  src={"/Assets/AmazonFBA/slider/slide5.png"}
                  alt="Amazon FBA"
                ></img>
              </div>
              <div>
                <img
                  className="FacebookSlideImgs"
                  src={"/Assets/AmazonFBA/slider/slide5.png"}
                  alt="Amazon FBA"
                ></img>
              </div>
            </Slider>
          </Col>
          <Row>
            <Col lg={2} className="m-auto">
              <GetStarted
                buttonText="Get Started"
                buttonClass="getStarted-btn"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
