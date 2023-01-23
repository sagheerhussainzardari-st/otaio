import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const CreativeDesigningProcess = () => {
   return (
      <div>
         <div>
            <Container>
               <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
                  <div className="StartUp">
                     <span className="BgText">Process</span>
                     <div className="OurServicesHeading">
                        
                           <h2>Creative Designing</h2>
                        
                        <p>
                           Our <strong>branding service</strong> enables <a href='https://blog.marketresearch.com/6-ways-to-differentiate-your-business-from-the-competition'>your business to distinguish itself and convey ideas</a> through any medium. We consolidate strategy, creativity, and innovation to assist brands with developing a cohesive <Link href="/web-development-services">digital presence through a streamlined process.</Link>
                           <ShowMoreContent>
                              <p>
                              Being a leading creative design agency, we have a clear agenda set out front, welcoming all our clients on board with a vision to fly together and be more cohesive in terms of ideas and strategy alignment offering the most affordable logo design packages in the market.
                              </p>
                           </ShowMoreContent>

                        </p>
                     </div>
                  </div>
               </Col>
               <div className="WhyChooseUs">
                  <img className="w-100 processImg" src={"/Assets/Services/CreativeDesign/creative_design_agency.png"} alt="creative design agency"></img>
                  <Row className="mobile-view">
                     <Col>
                        <Card className="WhyChooseUSCards text-dark">
                           <Col lg={8} className="m-auto text-center p-0">
                              <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon01.png"} alt="creative design"></img>
                              <p><b>Brief</b></p>
                           </Col>
                        </Card>
                     </Col>
                     <Col>
                        <Card className="WhyChooseUSCards text-dark">
                           <Col lg={8} className="m-auto text-center p-0">
                              <p><b>Mock-Up</b></p>
                              <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon02.png"} alt="logo design packages"></img>
                           </Col>
                        </Card>
                     </Col>

                     <Col>
                        <Card className="WhyChooseUSCards text-dark">
                           <Col lg={8} className="m-auto text-center p-0">
                              <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon03.png"} alt="design agency"></img>
                              <p><b>Design Approval</b></p>
                           </Col>
                        </Card>
                     </Col>
                     <Col>
                        <Card className="WhyChooseUSCards text-dark">
                           <Col lg={8} className="m-auto text-center p-0">
                              <p><b>Finalize</b></p>
                              <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon04.png"} alt="creative agency"></img>
                           </Col>
                        </Card>
                     </Col>
                     <Col>
                        <Card className="WhyChooseUSCards text-dark">
                           <Col lg={8} className="m-auto text-center p-0">
                              <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon05.png"} alt="logo packages"></img>
                              <p><b>Delivery</b></p>
                           </Col>
                        </Card>
                     </Col>
                  </Row>
               </div>
            </Container>
         </div>
      </div>
   )
}

export default CreativeDesigningProcess