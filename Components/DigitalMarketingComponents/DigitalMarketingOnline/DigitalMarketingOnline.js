import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Fade, Bounce } from 'react-reveal';
import Link from 'next/link'
import ShowMoreContent from '../../ShowMoreText/ShowMoreContent';
const DigitalMarketingOnline = () => {
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
                           <h2>Online Marketing</h2>
                        </div>
                     
                  </Col>
                  <Col lg={6} className="m-auto text-white">
                     
                        <div className="Business">
                           <h5><i>Target clients at the ideal time on the ideal platform</i></h5>
                           <h6>
                              At <Link href="/"><strong className="text-primary">OTA</strong></Link>, we comprehend that each of our customers is unique and requires diverse marketing plans. Hence, we give a wide scope of <strong>online digital marketing services</strong> to meet your requirements. In light of your requirements, we will foster a custom internet marketing plan and <Link href='/smart-contracts-development'>execute it to assist with further development</Link>. We need to guarantee that your business is effective, thus, we put a huge amount of effort into crafting a <Link href="/lead-generation-services">unique marketing package</Link>.
                              We keep it simple and subtle. Your brand is a spectrum of colors and idealistic wonders. With our best digital marketing services, we elevate it to become more loud and powerful.
                              <ShowMoreContent>
                                 <span>
                                    We are the digital marketing specialists your firm needs. Our vast collection of <strong>digital marketing campaigns</strong> presents a clear idea of the creative competence that we possess and bring to the table when you select one of our affordable digital marketing services. Let us nurture your brand to become a success.
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
                                 <Link href="/social-media-management">
                                    <span className="text-light">Social Media Marketing</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/seo-services">
                                    <span className="text-light">Search Engine Optimization</span>
                                 </Link>

                              </li>
                              <li>
                                 <Link href="/lead-generation-services">
                                    <span className="text-light">Pay-Per-Click Advertising</span>
                                 </Link>
                              </li>
                           </ul>
                        
                     </div>
                  </Col>
                  <Col lg={3} className="m-auto">
                    
                        <img className="w-100" src={'/Assets/Services/DigitalMarketing/DigitalMarketingImg01.png'} alt="online digital marketing services"/>
                     
                  </Col>
                  <Col lg={4} className="m-auto text-white">
                     <div className="RocketUlTwo">
                        {/* </Fade right> */}
                           <ul>
                              <li>
                                 Content Marketing.
                              </li>
                              <li>
                                 Email Marketing
                              </li>
                              <li>
                                 Lead Generation
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

export default DigitalMarketingOnline