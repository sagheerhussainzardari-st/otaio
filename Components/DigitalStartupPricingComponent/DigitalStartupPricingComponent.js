import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Heading from './../MainHeading/Heading';
import GetStarted from './../Buttons/GetStarted';
import { StartupPricing } from './../../utilities/DigitalStraupPricing';
import OurVideo from './../OurVideo/OurVideo';
import Wrapper from '../../HigherOrderWrappers/Wrapper/Wrapper';
const DigitalStartupPricingComponent = () => {
  return (
    <div className="DigitalStartupPricing">
      <Wrapper>
        <Container>
          <Row>
            <Col lg={12} className="m-auto text-center">
              <Heading
                Heading="Starting Prices"
                tagline="With us you will get multiple benefits such as :"
                mainTagLine="Pricing"
              />
            </Col>
          </Row>
          <Row className="mt-5">
            {StartupPricing.map(
              ({
                type,
                pricing,
                description,
                services,
                classes,
                applyNowButton,
              }, id) => {
                return (
                  <Col lg={4} className="text-center mb-5">
                    <div className={`card PricingCard ${classes}`}>
                      <div className="PackageAndPricing bg-transparent" style={{ minHeight: '30px', maxHeight: '30px' }}>
                        <h4>{type}</h4>
                      </div>
                      <h3>
                        {
                          id === 0 ?
                            <span>USD {pricing}</span> : <span>USD{pricing}</span>
                        }
                      </h3>
                      <div className="textBox">
                        <p>{description}</p>
                      </div>
                      <ul>
                        {services.map((service) => {
                          return <li>{service}</li>;
                        })}
                      </ul>
                      <GetStarted
                        buttonClass={applyNowButton.buttonStyling}
                        buttonText={applyNowButton.buttonText}

                      />

                    </div>
                  </Col>
                );
              }
            )}
          </Row>
          <Row>
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
                    <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Watch</text>
                  </g>
                </svg>
              </div>
            </Col>
          </Row>
          <OurVideo />
        </Container>
      </Wrapper>
    </div>
  )
}

export default DigitalStartupPricingComponent