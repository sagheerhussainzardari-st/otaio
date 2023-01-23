import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Link from 'next/link';
const LeadGenerationProcess = () => {
   return (
      <div>
         <Container>
            <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
               <div className="StartUp">
                  <span className="BgText">Process</span>
                  <div className="OurServicesHeading">
                     
                        <h2>Lead Generation</h2>
                     
                     <p>
                        We believe in making your <Link href="/creative-design-packages">brand a client-attraction package</Link>. This is achieved with a scalable and robust technique that produces results like no other.
                     </p>
                  </div>
               </div>
            </Col>
            <div className="WhyChooseUs">
               <img className="w-100 processImg" src={"/Assets/Services/AppDevelopment/AppDevelopmenimg02.png"} alt="affordable logo design packages"></img>
               <Row className="mobile-view">
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon01.png"} alt="content creation"></img>
                           <p><b>Brief</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Brain Storming</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon14.png"} alt="Design Agency"></img>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon02.png"} alt="seo outsourcing"></img>
                           <p><b>Campaign Idea</b></p>
                        </Col>
                     </Card>
                  </Col>

                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Ad Development</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon15.png"} alt="App development Company"></img>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon04.png"} alt="Ios App Development"></img>
                           <p><b>Campaign Design</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon10.png"} alt="AppDevelopment10"></img>
                           <p><b>Execution</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Optimization</b></p>
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

export default LeadGenerationProcess