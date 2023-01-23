import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Link from 'next/link'
import SocialMediaContact from './SocialMediaContact';
// import Image from 'next/image'

const HomePageMainBanner = () => {
   return (
      <div>
         <div className="homeMainBanner">
            <div className="star-field">
               <div className="layer"></div>
               <div className="layer"></div>
               <div className="layer"></div>
               <div className="circleImg">
                  <Container>
                     <div className="mainBannerServices">
                        <Row>
                           <Col lg={3}></Col>
                           <Col lg={3} className="col-6">
                              <div className="servicesBox text-light position-relative">
                                 <Link href="/web-development-services">
                                    <a className="text-light" >
                                       <h5>Web Development</h5>
                                    </a>
                                 </Link>
                              </div>
                           </Col>
                           <Col lg={3} className="col-6">
                              <div className="servicesBox1 text-light position-relative">
                                 <Link href="/outsource-human-resources">
                                    <a className="text-light" >
                                       <h5>Resource Outsourcing</h5>
                                    </a>
                                 </Link>
                              </div>
                           </Col>
                        </Row>
                     </div>

                     <div className="mainBannerServices">
                        <Row>
                           <Col lg={1}></Col>
                           <Col lg={3} className="col-6">
                              <div className="servicesBox2 text-light position-relative">
                                 <Link href="/creative-design-packages">
                                    <a className="text-light">
                                       <h5>Creative &#38; Design</h5>
                                    </a>
                                 </Link>
                              </div>
                           </Col>
                        </Row>
                     </div>
                     <Row>
                        <Col lg={8} className="m-auto">
                           <div className="mainBanner">
                           {/* <Image
                              src={"/Assets/HomeAssets/bannerImg01.png"}
                              alt="web development company"
                              width={400}
                              height={400}
                              // layout='fill'
                           /> */}
                              <img src={"Assets/HomeAssets/bannerImg01.png"} alt='web development company ' ></img>
                              <svg width="100%">
                                 <defs>
                                    <linearGradient id="gradient" y1="0" y2="1">
                                       <stop stopColor="#696368" offset="0" />
                                       <stop stopColor="#76485f" offset="1" />
                                    </linearGradient>
                                 </defs>
                                 <g>
                                    <text id="text" y="85" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Digital Startup</text>
                                 </g>
                              </svg>
                           </div>
                           <div className="text">
                              <h1>Offshore Partners For <span>Digital Supremacy</span></h1>
                              
                                 <p>
                                    Full-service <strong><Link href='/web-development-services' className='text-decoration-none'>web development company</Link> </strong> Crafting ingenious digital experiences that power startups, scale-up corporations <br></br> and bring digital transformation to family businesses.
                                 </p>
                              
                           </div>

                           <div className="mainBannerServices">
                              <Row>
                                 <Col lg={1}></Col>
                                 <Col lg={5} className="col-12">
                                    <div className="servicesBox3 text-light position-relative">
                                       <Link href="/ios-android-app-development">
                                          <a className="text-light">
                                             <h5>App Development</h5>
                                          </a>
                                       </Link>
                                    </div>
                                 </Col>
                                 <Col lg={5} className="col-12">
                                    <div className="servicesBox4 text-light position-relative">
                                       <Link href="/digital-marketing-services">
                                          <a className="text-light">
                                             <h5>Digital Marketing</h5>
                                          </a>
                                       </Link>
                                    </div>
                                 </Col>
                              </Row>
                           </div>
                        </Col>
                     </Row>
                     <Row className="mt-5">
                        <Col lg={3} className="m-auto scrollDown">
                           <a href="#section2"><i className="fas fa-mouse text-white opaCity-md"></i><br></br><i className="fas fa-arrow-down animatedArrow text-primary"></i></a>
                        </Col>
                     </Row>
                  </Container>
               </div>
               <SocialMediaContact />
               <div className="homeMainBannerOverlay"></div>
            </div>
         </div>
      </div>
   )
}

export default HomePageMainBanner
