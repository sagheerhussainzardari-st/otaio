import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Bounce, Fade } from 'react-reveal';
import Wrapper from '../../../HigherOrderWrappers/Wrapper/Wrapper';
import ShowMoreContent from '../../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const LeadGenerationBanner2 = () => {
   return (
      <Wrapper>
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
                              <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Robust</text>
                           </g>
                        </svg>
                        <h2>Lead Generation</h2>
                     </div>
                  
               </Col>
               <Col lg={6} className="m-auto text-white">
                  
                     <div className="Business">
                        <h6><i>Growth-Focussed and Results-Driven: A gold-standard for strategy building!</i></h6>
                        <h6>
                           <span>We make use of the best strategies to <Link href="/digital-startup">get more clients and close multiple sales</Link>. The need to grow numbers and the hunger to boost your results require a proper channel. At OTA, you get an adequate runway through which you can flourish your sales goals with our unparalleled <strong>Facebook lead generation services.</strong> <Link href='/smart-contracts-development'>Improving your outcome</Link> sales has never been so easy with our <strong>PPC management services.</strong> For your desired results, we have just the right technique for you!</span>
                           <ShowMoreContent>
                              <span>
                                 Our PPC heroes work directly with you on a data-driven and results-proven strategy custom-made for your business with our uncanny <strong>google ads management services.</strong> We analyze both your <Link href="/seo-services">on-page and off-page aspects</Link> and formulate a key-point-targeting technique for <Link href="/ios-android-app-development">your online needs</Link>. Let’s get you a <strong>PPC lead generation</strong> strategy you can’t say no to. Don’t wait up; reach out to us today.
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
                              Creative Ad Copy
                           </li>
                           <li>
                              Low Cost-Per-Click
                           </li>
                           <li>
                              Superior Reach
                           </li>
                        </ul>
                     
                  </div>
               </Col>
               <Col lg={3} className="m-auto">
                 
                     <img className="w-100" src={"/Assets/Services/LeadGenaration/banner2.png"} alt="banner2 lead generation"></img>
                  
               </Col>
               <Col lg={4} className="m-auto text-white">
                  <div className="RocketUlTwo">
                     {/* </Fade right> */}
                        <ul>
                           <li>
                              Engaging Creatives
                           </li>
                           <li>
                              Audience Segmentation
                           </li>
                           <li>
                              Competition Analysis
                           </li>
                        </ul>
                     
                  </div>
               </Col>
            </Row>

         </Container>
      </Wrapper>
   )
}

export default LeadGenerationBanner2