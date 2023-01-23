import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Fade, Bounce } from 'react-reveal';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const SafeCyberSecurity = () => {
   return (
      <div>
         <div className="OutsourcingBusiness">
            <Container>
               <Row>
                  <Col lg={6}>
                     
                        <div className="Business">
                           <svg width="100%">
                              <defs>
                                 <linearGradient id="gradient" y1="0" y2="1">
                                    <stop stopColor="#054084" offset="0" />
                                    <stop stopColor="#054084" offset="1" />
                                 </linearGradient>
                              </defs>
                              <g>
                                 <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Safe</text>
                              </g>
                           </svg>
                           <h2>Cyber Security</h2>
                           <p>Secure your Data</p>
                        </div>
                     
                  </Col>
                  <Col lg={6} className="m-auto text-white">
                     
                        <div className="Business">
                           <h5><i><b>A Multi-faceted approach for optimal security</b></i></h5>
                           <h6>
                              Our internet security team offers cybersecurity consulting services that thoroughly examine your firm’s threat landscape, ensuring your <Link href='/digital-startup'>IT infrastructure is constantly secure</Link> and safe against all forms of attacks. To inherently scrutinize and enhance your security outlook, we provide malware analysis, penetration testing, threat management, network security monitoring, among others.
                              <ShowMoreContent>
                                 <span>
                                    What’s more secure than a company that <Link href='/nft-staking-platform-development'>offers decade-long experience</Link> packed with stronghold cyber security services that <Link href='/call-center-outsourcing'>keep our customers stress-free</Link> and always believe in our seamless workflow. Everyone nowadays is looking for a secure network infrastructure that is unbreakable and perfectly aligned to the roots; with us you get the best of it.
                                 </span>
                              </ShowMoreContent>
                           </h6>
                        </div>
                     
                  </Col>
               </Row>

               <Row className="mt-5 pt-2">
                  <Col lg={4} className="m-auto text-white">
                     <div className="RocketUlOne">
                        {/* </Fade left> */}
                           <ul>
                              <li>
                                 Malware
                              </li>
                              <li>
                                 Phishing
                              </li>
                              <li>
                                 Denial-of-Service (DOS)
                              </li>
                           </ul>
                        
                     </div>
                  </Col>
                  <Col lg={3} className="m-auto">
                    
                        <img className="w-100" src={"/Assets/Services/CyberSecurity/CyberSecurityimg01.png"} alt="CyberSecurityimg01"></img>
                     
                  </Col>
                  <Col lg={4} className="m-auto text-white">
                     <div className="RocketUlTwo">
                        {/* </Fade right> */}
                           <ul>
                              <li>
                                 Man-in-the-Middle (MitM) Attack
                              </li>
                              <li>
                                 Zero-day attack
                              </li>
                           </ul>
                        
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
   )
}

export default SafeCyberSecurity