import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Fade, Bounce } from 'react-reveal';
import Link from 'next/link'
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
const DevelopedCustomApp = () => {
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
                                 <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Custom</text>
                              </g>
                           </svg>
                           <h2>Application Development</h2>
                        </div>
                     
                  </Col>
                  <Col lg={6} className="m-auto text-white">
                     
                        <div className="Business">
                           <h5>
                              <i>
                                 Assisting you to find mobility with innovation.
                              </i>
                           </h5>
                           <h6>
                              Without a doubt, app development has the <Link href='/e-commerce-solutions'>potential to determine the fate of your business.</Link> From development to optimization, OTA is your all-in-one outsourcing app development partner. <Link href="/creative-design-packages">We design and create your adaptable</Link> application from concept to completion, integrating the new product into your framework and scaling up as needed.
                              <ShowMoreContent>
                                 <span>
                                    <Link href="/about-us">We are your one-stop solution</Link> for all outsource app development needs. In the business of providing high-performance android app development services that create an impact and meet your business needs. Every company needs a <a href='https://tech.co/news/3-foolproof-tips-designing-mobile-app-2015-03'>foolproof app design</a> that brings together the brand values and the company image fused as one.
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
                                 Android Apps
                              </li>
                              <li>
                                 iOS Apps
                              </li>
                              <li>
                                 Web Apps
                              </li>
                           </ul>
                        
                     </div>
                  </Col>
                  <Col lg={3} className="m-auto">
                    
                        <img className="w-100" src={"/Assets/Services/AppDevelopment/AppDevelopmenimg01.png"} alt="AppDevelopmentImg01"></img>
                     
                  </Col>
                  <Col lg={4} className="m-auto text-white">
                     <div className="RocketUlTwo">
                        {/* </Fade right> */}
                           <ul>
                              <li>
                                 <Link href="/social-media-management"><a className="text-light">Facebook Apps</a></Link>
                              </li>
                              <li>
                                 Game Apps
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

export default DevelopedCustomApp