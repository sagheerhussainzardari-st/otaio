import React from 'react'
import { Reveal,Zoom } from 'react-reveal'
import { Card, Col, Container, Row } from 'react-bootstrap'

const VideoDevelopmentProcess = () => {
   return (
      <div>
         <Container>
            <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
               <div className="StartUp">
                  <span className="BgText">Process</span>
                  <div className="OurServicesHeading">
                     
                        <h2>Video Animation</h2>
                     
                     <Reveal>
                        <p>
                           Whether we are outsourcing explainer or corporate video production service, we follow a simple yet highly efficient animation production process behind it:
                        </p>
                     </Reveal>
                  </div>
               </div>
            </Col>
            <div className="WhyChooseUs">
               <img className="w-100 processImg" src={"/Assets/Services/VideoDevelopment/VideoAnimationImg02.png"} alt="VideoDevelopmentImage02"></img>
               <Row className="mobile-view">
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon01.png"} alt="VideoDevelopmentImg01"></img>
                           <p><b>Brief</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Script</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon21.png"} alt="VideoDevelopmentImg02"></img>
                        </Col>
                     </Card>
                  </Col>

                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon02.png"} alt="VideoDevelopmentImg03"></img>
                           <p><b>Theme</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Storyboard</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon20.png"} alt="VideoDevelopmentImg04"></img>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon19.png"} alt="VideoDevelopmentImg09"></img>
                           <p><b>Illustration</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Animation</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon18.png"} alt="VideoDevelopmentImg10"></img>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon22.png"} alt="VideoDevelopmentImg11"></img>
                           <p><b>Voice Over</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Delivery</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon09.png"} alt="VideoDevelopmentImg12"></img>
                        </Col>
                     </Card>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   )
}

export default VideoDevelopmentProcess