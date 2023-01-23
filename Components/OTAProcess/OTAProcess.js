import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import GetStarted from '../Buttons/GetStarted';

const OTAProcess = () => {
   return (
      <div>
         <div>
            <div className="howWeWork">
               <Container>
                  <div className="howWeWorkBanner">
                     <Row>
                        <Col></Col>
                     </Row>
                     <Row>
                        <Col lg={6} className="m-auto">
                           <div className="line02" data-aos="flip-up" data-aos-duration="1200">
                              <img className="w-100" src={'/Assets/HomeAssets/BannerThreeLine2.png'} decoding="async" alt="benefits to kickstart your business"></img>
                           </div>
                        </Col>
                        <Col lg={3} className="position-relative m-auto">
                           <div className="Mobile" data-aos="flip-left" data-aos-duration="700">
                              <img className="w-100" src={"/Assets/HomeAssets/BannerThreeMobile.png"} decoding="async" alt="our outsourcing program"></img>
                           </div>
                        </Col>
                        <Col lg={2} className="m-auto mt-0">
                           <div className="line01" data-aos="flip-right" data-aos-duration="1000">
                              <img className="w-100" src={"/Assets/HomeAssets/BannerThreeLine1.png"} decoding="async" alt="Partner with us today"></img>
                           </div>
                        </Col>
                     </Row>
                     <Row>
                        <Col lg={5}>
                           <div className="process" data-aos="flip-up">
                              <span className="spanProcess">Process</span>
                              <h2><span><i className="fas fa-long-arrow-alt-right text-primary"></i></span> How it works<span>?</span></h2>
                              <h6>Set of actions to partake</h6>
                              <p>
                                 Partner with us today to our outsourcing program and reap limitless benefits to kickstart your business to the path to success. Just follow these steps to get started:
                              </p>
                           </div>
                        </Col>
                     </Row>
                     <Row>
                        <Col lg={3}>
                           <div className="line03" data-aos="flip-left" data-aos-duration="1000">
                              <img className="w-100 m-auto ms-4" src={"/Assets/HomeAssets/BannerThreeLine3.png"} decoding="async" alt='Elevate your brand'></img>
                           </div>
                        </Col>
                        <Col lg={3} className="m-auto">
                           <div className="process01 mt-5 pt-4" data-aos="zoom-out" data-aos-duration="1000">
                              <Row>
                                 <Col lg={6} className="m-auto col-8">
                                    <h2>01</h2>
                                    <h6>Sign-UP</h6>
                                    <p className="text-muted">Register your free account on our Client Portal.</p>
                                 </Col>
                                 <Col lg={6} className="col-4">
                                    <img className="w-100" src={"/Assets/HomeAssets/ProcessOneBg.png"} decoding="async" alt='creative content'></img>
                                 </Col>
                              </Row>
                           </div>
                        </Col>
                        <Col lg={3} className="m-auto">
                           <div className="process02 mt-5 pt-4" data-aos="zoom-in" data-aos-duration="1200">
                              <Row>
                                 <Col lg={6} className="m-auto col-8">
                                    <h2>02</h2>
                                    <h6>Create Project</h6>
                                    <p className="text-muted">Provide brief and basic information of your project.</p>
                                 </Col>
                                 <Col lg={6} className="col-4">
                                    <img className="w-100" src={"/Assets/HomeAssets/ProcessTwoBg.png"} decoding="async" alt='Outsource Any Of Your Project To Us'></img>
                                 </Col>
                              </Row>
                           </div>
                        </Col>
                        <Col lg={3} className="m-auto">
                           <div className="process01 mt-5 pt-4" data-aos="zoom-out" data-aos-duration="1400">
                              <Row>
                                 <Col lg={6} className="m-auto col-8">
                                    <h2>03</h2>
                                    <h6>Get Done</h6>
                                    <p className="text-muted">We will deliver your work in the shortest period of time.</p>
                                 </Col>
                                 <Col lg={6} className="col-4">
                                    <img className="w-100" src={"/Assets/HomeAssets/ProcessThreeBg.png"} decoding="async" alt='deliver your work'></img>
                                 </Col>
                              </Row>
                           </div>
                        </Col>
                     </Row>
                     <Col lg={3} className='m-auto mt-5'>
                        <GetStarted buttonText={` Get Started`} buttonClass={`getStarted-btn`} />
                     </Col>
                  </div>
               </Container>
            </div>
         </div>
      </div>
   )
}

export default OTAProcess