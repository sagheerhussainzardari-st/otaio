import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';

const SocialMediaMarketingProcess = () => {
   return (
      <Container>
         <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
            <div className="StartUp">
               <span className="BgText">Process</span>
               <div className="OurServicesHeading">
                  
                     <h2>Social Media Marketing Process</h2>
                  
                  <p>
                     Building <a href='https://bevalcinsights.com/how-to-develop-an-roi-focused-social-media-strategy/'></a>strategies that address your ROI targets and inspire, we believe in long-term objectives and results.
                  </p>
               </div>
            </div>
         </Col>
         <div className="WhyChooseUs">
            <img className="w-100 processImg" src={"/Assets/Services/WebDevelopment/WebDevelopmentImage02.png"} alt="social media management services"></img>
            <Row className="mobile-view">
               <Col>
                  <Card className="WhyChooseUSCards text-dark">
                     <Col lg={8} className="m-auto text-center p-0">
                        <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon01.png"} alt="facebook page management"></img>
                        <p><b>Brief</b></p>
                     </Col>
                  </Card>
               </Col>
               <Col>
                  <Card className="WhyChooseUSCards text-dark">
                     <Col lg={8} className="m-auto text-center p-0">
                        <p><b>Targeting</b></p>
                        <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon11.png"} alt="facebook page management services"></img>
                     </Col>
                  </Card>
               </Col>

               <Col>
                  <Card className="WhyChooseUSCards text-dark">
                     <Col lg={8} className="m-auto text-center p-0">
                        <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon04.png"} alt="social media content creation services"></img>
                        <p><b>Ad Development</b></p>
                     </Col>
                  </Card>
               </Col>
               <Col>
                  <Card className="WhyChooseUSCards text-dark">
                     <Col lg={8} className="m-auto text-center p-0">
                        <p><b>Split Testing</b></p>
                        <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon03.png"} alt="social media content writing services"></img>
                     </Col>
                  </Card>
               </Col>
               <Col>
                  <Card className="WhyChooseUSCards text-dark">
                     <Col lg={8} className="m-auto text-center p-0">
                        <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon12.png"} alt="social media community management services"></img>
                        <p><b>Execution</b></p>
                     </Col>
                  </Card>
               </Col>
               <Col>
                  <Card className="WhyChooseUSCards text-dark">
                     <Col lg={8} className="m-auto text-center p-0">
                        <p><b>Reporting</b></p>
                        <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon09.png"} alt="instagram growth management service"></img>
                     </Col>
                  </Card>
               </Col>
            </Row>
         </div>
      </Container>
   )
}

export default SocialMediaMarketingProcess