import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Fade, Bounce } from 'react-reveal';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const VideoDevelopmentOnline = () => {
   return (
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
                              <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Creative</text>
                           </g>
                        </svg>
                        <h2>Video Animation</h2>
                     </div>
                  
               </Col>
               <Col lg={6} className="m-auto text-white">
                  
                     <div className="Business">
                        <h5>
                           <i>
                              Your Emotions In Motion
                           </i>
                        </h5>
                        <h6>
                           Everybody has a story to tell. <Link href='/e-commerce-solutions'>Yours is considerably more remarkable</Link> than you know. Your purchasers need to know you. They need to see your excellence. Our animators connect you with endless possibilities and transform them into moving and breathing masterpieces!
                           <ShowMoreContent>
                              <span>
                                 We are known as market prodigies in corporate video production. Get ready to have your minds blown by our ingenious screencast video models. Product layouts are very important which is why we tend to <Link href="/ios-android-app-development">create high-performance and brand-authentic </Link> video animations that influence and inspire the masses. <Link href="/contact-us">Let us handle your business.</Link>
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
                              <Link href="/creative-design-packages">
                                 <a className="text-light">Logo Design</a>
                              </Link>
                           </li>
                           <li>
                              UI Designs
                           </li>
                           <li>
                              Social Media Design
                           </li>
                        </ul>
                     
                  </div>
               </Col>
               <Col lg={3} className="m-auto">
                 
                     <img className="w-100" src={"/Assets/Services/VideoDevelopment/VideoAnimationImg01.png"} alt="VideoAnimationImg01"></img>
                  
               </Col>
               <Col lg={4} className="m-auto text-white">
                  <div className="RocketUlTwo">
                     {/* </Fade right> */}
                        <ul>
                           <li>
                              Promotional Design
                           </li>
                           <li>
                              Video Design
                           </li>
                           <li>
                              Web Design
                           </li>
                        </ul>
                     
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default VideoDevelopmentOnline