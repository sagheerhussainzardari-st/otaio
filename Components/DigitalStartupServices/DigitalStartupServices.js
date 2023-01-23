import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce, Fade } from 'react-reveal'
import ShowMoreContent from '../ShowMoreText/ShowMoreContent'
import Link from 'next/link'
import GetStarted from '../Buttons/GetStarted'
const DigitalStartupServices = () => {
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
                                 <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Elevate Your</text>
                              </g>
                           </svg>
                           <h2>Launching Startups into the Digital Space</h2>
                        </div>
                     
                  </Col>
                  <Col lg={6} className="m-auto text-white">
                     
                        <div className="Business">
                           <h1><i><b>For Digital Startups</b></i></h1>
                           <h6>
                              The digital industry is rife with competition and can be quite brutal for newcomers. As a bootstrapped firm ourselves, we admire startups for their enthusiasm and <Link href="/ios-android-app-development"> drive to create unique solutions</Link> that tackle real-world issues. Leverage our expertise and discover how to build a successful business by utilizing various <Link href="/digital-marketing-services">digital marketing services</Link> to help digital startups of all sizes and markets.
                              <ShowMoreContent>
                                 <span>

                                    We have helped digital startups globally. Keeping ahead of the competition is the key to the game, with our help, you can do so. We help clients <Link href="/content-writing-services"><a className="text-light">grow their businesses and their brand worth by adding more value to and refining their line of services.</a></Link> The goal is to stay versatile and beat your competitors in the game by adding continuous inventive solutions.
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
                                 Affordable and reliable services
                              </li>
                              <li>
                                 Great returns
                              </li>
                              <li>
                                 Improved conversions
                              </li>
                              <li>
                                 No barriers to communication
                              </li>
                              <li>
                                 Fast delivery
                              </li>
                           </ul>
                        
                     </div>
                  </Col>
                  <Col lg={3} className="m-auto">
                     
                        <img className="w-100" src={"/Assets/PlansAssets/DigitalStartup/DigitalStartupImg01.png"} alt="Rocket"></img>
                     
                  </Col>
                  <Col lg={4} className="m-auto text-white">
                     <div className="RocketUlTwo">
                        {/* </Fade right> */}
                           <ul>
                              <li>
                                 24/7 customer support
                              </li>
                              <li>
                                 Improved brand performance
                              </li>
                              <li>
                                 No room for errors
                              </li>
                              <li>
                                 Top-notch quality
                              </li>
                              <li>
                                 End-to-end services
                              </li>
                           </ul>
                        
                     </div>
                  </Col>
               </Row>
               <Col lg={3} className='m-auto mt-5'>
                  <GetStarted buttonText='Launch Your Startup' buttonClass='getStarted-btn' />
               </Col>
            </Container>
         </div>
      </div>
   )
}

export default DigitalStartupServices