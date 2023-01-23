import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../../MainHeading/Heading';
import Slider from 'react-slick'
import GetStarted from '../../Buttons/GetStarted';
import { whiteLabelAgencyCarousalSetting } from '../../../utilities/slidersettings';
import OurVideo from '../../OurVideo/OurVideo';
import Wrapper from '../../../HigherOrderWrappers/Wrapper/Wrapper';

const WhiteLabelPackages = () => {
   return (
      <div>
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
                  <div className="whitelabeling-price-category mt-5">
                     {/* <Slider {...whiteLabelAgencyCarousalSetting}> */}
                        <div className="card PricingCard WhiteLabliblingSliderCards text-center">
                           <h3 className="mb-0"><span>USD $100</span></h3>
                           <h4><b>Web Development</b></h4>
                           <p>USD 100</p>
                        </div>
                        <div className="card PricingCard WhiteLabliblingSliderCards text-center">
                           <h3 className="mb-0"><span>USD $10/hour</span></h3>
                           <h4><b>App Development</b></h4>
                           <p>USD 10/hour</p>
                        </div>
                        <div className="card PricingCard WhiteLabliblingSliderCards text-center">
                           <h3 className="mb-0"><span>USD $150</span></h3>
                           <h4><b>Video Animation</b></h4>
                           <p>USD 150</p>
                        </div>
                        <div className="card PricingCard WhiteLabliblingSliderCards text-center">
                           <h3 className="mb-0"><span>USD $50</span></h3>
                           <h4><b>Logo Design</b></h4>
                           <p>USD 50</p>
                        </div>
                     {/* </Slider> */}
                  </div>
                  <Col className="m-auto pt-5 mt-4" lg={2}>
                     <GetStarted buttonText="Get Started" buttonClass="schedulecall btn btn-secondary text-light" />
                  </Col>
               </Container>
               <Container className="mt-5 pt-5">
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
      </div>
   )
}

export default WhiteLabelPackages