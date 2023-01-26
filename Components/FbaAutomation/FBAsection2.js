import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GetStarted from "../Buttons/GetStarted";
import Video from '../Video/Video.js'
import { Bounce, Fade } from "react-reveal";
import ShowMoreContent from "@/components/ShowMoreText/ShowMoreContent";
const FBASection2 = () => {
  return (
    <div className="OutsourcingBusiness">
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            <div className="Business text-center svgCenter">
              <svg width="100%" className="text-center ms-5">
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
                    About Us
                  </text>
                </g>
              </svg>
              <h2>Amazon FBA Automation</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="m-auto text-white">
            <div className="Business text-center consultationContent">
              <h5 className="mt-0 ">
                <i>
                  <strong>
                    Managed By Outsource to Asia, Backed By Amazon
                  </strong>
                </i>
              </h5>
              <h6>
                <p>
                  Trust OTA to manage your FBA automation needs while you focus
                  on growing your business, and we will provide you with
                  competitive Amazon FBA automated pricing. We handle all of the
                  heavy liftings of automated FBA so you can focus on what truly
                  matters: operating a profitable business!
                </p>
              </h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} className="my-3 m-auto">
            <img className="m-auto w-100"
                src={"/Assets/AmazonFBA/videoBanner.png"}
                alt="Amazon FBA Automation"
              ></img>
          </Col>
        </Row>
        <Row>
          <Col lg={2} className="m-auto">
            <GetStarted
              buttonClass={"getStarted-btn"}
              buttonText={"Get Started"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FBASection2;
