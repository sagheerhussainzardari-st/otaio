import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Fade, Bounce } from 'react-reveal';
import Link from 'next/link'
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
const ContentWritingBetterBusiness = () => {
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
                                 <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Online</text>
                              </g>
                           </svg>
                           <h2>Better Business</h2>
                        </div>
                     
                  </Col>
                  <Col lg={6} className="m-auto text-white">
                     
                        <div className="Business">
                           <h5><i>
                              Words that leave a mark on one’s soul</i></h5>
                           <h6>
                              Words are the instrumental mechanisms of human expression and the primal conveyors of substance for search engines.We're a <Link href='/digital-marketing-services'>digital marketing agency</Link> that knows the significance of great quality content all through <Link href='/lead-generation-services'>your marketing strategy </Link>. Our team of <strong>professional content writers</strong> guarantees each piece of content that we dispatch is of outstanding quality and gives the outcomes you desire.
                              <ShowMoreContent>
                                 <span>
                                 Never again do you have to worry about hiring someone for the article writing services. You can blindly put your trust in us, given our track record. We are a preeminent content writing company that <Link href='/e-commerce-solutions'>produces nothing but marvels for our clients</Link> and always strives to keep it original and hip. We are the catch you need.
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
                                 Web Page Content
                              </li>
                              <li>
                                 Blog Posts
                              </li>
                              <li>
                                 Articles
                              </li>
                           </ul>
                        
                     </div>
                  </Col>
                  <Col lg={3} className="m-auto">
                    
                        <img className="w-100" src={"/Assets/Services/ContentWritting/ContentWrittingImg01.png"} alt="ContentWrittingImg01"></img>
                     
                  </Col>
                  <Col lg={4} className="m-auto text-white">
                     <div className="RocketUlTwo">
                        {/* </Fade right> */}
                           <ul>
                              <li>
                                 Product Description
                              </li>
                              <li>
                                 Guest Blogging
                              </li>
                              <li>
                                 Social Media Captions
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

export default ContentWritingBetterBusiness