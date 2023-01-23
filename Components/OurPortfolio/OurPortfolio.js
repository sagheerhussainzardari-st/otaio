import Link from 'next/link'
import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import MobileAppDevelopmentCarousal from './../MobileAppDevelopmentCarousal';
import { WebDevelopmentPortfolioImages, socialMediaPortfolioImages, creativeDesignPortfolioImages } from './../../utilities/portfolioimages';
import loader from '../loader.svg'
const OurPortfolio = () => {
   const [loaded, setLoaded] = useState(false)
   let image = useRef();
   useEffect(() => {
      const img = image.current;
      if (img && img.complete) {
         handleImageLoaded();
      }
   }, [])
   const handleImageLoaded = () => {
      if (loaded) {
         setLoaded(true);
      }
   }
   return (
      <div>
         <div className="DevelopYourBrand" id="OTAPortfolio">
            <Container>
               <Row>
                  <Col lg={6} className="m-auto">
                     <div className="portfolio-heading smartWork">
                        <svg width="100%">
                           <defs>
                              <linearGradient id="gradient" y1="0" y2="1">
                                 <stop stopColor="#054084" offset="0" />
                                 <stop stopColor="#054084" offset="1" />
                              </linearGradient>
                           </defs>
                           <g>
                              <text
                                 id="text"
                                 y="103"
                                 strokeWidth="1"
                                 stroke="url(#gradient)"
                                 fill="rgb(0, 0, 0,0.2)"
                              >
                                 OTA Portfolio
                              </text>
                           </g>
                        </svg>
                        <h2 className="text-center">Developing Your Brand</h2>
                     </div>
                  </Col>
               </Row>
               <Row>
                  <Col lg={7} className="m-auto mt-4">
                     <p className="font-size-12 text-center text-light">
                        Our team consists of experienced experts in all sectors of <strong><Link href='/seo-services'><a className='text-decoration-none'>digital marketing</a></Link></strong>. This allows us to develop projects on a large scale, guaranteeing a supreme quality and an optimal experience.
                     </p>
                  </Col>
               </Row>
            </Container>
            <Container>
               <div className="portfolioTabs">
                  <Tabs>
                     <TabList>
                        <Tab>WEB DEVELOPMENT</Tab>
                        <Tab>BRANDING &#38; CREATIVE</Tab>
                        <Tab>MOBILE APPS</Tab>
                        <Tab>SOCIAL MEDIA</Tab>
                     </TabList>
                     <TabPanel>

                        <Row>
                           {
                              React.Children.toArray
                                 (
                                    WebDevelopmentPortfolioImages.map((path, id) => {

                                       return <Col lg={4}>
                                          <div className="portfolioTabsCards">
                                             <img
                                                ref={image}
                                                className="w-100"
                                                src={`${!loaded ? path : loader.src}`}
                                                alt={`ota-web-mockup-${id}`}
                                                loading='lazy'
                                                onLoad={handleImageLoaded}
                                             ></img>
                                          </div>
                                       </Col>

                                    })
                                 )
                           }
                        </Row>
                     </TabPanel>
                     <TabPanel>
                        <Row>
                           {socialMediaPortfolioImages.map((path, id) => {
                              return (
                                 <Col lg={4}>
                                    <div className="portfolioTabsCards">
                                       <img
                                          ref={image}
                                          className="w-100"
                                          src={`${!loaded ? path : loader.src}`}
                                          alt={`branding-and-creative-${id}`}
                                          loading="lazy"
                                          onLoad={handleImageLoaded}

                                       ></img>
                                    </div>
                                 </Col>
                              )
                           })}
                        </Row>


                     </TabPanel>
                     <TabPanel>
                        <MobileAppDevelopmentCarousal handleImageLoaded={handleImageLoaded} loaded={loaded} loader={loader} ref={image} />
                     </TabPanel>
                     <TabPanel>
                        <Row>
                           {creativeDesignPortfolioImages.map((path, id) => {
                              return (
                                 <Col lg={4}>
                                    <div className="portfolioTabsCards">
                                       <img
                                          ref={image}
                                          className="w-100"
                                          src={`${!loaded ? path : loader.src}`}
                                          alt={`our-social-media-posts-${id}`}
                                          loading='lazy'
                                          onLoad={handleImageLoaded}
                                       ></img>
                                    </div>
                                 </Col>
                              )
                           })}

                        </Row>
                     </TabPanel>


                  </Tabs>
               </div>
            </Container>
         </div>
      </div>
   )
}

export default OurPortfolio