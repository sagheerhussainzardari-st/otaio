import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import Heading from './../MainHeading/Heading';
import OurVideo from '../OurVideo/OurVideo';
import Wrapper from '../../HigherOrderWrappers/Wrapper/Wrapper';
import ResourceOutsourcingProcessPricingPackages from './ResourceOutsourcingProcessPricingPackages';

const ResourceOutsourcingProcess = () => {
   return (
      <div>
         <Wrapper>
            <Container>
               <ResourceOutsourcingProcessPricingPackages />
               <Heading Heading="How Does It Works?" tagline="It's as simple as we handle your resources!" mainHeading="Process" />
               <div className="WhyChooseUs">
                  <img className="w-100 processImg" src={"/Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessImg03.png"} alt="SEO Packages"></img>
                  <Row className="mobile-view">
                     <Col>
                        <Card className="WhyChooseUSCards">
                           <Col lg={8} className="m-auto text-center p-0">
                              <img className="w-50 position-relative mb-4" src={"/Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessIcon03.png"} alt="Local SEO"></img>
                              <p>
                                 <b>Select the Resources You Want Us To Help With!</b>
                              </p>
                           </Col>
                        </Card>
                     </Col>
                     <Col>
                        <Card className="WhyChooseUSCards">
                           <Col lg={8} className="m-auto text-center p-0">
                              <p><b>Provide Us A Little Detail About Your Organization</b></p>
                              <img className="w-50 position-relative mb-4" src={"/Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessIcon04.png"} alt="affordable custom web design"></img>
                           </Col>
                        </Card>
                     </Col>

                     <Col>
                        <Card className="WhyChooseUSCards">
                           <Col lg={8} className="m-auto text-center p-0">
                              <img className="w-50 position-relative mb-4" src={"/Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessIcon04.png"} alt="Affordable Website"></img>
                              <p><b>Schedule A Quick Meeting and Ola! You Are tOnboard!</b></p>
                           </Col>
                        </Card>
                     </Col>
                     <Col>
                        <Card className="WhyChooseUSCards">
                           <Col lg={8} className="m-auto text-center p-0">
                              <p><b>Enjoy the Growth of Your Organization</b></p>
                              <img className="w-50 position-relative mb-4" src={"/Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessIcon05.png"} alt="Web Design"></img>
                           </Col>
                        </Card>
                     </Col>
                  </Row>
               </div>
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
   )
}

export default ResourceOutsourcingProcess