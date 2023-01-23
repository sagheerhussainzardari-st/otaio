import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Fade, Bounce } from 'react-reveal';
import ShowMoreContent from './../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const WebDevelopmentBranding = () => {
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
                           <h2>Web Development</h2>
                           <p>A Creative Branding Idea</p>
                        </div>
                     
                  </Col>
                  <Col lg={6} className="m-auto text-white">
                     
                        <div className="Business">
                           <h5>
                              <i>
                                 We don’t just build a website; We mold brands from the ground up.
                              </i>
                           </h5>
                           <h6>

                              We provide customer-centric end-to-end online <a href="/smart-contracts-development">solutions based on our vast domain experience</a>, technical skills, in-depth understanding of current market trends, and quality-driven delivery strategy. Our custom web design services and packages will launch your brand in the limelight, <Link href="/creative-design-packages">strengthening your brand identity</Link> and perception. Being a leading offshore web development firm catering with result-oriented and cost-competitive solutions across the globe, Outsource to Asia LLC offers a wide array of web-based digital solutions to enterprises-big or small, including:
                              <ShowMoreContent>
                                 <span>
                                    Our craft speaks for itself. We are highly skilled in producing the best quality web designing packages that define your brand image more compellingly. From start to finish, we use your brand identity to build a perception from a high-quality custom web design that clicks and impacts <Link href="/lead-generation-services">the target audience</Link>. The plan is to make people realize your brand’s worth and create demand as to why they need our custom web development services more. It’s necessary to start thinking about a brand’s success first and prioritize <Link href="/digital-startup">your company goals aligned with your brand goals.</Link>
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
                                 Basic Website
                              </li>
                              <li>
                                 Custom website
                              </li>
                              <li>
                                 E-commerce
                              </li>
                           </ul>
                        
                     </div>
                  </Col>
                  <Col lg={3} className="m-auto">
                     
                        <img className="w-100" src={"/Assets/Services/WebDevelopment/WebDevelopmentImage01.png"} alt="affordable web development" />
                     
                  </Col>
                  <Col lg={4} className="m-auto text-white">
                     <div className="RocketUlTwo">
                        {/* </Fade right> */}
                           <ul>
                              <li>
                                 Marketplace
                              </li>
                              <li>
                                 Responsive Website
                              </li>
                              <li>
                                 <Link href="/ios-android-app-development"><a className="text-light">B2B & B2C Portal</a></Link>
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

export default WebDevelopmentBranding