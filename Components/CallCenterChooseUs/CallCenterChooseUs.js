import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import Wrapper from '../../HigherOrderWrappers/Wrapper/Wrapper';
import Heading from './../MainHeading/Heading';
import OurVideo from './../OurVideo/OurVideo';
const CallCenterChooseUs = () => {
   const callCenter = ['Saving On Operational Costs', 'Efficiency And Time Saving', 'Flexibility And Diversity', 'Experienced Staff', 'Increased ROI']
   return (
      <div>
         <div>
            <Wrapper>
               <Container>
                  <Heading Heading="Why Choose Us?" tagline="With us you will get multiple benefits such as :" mainHeading="Choose" />

                  <div className="WhyChooseUs">
                     <img className="w-100 processImg" src={"/Assets/PlansAssets/CallCenter/CallCenterWhyChooseUsBg.jpg"} alt="video production company"></img>
                     <Row className="mobile-view">
                        {
                           [
                              { path: "/Assets/PlansAssets/CallCenter/icons/CallCenterIcon01.png", altTag: 'professional content writer' },
                              { path: "/Assets/PlansAssets/CallCenter/icons/CallCenterIcon02.png", altTag: 'content writing services' },
                              { path: "/Assets/PlansAssets/CallCenter/icons/CallCenterIcon03.png", altTag: 'blog writing services' },
                              { path: "/Assets/PlansAssets/CallCenter/icons/CallCenterIcon04.png", altTag: 'affordable seo packages' },
                              { path: "/Assets/PlansAssets/CallCenter/icons/CallCenterIcon05.png", altTag: 'Management Services' }
                           ]
                              .map(({path,altTag}, id) => {
                                 return (
                                    <Col className="for-mobile">
                                       <Card className="WhyChooseUSCards">
                                          <Col lg={8} className="m-auto text-center p-0">
                                             <img className="w-50 position-relative mb-4" src={path} alt={altTag}></img>
                                             <p><b>{callCenter[id]}</b></p>
                                          </Col>
                                       </Card>
                                    </Col>
                                 )
                              })
                        }
                     </Row>
                  </div>

               </Container>
               <Container>

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

export default CallCenterChooseUs