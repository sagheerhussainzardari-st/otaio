import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Bounce } from 'react-reveal'
import VerticalTabs from './../VerticalTabs/VerticalTabs';
import OurVideo from './../OurVideo/OurVideo';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const OTAPricing = () => {
   return (
      <div className="OutsourcingBusiness pb-0">
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
                              <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Plans</text>
                           </g>
                        </svg>
                        <h2>Our Pricing</h2>
                        <h5 id="tst-id">Most Affordable</h5>
                     </div>
                  
               </Col>
               <Col lg={6} className="m-auto text-white">
                  
                     <div className="Business">
                        <h5>
                           <strong>
                              Affordable Outsourcing Packages To Get You Started
                           </strong>
                        </h5>
                        <h6>
                           <p>
                              Driven by our enthusiasm for our work and our inquisitiveness to explore the use of tools and techniques that work best in the digital world, <Link href="/ios-android-app-development">we shape ideas into results.</Link> Many companies may be initially inexpensive, but unlike us, they are not <Link href="/pricing">affordable throughout the course of your project!</Link> When you add up all of the features and services we provide, you get a bargain that none of our rivals can match.
                              <ShowMoreContent>
                                 <p>
                                    The digital industry today thrives on innovative designs and cutting-edge ideas, which is everything we offer when you switch the sails with us. Our comprehensive approach to studying your brand expectations and identity proves fruitful while making an online strategy to enhance your web presence. <Link href="/digital-startup">Expand your digital wings with us</Link>.
                                 </p>
                              </ShowMoreContent>
                           </p>
                        </h6>
                     </div>
                  
               </Col>
            </Row>
         </Container>
         <Container fluid className="p-0">
            <Row>
               <Col lg={12} className="me-0 m-auto">
                  <VerticalTabs />
               </Col>
            </Row>
         </Container>
         <Container>
            <Row>
               <Col lg={4}></Col>
               <Col lg={6} className="m-auto">
                  <div className="watch">
                     <svg width="100%">
                        <defs>
                           <linearGradient id="gradient" y1="0" y2="1">
                              <stop stopColor="#054084" offset="0" />
                              <stop stopColor="#054084" offset="1" />
                           </linearGradient>
                        </defs>
                        <g>
                           <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Watch</text>
                        </g>
                     </svg>
                  </div>
               </Col>
            </Row>
            <OurVideo />
         </Container>
         <br />
         <br />
         <br />
      </div>
   )
}

export default OTAPricing