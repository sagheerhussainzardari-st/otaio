import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Bounce } from "react-reveal";
import GetStarted from "../Buttons/GetStarted";
const FBAServices = () => {
  return (
    <div className="py-5 FBAserveSec">
      <Container>
        <Col lg={8} className="m-auto text-center">
          <div className="StartUp">
            <span className="BgText">Our Services</span>
            <div className="OurServicesHeading FBAServe">
              <h2>
                <b>What do we do for our clients?</b>
              </h2>
            </div>
          </div>
        </Col>
        <Row className="mt-5">
          <Col lg={4} className="m-auto">
            <img
              className="w-100"
              src={"/Assets/AmazonFBA/onboard.png"}
              alt="Onboarding"
            ></img>
          </Col>
          <Col lg={6}>
            <div className="planServicesSvg">
              <svg width="100%">
                <defs>
                  <linearGradient id="gradient" y1="0" y2="1">
                    <stop stopColor="#054084" offset="0" />
                    <stop stopColor="#054084" offset="1" />
                  </linearGradient>
                </defs>
                <g>
                  <text
                    id="text"
                    y="103"
                    strokeWidth="1"
                    stroke="url(#gradient)"
                    fill="rgb(0, 0, 0,0.2)"
                  >
                    Service
                  </text>
                </g>
              </svg>
              <h2>Onboarding</h2>
              <p>
                We ensure your Amazon store is set up and ready to be
                successfully automated whether it is brand new or an aged store
                transferred to our management team. We set up contracts with the
                nation's top brands and get your inventory set up in 30-60 days
                during the onboarding process.
              </p>
            </div>
            <Col lg={4}>
              <GetStarted
                buttonText="Get Started"
                buttonClass="getStarted-btn"
              />
            </Col>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={6}>
            <div className="planServicesSvg">
              <svg width="100%">
                <defs>
                  <linearGradient id="gradient" y1="0" y2="1">
                    <stop stopColor="#054084" offset="0" />
                    <stop stopColor="#054084" offset="1" />
                  </linearGradient>
                </defs>
                <g>
                  <text
                    id="text"
                    y="103"
                    strokeWidth="1"
                    stroke="url(#gradient)"
                    fill="rgb(0, 0, 0,0.2)"
                  >
                    Service
                  </text>
                </g>
              </svg>
              <h2>Full Management</h2>
              <p>
                Our dedicated team of Amazon selling experts monitors and scales
                your Amazon store to new heights. We manage your products,
                inventory, sales, customer service & store entirely. We have
                several Automation clients generating 6-7 figures in revenue
                annually.
              </p>
            </div>
            <Col lg={4}>
              <GetStarted
                buttonText="Get Started"
                buttonClass="getStarted-btn"
              />
            </Col>
          </Col>
          <Col lg={5} className="ms-auto">
            <img
              className="w-50"
              src={"/Assets/AmazonFBA/full-management.png"}
              alt="Full Management"
            ></img>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={4} className="m-auto">
            <img
              className="w-100"
              src={"/Assets/AmazonFBA/generate-revenue.png"}
              alt="Generate Revenue"
            ></img>
          </Col>
          <Col lg={6}>
            <div className="planServicesSvg">
              <svg width="100%">
                <defs>
                  <linearGradient id="gradient" y1="0" y2="1">
                    <stop stopColor="#054084" offset="0" />
                    <stop stopColor="#054084" offset="1" />
                  </linearGradient>
                </defs>
                <g>
                  <text
                    id="text"
                    y="103"
                    strokeWidth="1"
                    stroke="url(#gradient)"
                    fill="rgb(0, 0, 0,0.2)"
                  >
                    Service
                  </text>
                </g>
              </svg>
              <h2>Generate Revenue</h2>
              <p>
                The purpose of an Amazon Automation business is to earn passive
                income without lifting a finger. This is what our team does for
                clients while targeting a 15%-25% profit margin.
              </p>
            </div>
            <Col lg={4}>
              <GetStarted
                buttonText="Get Started"
                buttonClass="getStarted-btn"
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FBAServices;
