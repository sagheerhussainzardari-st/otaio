import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Bounce, Fade } from 'react-reveal';
import ShowMoreContent from './../../ShowMoreText/ShowMoreContent';
import Wrapper from '../../../HigherOrderWrappers/Wrapper/Wrapper'
import Link  from 'next/link';
const SMMService2 = () => {
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
                              <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Creative</text>
                           </g>
                        </svg>
                        <h2>Social Media Marketing</h2>
                     </div>
                  
               </Col>
               <Col lg={6} className="m-auto text-white">
                  
                     <div className="Business">
                        <h5><i>Your one-stop solution for all social media marketing problems!</i></h5>
                        <h6>
                           <span>
                              The best strategy is the one that signifies your <Link href="/creative-design-packages">brand’s visibility and offers</Link> the best marketing and management optimization. We are a solutions-based company that believes in making things happen with our awesome social media <Link href="/content-writing-services">content creation services</Link>. Trends come and go, but we know what works for our clients and what’s the best action plan to choose. The desire for more? We can help you acquire the expansion you need. Let’s advance together. 
                              <ShowMoreContent>
                                 <span>
                                 Nowadays, people are engaged in social media activities more which makes it a good catch for you to make your mark and get the maximum coverage with our impactful <strong>social media community management services.</strong> With us in the picture, known as one of the best <strong>outsource social media management</strong> houses in the market, the game becomes easy for you. <Link href='/nft-staking-platform-development'>We provide you with the necessary tools and techniques</Link> to get the most useful outcomes with our incredible <strong>Instagram management services</strong>.
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
                              Keyword Optimization
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
                 
                     <img className="w-100" src={"/Assets/Services/SMM/SMMdescription.png"} alt="social media optimization services"/>
                  
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

export default SMMService2