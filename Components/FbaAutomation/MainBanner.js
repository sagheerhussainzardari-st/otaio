import React from "react";
import { Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import BannerWrapper from "@/hor/BannerWrapper/BannerWrapper";
import GetStarted from "../Buttons/GetStarted";
import ShowMoreContent from "./../ShowMoreText/ShowMoreContent";

const WebDevelopmentMainBanner = () => {
  return (
    <BannerWrapper mainClass="CommonMainBanner FbaAutomationMainBanner">
      <Col lg={6} className="m-auto">
        <div className="Outsource mt-5 mb-5">
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
                amazon
              </text>
            </g>
          </svg>
          <h1>
            {/* <Fade top cascade> */}
            Get Your Own Automated Ecommerce Store
          </h1>
          <p>
            We manage and grow your Amazon FBA business for you entirely. Sit
            back, relax, and collect profits while we do the heavy lifting.
            {/* <ShowMoreContent>
                     <span>
                        If you are looking for affordable custom web designs that elevate your brand profile, be sure to give us a try. We believe in prospering together.
                     </span>
                  </ShowMoreContent> */}
          </p>
          <ul className="list-group heroListItem">
            <li className="text-white">
              <img
                src={"/Assets/Icons/icon02.png"}
                alt="Amazon FBA Automation"
              ></img>
              Complete Automated Business
            </li>
            <li className="text-white">
              <img
                src={"/Assets/Icons/icon02.png"}
                alt="Amazon FBA Automation"
              ></img>
              Recurring Passive Income
            </li>
            <li className="text-white">
              <img
                src={"/Assets/Icons/icon02.png"}
                alt="Amazon FBA Automation"
              ></img>
              New Age Investment
            </li>
          </ul>
          <Row>
            <Col lg={4}>
              <GetStarted
                buttonClass={"getStarted-btn"}
                buttonText={"Get Started"}
              />
            </Col>
          </Row>
        </div>
      </Col>
    </BannerWrapper>
  );
};

export default WebDevelopmentMainBanner;
