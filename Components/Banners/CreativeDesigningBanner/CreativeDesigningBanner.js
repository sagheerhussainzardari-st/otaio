import Link from 'next/link'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Bounce, Fade } from 'react-reveal'
import ShowMoreContent from '@/components/ShowMoreText/ShowMoreContent'
const CreativeDesigningBanner = () => {
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
                        <h2>Graphic Design</h2>
                     </div>
                  
               </Col>
               <Col lg={6} className="m-auto text-white">
                  
                     <div className="Business">
                        <h5><i>Let our creativity be your <strong>brand’s identity</strong></i></h5>
                        <h6>
                           <p>
                              Our expert artisans have mastered the <a href='https://uxplanet.org/8-ways-to-make-your-design-visually-attractive-6528c39e40f'>art of creating attractive designs</a> that <strong><Link href='digital-startup'>boost your sales</Link></strong> significantly. <strong>Creating a brand identity</strong> is crucial to how and what we communicate with clients, engaging them and converting them into buyers and admirers.
                              <ShowMoreContent>
                                 <span>
                                    Our creative design process includes the <a href="/nft-staking-platform-development">involvement of clients throughout the process</a> so they get to see how their product gets transformed into something great and they may also add some feedback or suggestion along the way. Days of switching firms are long gone, get in contact with us today to get the logo and website design package tailored just for you.
                                 </span>
                              </ShowMoreContent>
                           </p>
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
                              Logo Design
                           </li>
                           <li>
                              UI Designs
                           </li>
                           <li>
                              <Link href="/social-media-management">
                                 <a className="text-light">Social Media Design</a>
                              </Link>
                           </li>
                        </ul>
                     
                  </div>
               </Col>
               <Col lg={3} className="m-auto">
                  
                     <img className="w-100" src={"/Assets/Services/CreativeDesign/affordable_logo_design_packages.png"} alt="affordable logo design packages"></img>
                  
               </Col>
               <Col lg={4} className="m-auto text-white">
                  <div className="RocketUlTwo">
                     {/* </Fade right> */}
                        <ul>
                           <li>
                              Promotional Design
                           </li>
                           <li>
                              <Link href="/corporate-video-production"><a className="text-light">Video Design</a></Link>
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

export default CreativeDesigningBanner