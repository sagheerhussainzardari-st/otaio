import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Link from 'next/link'
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';

const AppDevelopmentProcess = () => {
   return (
      <div>
         <Container>
            <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
               <div className="StartUp">
                  <span className="BgText">Process</span>
                  <div className="OurServicesHeading">
                     
                        <h2>App Development</h2>
                     
                     <p>Our designers offer groundbreaking app development services by coordinating consistently into your project and conveying <Link href='/call-center-outsourcing'>remarkable experiences for your customers</Link>.
                        <ShowMoreContent>
                           <span>
                           A good app catches attention, but a great app breaks the internet; that is what we do for you. As a prominent android app development company, <Link href='/smart-contracts-development'>Our idea of a customer satisfaction</Link> game is when a customer is fully satisfied with our inventive and inspiring app design. <Link href="/">We are a well-known name in the outsourcing niche</Link>, and we strive to accomplish the same for your business.
                           </span>
                        </ShowMoreContent>
                     </p>
                  </div>
               </div>
            </Col>
            <div className="WhyChooseUs">
               <img className="w-100 processImg" src={"/Assets/Services/AppDevelopment/AppDevelopmenimg02.png"} alt="social content creation "></img>
               <Row className="mobile-view">
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon01.png"} alt="AppDevelopment01"></img>
                           <p><b>Brief</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Proposal</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon14.png"} alt="AppDevelopment02"></img>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon02.png"} alt="AppDevelopment03"></img>
                           <p><b>Wireframe</b></p>
                        </Col>
                     </Card>
                  </Col>

                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Mockup</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon15.png"} alt="AppDevelopment11"></img>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon04.png"} alt="AppDevelopment09"></img>
                           <p><b>Development</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon10.png"} alt="AppDevelopment10"></img>
                           <p><b>Testing</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Delivery</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon16.png"} alt="AppDevelopment12"></img>
                        </Col>
                     </Card>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   )
}

export default AppDevelopmentProcess