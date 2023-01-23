import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import Heading from './../MainHeading/Heading';
import GetStarted from './../Buttons/GetStarted';
import OurVideo from './../OurVideo/OurVideo';
import Wrapper from '../../HigherOrderWrappers/Wrapper/Wrapper';

const AppDevelopmentPlansPricing = () => {
   return (
      <div>
         <Wrapper>
            <Container>
               <Row>
                  <Col lg={12} className="m-auto">
                     <Heading Heading="App Development" tagline="Introducing Outsource To Asia new pricing packages." />
                  </Col>
               </Row>
               <div className="pt-5 pb-5">
                  <Row>
                     <Col lg={4}>
                        <Card className="TabsCard text-center">
                           <Card.Body className="p-0">
                              <div className="PricingCardImg">
                                 <Col lg={10} className="m-auto p-3">
                                    <Card.Title>
                                       <img loading='lazy' className="w-100" src={"/Assets/Pricing/PricingCardImg01.png"} alt='PricingCardImg01'></img>
                                    </Card.Title>
                                 </Col>
                              </div>
                              <div className="cardText pt-5 pb-5">
                                 <h4>
                                    USD <span className="dollar">$</span>10-15
                                    <span className="hour">/hour</span>
                                 </h4>
                                 <h5 className="text-light">
                                    <b>Android Development</b>
                                 </h5>
                                 <GetStarted buttonText='Sign-Up' buttonClass='PricingApplyNowBtn w-100 p-2' />

                              </div>
                           </Card.Body>
                        </Card>
                     </Col>
                     <Col lg={4}>
                        <Card className="TabsCard TabsCardCenter text-center">
                           <Card.Body className="p-0">
                              <div className="PricingCardImg">
                                 <Col lg={10} className="m-auto p-3">
                                    <Card.Title>
                                       <img loading='lazy' className="w-100" src={"/Assets/Pricing/PricingCardImg02.png"} alt='PricingCardImg02'></img>
                                    </Card.Title>
                                 </Col>
                              </div>
                              <div className="centerCard cardText pt-5 pb-5">
                                 <h4>
                                    USD <span className="dollar">$</span>10-15
                                    <span className="hour">/hour</span>
                                 </h4>
                                 <h5 className="text-light">
                                    <b>IOS Development</b>
                                 </h5>
                                 <GetStarted buttonText='Sign-Up' buttonClass='PricingApplyNowBtn w-100 p-2' />

                              </div>
                           </Card.Body>
                        </Card>
                     </Col>
                     <Col lg={4}>
                        <Card className="TabsCard text-center">
                           <Card.Body className="p-0">
                              <div className="PricingCardImg">
                                 <Col lg={10} className="m-auto p-3">
                                    <Card.Title>
                                       <img loading='lazy' className="w-100" src={"/Assets/Pricing/PricingCardImg03.png"} alt='PricingCardImg03'></img>
                                    </Card.Title>
                                 </Col>
                              </div>
                              <div className="cardText pt-5 pb-5">
                                 <h4>
                                    USD <span className="dollar">$</span>20-25
                                    <span className="hour">/hour</span>
                                 </h4>
                                 <h5 className="text-light">
                                    <b>Game Development</b>
                                 </h5>
                                 <GetStarted buttonText='Sign-Up' buttonClass='PricingApplyNowBtn w-100 p-2' />

                              </div>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
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

export default AppDevelopmentPlansPricing