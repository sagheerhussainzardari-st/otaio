import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Zoom } from 'react-reveal';
import Link from 'next/link'
import ShowMoreContent from './../ShowMoreText/ShowMoreContent';

const WebDevelopmentProcess = () => {
   return (
      <div>
         <Container>
            <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
               <div className="StartUp">
                  <span className="BgText">Process</span>
                  <div className="OurServicesHeading">
                     
                        <h2>Web Development</h2>
                     
                     <p>
                        For perfect execution of custom web <Link href="/ios-android-app-development">application development</Link>, we develop and undergo a concrete plan and strategy based exclusively on your needs and requirements.
                        <ShowMoreContent>
                           <span>
                           We set up something based on your <Link href="/seo-services">affordable web needs and targets</Link>. The uncanny web designing packages that we offer and our expert development team are an unfair advantage over your competitors. Our highly dedicated development team provides the most outstanding outsource web development services in the market.a small business aiming to grow,
                           </span>
                        </ShowMoreContent>
                     </p>
                  </div>
               </div>
            </Col>
            <div className="WhyChooseUs">
               <img className="w-100 processImg" src={"/Assets/Services/WebDevelopment/WebDevelopmentImage02.png"} alt="web designing packages"></img>
               <Row className="mobile-view">
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon01.png"} alt="web development packages"></img>
                           <p><b>Brief</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Mock-Up</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon02.png"} alt="affordable website development"></img>
                        </Col>
                     </Card>
                  </Col>

                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon03.png"} alt="custom web development services"></img>
                           <p><b>Design Approval</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Development</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon04.png"} alt="custom web application development"></img>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon10.png"} alt="outsource web development services"></img>
                           <p><b>Testing</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Delivery</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon09.png"} alt="affordable custom web design"></img>
                        </Col>
                     </Card>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   )
}

export default WebDevelopmentProcess