import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Bounce, Zoom } from "react-reveal";

const ResidualPartner = () => {
  return (
    <div>
      <div className="consultation ResidualPartner">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="consultationContent">
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
                      Partnered
                    </text>
                  </g>
                </svg>

                <h2 className="ps-0">Powered By</h2>
                <h6 className="mt-4 ps-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h6>
              </div>
            </Col>
            <Col lg={4} className="m-auto">
            <img className="w-100 position-relative mb-4" src={"/Assets/AmazonFBA/residualLogo.png"} alt="Residual E-Com"></img>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ResidualPartner;
