import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { StrategyAndRiskManagement } from '../../utilities/CyberSecurityServicesDescription';
import Link from 'next/link'
import GetStarted from '../Buttons/GetStarted';
import OurVideo from './../OurVideo/OurVideo';
import Wrapper from '../../HigherOrderWrappers/Wrapper/Wrapper';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent'
const CyberSecurityStrategyAndRiskManagement = () => {
   return (
      <div className="mt-5 pt-5">
         <Container>
            <Row>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span class="BgText">{StrategyAndRiskManagement.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{StrategyAndRiskManagement.title}</h2>
                              
                              
                                 <p>
                                    Assess your existing levels of security maturity and compliance status by identifying possible threats and <strong><Link href='/ios-android-app-development'>developing a customized</Link></strong> road map to troubleshoot those risks.
                                    <ShowMoreContent>
                                       <span>
                                       Yes, it’s possible to get superman-immune and well-guarded on all ends. With <Link href="/">OTA</Link>, you get the risk intelligence report that provides a clear picture of managing and securing your loose-ends with a strict lookout for anything that’s not part of the system completely shut out. We enforce a strict lockdown of your privacy, offering the safest strategy and risk management services.
                                       </span>
                                    </ShowMoreContent>
                                 </p>
                                 <Row>
                                    {StrategyAndRiskManagement.list.map((li, id) => {
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
                                 <GetStarted buttonClass={StrategyAndRiskManagement.button[1]} buttonText={StrategyAndRiskManagement.button[0]}></GetStarted>
                              </Col>
                           </ul>
                        </div>
                     </div>
                  
               </Col>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={
                           StrategyAndRiskManagement.StrategyAndRiskManagementImagePath
                        }
                        alt="cyber security consulting services"
                     ></img>
                  
               </Col>
            </Row>
         </Container>
         <Wrapper>
            <Container>
               <Row>
                  <Col lg={4}></Col>
                  <Col lg={6} className="m-auto">
                     <div className="watch">
                        <svg width="100%">
                           <defs>
                              <linearGradient id="gradient" y1="0" y2="1">
                                 <stop stopColor="#054084" offset="0" />
                                 <stop stopColor="#054084" offset="1" />
                              </linearGradient>
                           </defs>
                           <g>
                              <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Watch</text>
                           </g>
                        </svg>
                     </div>
                  </Col>
               </Row>
               <OurVideo />
            </Container>
         </Wrapper>
      </div>
   )
}

export default CyberSecurityStrategyAndRiskManagement