import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Bounce, Fade } from 'react-reveal';
import Wrapper from '../../../HigherOrderWrappers/Wrapper/Wrapper';
import ShowMoreContent from './../../ShowMoreText/ShowMoreContent';
import Link from 'next/link';
const SEOSection2 = () => {
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
                              <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Launch</text>
                           </g>
                        </svg>
                        <h2>Your Website To The Top</h2>
                     </div>
                  
               </Col>
               <Col lg={6} className="m-auto text-white">
                  
                     <div className="Business">
                        <h5><i> Boost Your Rankings And Conversions Today!</i></h5>
                        <h6>
                           <span>
                              Offering the most on-point and unmatched <strong>outsource SEO services</strong>, our team of SEO enthusiasts involves the most impeccable designs and innovative strategies with easy-on-pocket <strong>local SEO services pricing</strong> to <Link href='/nft-staking-platform-development'>obtain timely results and satisfy your business urge</Link>. With our <Link href="/creative-design-packages">highly optimized content</Link> and one of the <strong>best SEO services</strong>, your website is more visible and attractive. Let’s dive into our game!
                              <ShowMoreContent>
                                 <span>
                                    SEO is your life-saver when it comes to your website ranking and lead conversions. Hop in with us and you get performance-based and <strong>affordable local SEO services</strong> that target the website traffic and lead generation optimizing techniques that level up your game. <Link href="/digital-startup">Let’s drive your sales</Link> higher and optimize your web presence.If you wish to gain more credibility for your website, employ our <strong>local SEO services company</strong> and you won’t be disappointed. We promise targets, and we deliver them well. Want to bet? Let’s connect.
                                 </span>

                              </ShowMoreContent>
                           </span>
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
                              Key Word Optimization
                           </li>
                           <li>
                              On Page Optimization
                           </li>
                           <li>
                              Content Writing
                           </li>
                        </ul>
                     
                  </div>
               </Col>
               <Col lg={3} className="m-auto">
                 
                     <img className="w-100" src={"/Assets/Services/SEO/banner2.png"} alt="local seo packages"/>
                  
               </Col>
               <Col lg={4} className="m-auto text-white">
                  <div className="RocketUlTwo">
                     {/* </Fade right> */}
                        <ul>
                           <li>
                              Link Building
                           </li>
                           <li>
                              Local Optimization
                           </li>
                           <li>
                              Video Optimization
                           </li>
                        </ul>
                     
                  </div>
               </Col>
            </Row>
         </Container>
      </Wrapper>
   )
}

export default SEOSection2