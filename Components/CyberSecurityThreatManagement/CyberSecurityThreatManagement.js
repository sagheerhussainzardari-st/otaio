import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { ThreatManagementService } from '../../utilities/CyberSecurityServicesDescription';
import GetStarted from '../Buttons/GetStarted';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
const CyberSecurityThreatManagement = () => {
   return (
      <div className="mt-5 pt-5">
         <Container>
            <Row>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span class="BgText">{ThreatManagementService.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{ThreatManagementService.title}</h2>
                              
                              
                                 <p>
                                    <b>{ThreatManagementService.description1}</b>
                                 </p>
                                 <p>
                                    Striving to support the governance, reporting, and reduction of information security risks through the implementation of cybersecurity risk management programs and initiatives, we realize failure is not an option in cyberspace by shielding against.
                                    <ShowMoreContent>
                                       <span>
                                       If there is a problem with your network security, you are with the wrong company. Shift to our boat today. We give you the most protective and shielded cyber security services experience. Simply put, with us, you get immune from everything.

                                       </span>
                                    </ShowMoreContent>
                                 </p>
                                 <Row>
                                    {ThreatManagementService.list.map((li, id) => {
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
                                 <GetStarted
                                    buttonClass={ThreatManagementService.button[1]}
                                    buttonText={ThreatManagementService.button[0]}
                                 />
                              </Col>
                           </ul>
                        </div>
                     </div>
                  
               </Col>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={ThreatManagementService.ThreatManagementServiceImagePath}
                        alt="malware analysis services"
                     ></img>
                  
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default CyberSecurityThreatManagement