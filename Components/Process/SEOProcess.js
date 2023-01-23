import Link from 'next/link';
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';

const SEOProcess = () => {
   return (
      <div>
         <Container>
            <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
               <div className="StartUp">
                  <span className="BgText">Process</span>
                  <div className="OurServicesHeading">
                     
                        <h2>Search Engine Optimization</h2>
                     
                     <p>
                        To optimize your <Link href="/web-development-services">web presence and visibility</Link>, we facilitate you with a tailor-made win-win strategy that counts.
                     </p>
                  </div>
               </div>
            </Col>
            <div className="WhyChooseUs">
               <img className="w-100 processImg" src={"/Assets/Services/AppDevelopment/AppDevelopmenimg02.png"} alt="seo outsourcing"></img>
               <Row className="mobile-view">
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon01.png"} alt="affordable local seo services"></img>
                           <p><b>Brief</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Keyword Search</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon14.png"} alt="seo services for local business"></img>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon02.png"} alt="affordable seo services"></img>
                           <p><b>Seo Research</b></p>
                        </Col>
                     </Card>
                  </Col>

                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>On Page Optimization</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon15.png"} alt="Outsource seo services"></img>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon04.png"} alt="best seo services"></img>
                           <p><b>Off Page Optimization</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon10.png"} alt="best seo services usa"></img>
                           <p><b>Reporting</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Optimization</b></p>
                           <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon16.png"} alt="seo services usa"></img>
                        </Col>
                     </Card>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   )
}

export default SEOProcess