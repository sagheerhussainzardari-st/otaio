import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import GetStarted from './../Buttons/GetStarted';
import { Bounce } from 'react-reveal';
import Link from 'next/link';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent'

const CallCentreOutsourcingSection = () => {
   return (
      <div>
         <div className="CallCentreOutsourcingbg pt-5 pb-5">
            <Container>
               <Row>
                  <Col lg={6}>
                     
                        <img className="w-75" src={"/Assets/PlansAssets/CallCenter/CallCenterImg01.png"} alt="CallCenterImg01"></img>
                     
                  </Col>
                  <Col lg={6} className="m-auto">
                     
                        <div className="Operating">
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
                                    Outsourcing
                                 </text>
                              </g>
                           </svg>
                           <h2>Call Center</h2>
                           <p>
                              <b>We call them, You choose them</b>
                           </p>
                           <h5>
                              <em>From Inbound and Outbound call center outsourcing to telemarketing and tech support, we handle and resolve customer queries, pitch sales to desired demographic, and churn <Link href='/lead-generation-services'> leads into revenue </Link>.</em>
                              <ShowMoreContent>
                              <span>
                              The basic idea behind this program discipline is to run a smooth sail and keep the operations line fluent. With our <Link href="/">outsourcing services,</Link> the entire focus of our outsourcing team goes to the customer services and support division of the business to keep the customers happy and business booming.
                                 </span>
                                 </ShowMoreContent>
                           </h5>
                           <Row>
                              <Col lg={4}>
                                 <GetStarted buttonText='Get Started' buttonClass='getStarted-btn' />
                              </Col>
                           </Row>
                        </div>
                     
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
   )
}

export default CallCentreOutsourcingSection