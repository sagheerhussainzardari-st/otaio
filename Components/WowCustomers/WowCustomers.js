import React from 'react'
import GetStarted from '../Buttons/GetStarted';
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import Link from 'next/link'
import { BrandLogoDesign, MakeCustomersGo } from './../../utilities/CreativeDesignWowCustomers';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
const WowCustomers = () => {
   return (
      <div>
         <Container>
            <Row>
               <Col lg={4} className="m-auto">
                  
                     <div className="StartUp">
                        <span className="BgText">{MakeCustomersGo.heading}</span>
                        <Row className="OurServicesHeading">
                           <Col className="col-1"></Col>
                           <Col className="col-1 m-auto">
                              <i className="fas fa-long-arrow-alt-right text-primary"></i>
                           </Col>
                           <Col className="col-10">
                              
                                 <h2>{MakeCustomersGo.title}</h2>
                              
                           </Col>
                        </Row>
                     </div>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <h6>
                        <p>
                           In need of a <strong>stellar logo and <Link href='/web-development-services'>website design package </Link></strong> ? Let Outsource to Asia handle graphic designing for your brand through compelling, dazzling, and ornate graphics. Be it a logo or web design, print or digital media, our team creates vivid designs across platforms and mediums. We create professional, aesthetically pleasing,<strong> high-quality graphics for small to medium-sized businesses</strong> , with cost & time-saving solutions, plus a highly personalized experience for our clients.
                           <ShowMoreContent>
                              A logo is an important factor in representing a brand’s identity and aspirations. To have a good logo means a good depiction of your organizational image into a brand. With a wide range of affordable logo designs to choose from, our graphic designers are industry sharks that have years-long experience in creating and delivering the best-suited logo and web designs for your specific line of business/services.
                           </ShowMoreContent>
                        </p>
                     </h6>
                  
               </Col>
            </Row>
            <Row>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={BrandLogoDesign.DevelopBrandPersonaImagePath}
                        alt="creative design agency"
                     ></img>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span class="BgText">{BrandLogoDesign.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{BrandLogoDesign.title}</h2>
                              
                              
                                 <h6>
                                    We craft logos that live and breathe your brand sentiment and vision. An artistic masterpiece is more than just an interesting logo, it’s the combination of strategy, planning, market research, and experience. Our one-of-a-kind <strong>logo package</strong> is:
                                    <ShowMoreContent>
                                       Driving a visitor to trust and select your brand is an ultimate goal that we push to achieve by designing a custom logo that connects with your audience instantly and builds that trust. We are a creative design firm that offers the most budget-friendly custom logo design packages that strive to develop a logo that best showcases your brand and forms that rapid bond.
                                    </ShowMoreContent>
                                 </h6>
                                 <Row>
                                    {BrandLogoDesign.list.map((li, id) => {
                                       if (id < 4) {
                                          return (
                                             <Col lg={6}>
                                                <li>
                                                   <b>{li}</b>
                                                </li>
                                             </Col>
                                          );
                                       }
                                       return (
                                          <Col lg={6}>
                                             <li>
                                                <b>{li}</b>
                                             </li>
                                          </Col>
                                       );
                                    })}
                                 </Row>
                              
                              <Col lg="3">
                                 <GetStarted buttonText={BrandLogoDesign.button[0]} buttonClass={`${BrandLogoDesign.button[1]} `} ></GetStarted>
                              </Col>
                           </ul>
                        </div>
                     </div>
                  
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default WowCustomers