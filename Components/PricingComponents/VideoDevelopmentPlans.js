import React from 'react'
import OurVideo from './../OurVideo/OurVideo';
import { Col, Container, Row } from "react-bootstrap";
import Heading from './../MainHeading/Heading';
import { VideoDevelopmentPricing } from './../../utilities/VideoDevelopmentPricing';
import GetStarted from '../Buttons/GetStarted';
import Wrapper from '../../HigherOrderWrappers/Wrapper/Wrapper';
import DiscountedPrice from 'UI/DiscountedPrice/DiscountedPrice'

const VideoDevelopmentPlans = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col lg={12} className="m-auto">
            <Heading
              Heading="Video Animation"
              tagline="Introducing Outsource To Asia new pricing packages."
            />
          </Col>
        </Row>
        <Row className="mt-5">
          {VideoDevelopmentPricing.map(
            ({ type, pricing, services, classes, applyNowButton }) => {
              return (
                <Col lg={4} className="text-center mb-5">
                  <div className={`card PricingCard pt-0 ${classes}`}>
                    <div className="PackageAndPricing">
                      <h4>{type}</h4>
                      <h3>
                        <span>USD</span>
                        <DiscountedPrice price={pricing.replaceAll("$","")}/> <span>/30 sec</span>{" "}
                      </h3>
                    </div>
                    <ul>
                      {services.map((service) => {
                        return <li>{service}</li>;
                      })}
                    </ul>
                    <GetStarted buttonClass={applyNowButton.buttonStyling} buttonText={applyNowButton.buttonText} />
                  </div>
                </Col>
              );
            }
          )}
        </Row>
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

export default VideoDevelopmentPlans