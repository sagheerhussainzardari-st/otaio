import React from 'react'
import OurVideo from './../OurVideo/OurVideo';
import { Container, Row, Col, Card } from 'react-bootstrap'
import One from './icons/CallCenterIcon01.png'
import Two from './icons/CallCenterIcon02.png'
import Three from './icons/CallCenterIcon03.png'
import Four from './icons/CallCenterIcon04.png'
import Five from './icons/CallCenterIcon05.png'
import Heading from './../MainHeading/Heading';
import Wrapper from '../../HigherOrderWrappers/Wrapper/Wrapper';
const WhyChooseUs = () => {
   const callCenter = ['Saving On Operational Costs', 'Efficiency And Time Saving', 'Flexibility And Diversity', 'Experienced Staff', 'Increased ROI']
   return (
      <Wrapper>
         <Container>
            <Heading Heading="Why Choose Us?" tagline="With us you will get multiple benefits such as :" mainTagLine="Choose" />

            <div className="WhyChooseUs">
               <img className="w-100 processImg" src={"/Assets/PlansAssets/CallCenter/CallCenterWhyChooseUsBg.jpg"} alt="Web Development Services"></img>
               <Row className="mobile-view">
                  {
                     React.Children.toArray(
                        [One, Two, Three, Four, Five].map((path, id) => {
                           return (
                              <Col className="for-mobile">
                                 <Card className="WhyChooseUSCards">
                                    <Col lg={8} className="m-auto text-center p-0">
                                       <img className="w-50 position-relative mb-4" src={path.src} alt="CallCenterIcon01"></img>

                                       <p><b>{callCenter[id]}</b></p>
                                    </Col>
                                 </Card>
                              </Col>
                           )
                        })
                     )
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
   )
}

export default WhyChooseUs