import React from 'react'
import GetStarted from '../Buttons/GetStarted'
import OurVideo from '../OurVideo/OurVideo'
import { Col, Container, Row } from "react-bootstrap";
import Heading from './../MainHeading/Heading';
import Wrapper from '../../HigherOrderWrappers/Wrapper/Wrapper';
import DiscountedPrice from 'UI/DiscountedPrice/DiscountedPrice'

const ContentWritingPlans = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col lg={12} className="m-auto">
            <Heading
              Heading="Content Writing"
              tagline="Introducing Outsource To Asia new pricing packages."
            />
          </Col>
        </Row>
        <div>
          <div className="pt-3 pb-3">
            <div className="mt-5 row ">
              <div className="text-center col-lg-4 mb-5 m-auto">
                <div className="card PricingCard BrandFont pb-5 mb-1 pt-0 ActivePricingCard">
                  <div className="PackageAndPricing">
                    <h4>Article/Blog Writing</h4>
                    <h3>
                      <span>USD</span><DiscountedPrice price="25"/> <small>/ Page</small>{" "}
                    </h3>
                  </div>
                  <ul>
                    <li>Engaging, Product-Focused Content</li>
                    <li>72 Hours Turnaround Time</li>
                    <li>Professional Marketing Campaigns</li>
                    <li>100% Plagiarism Free</li>
                    <li>Unlimited Revisions</li>
                    <li>Written On Specific Keywords</li>
                    <li>Proofing & Editing By Experts</li>
                  </ul>
                  <GetStarted buttonText={"Sign-Up"} buttonClass="PricingApplyNowBtn w-100 p-2" />
                </div>
              </div>
              <div className="text-center col-lg-4 mb-5 m-auto pb">
                <div className="card PricingCard BrandFont pt-0 ">
                  <div className="PackageAndPricing">
                    <h4>Web Page Copy</h4>
                    <h3>
                      <span>USD</span><DiscountedPrice price="50"/> <small>/ Page</small>{" "}
                    </h3>
                  </div>
                  <ul>
                    <li>Product-Focused Content</li>
                    <li>72 Hours Turnaround Time</li>
                    <li>Marketing Campaigns</li>
                    <li>100% Plagiarism Free</li>
                    <li>Unlimited Revisions</li>
                    <li>Copyrights</li>
                    <li>According To Exact Content</li>
                    <li>Proofing & Editing By Experts</li>
                  </ul>
                  <GetStarted buttonText={"Sign-Up"} buttonClass="PricingApplyNowBtn w-100 p-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row className="mt-5">
          <Col lg={4}></Col>
          <Col lg={6} className="m-auto">
            <div className="watch">
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
                    Watch
                  </text>
                </g>
              </svg>
            </div>
          </Col>
        </Row>
        <OurVideo />
      </Container>
    </Wrapper>
  )
}

export default ContentWritingPlans