import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';

const DigitalMarketingProcess = () => {
   return (
      <div>
         <Container>
            <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
               <div className="StartUp">
                  <span className="BgText">Process</span>
                  <div className="OurServicesHeading">
                     
                        <h2>Digital Marketing</h2>
                     
                     <p>
                        We convey profoundly customized digital marketing experiences through an agile channeled strategy.
                        <ShowMoreContent>Let’s narrate your brand journey through our immaculate digital marketing campaign model and make your brand ambitions a perceptive reality.</ShowMoreContent>
                     </p>
                  </div>
               </div>
            </Col>
            <div className="WhyChooseUs">
               <img className="w-100 processImg" src={"/Assets/Services/WebDevelopment/WebDevelopmentImage02.png"} alt="online digital marketing services"/>
               <Row className="mobile-view">
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon01.png"} alt="digital marketing services"/>
                           <p><b>Brief</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Targeting</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon11.png"} alt="digital marketing specialist"/>
                        </Col>
                     </Card>
                  </Col>

                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon04.png"} alt="digital marketing campaign"/>
                           <p><b>Ad Development</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Split Testing</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon03.png"} alt="digital marketing expert"/>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon12.png"} alt="digital marketing strategist"/>
                           <p><b>Execution</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Reporting</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon13.png"} alt="affordable digital marketing services"/>
                        </Col>
                     </Card>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   )
}

export default DigitalMarketingProcess