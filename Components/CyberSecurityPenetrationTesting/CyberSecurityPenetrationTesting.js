import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { PenetrationTestingService } from '../../utilities/CyberSecurityServicesDescription';
import Link from 'next/link'
import GetStarted from '../Buttons/GetStarted'
import ShowMoreContent from '../ShowMoreText/ShowMoreContent'
const CyberSecurityPenetrationTesting = () => {
   return (
      <div>
         <Container>
            <Row>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={PenetrationTestingService.PenetrationTestingImagePath}
                        alt="cyber security services"
                     ></img>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span class="BgText">{PenetrationTestingService.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{PenetrationTestingService.title}</h2>
                              
                              
                                 <p>
                                    Exploiting weaknesses and vulnerabilities in networks, <strong><Link href='/web-development-services'>web applications</Link></strong>, or an enterprise's entire IT infrastructure by taking the perspective of an outside intruder or an internal individual with malicious intent.
                                    <ShowMoreContent>
                                       <span>
                                          Keeping you at peace is our job, and we are pretty good at it. <Link href='/e-commerce-solutions'>There is no other option; we are strictly a no-compromise-on-quality</Link> cybersecurity service provider.
                                       </span>
                                    </ShowMoreContent>
                                 </p>
                                 <Row>
                                    {PenetrationTestingService.list.map((li, id) => {
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
                                 <GetStarted buttonClass={PenetrationTestingService.button[1]} buttonText={PenetrationTestingService.button[0]} />
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

export default CyberSecurityPenetrationTesting