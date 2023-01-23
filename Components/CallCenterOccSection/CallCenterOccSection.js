import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Bounce } from 'react-reveal';
import GetStarted from './../Buttons/GetStarted';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent'
import Link from 'next/link'
const CallCenterOccSection = () => {
   return (
      <div className="PlanOccBg">
         <Container>
            <Row className="mt-5">
               <Col lg={6}>
                  
                     <div className="planServicesSvg">
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
                                 CCO
                              </text>
                           </g>
                        </svg>
                        <h2>
                           Why is Call Center Outsourcing necessary?
                        </h2>
                        <p>
                           In the age of digitalization, bad rumors and negative reviews can destroy a business. This is why great customer service is paramount to your brand’s success. Outsource to Asia supports your business by giving you an <Link href="/seo-services">edge over your competition by cutting down</Link> costs and reshaping your customer support process and infrastructure.
                           Without a good customer experience, most clients won’t return even after receiving a satisfactory product or service. Our comprehensive, adaptable, and cost-effective BPO outsourcing solutions will assist you in running your business smoothly and efficiently. We will handle a wide range of client requests and guarantee that all questions and issues are resolved on time.
                           <ShowMoreContent>
                              <span>
                              Most businesses these days are focused on making hasty and aggressive sales but completely forget about their returning customers and that results in customers leaving the business disappointed with the service later. The term after-sales support is as important as a designated sale itself. A customer leaving the business is actually the process failure of the business and then a retention process goes into effect.
To save yourself all that trouble, let us tell you, our dedicated and highly capable call center outsourcing team works really hard to keep the customers satisfied and the business running as usual.
                              </span>
                           </ShowMoreContent>

                        </p>
                        <Row>

                           <Col lg={4}>
                              <GetStarted buttonText='Get Started' buttonClass='getStarted-btn' />
                           </Col>
                        </Row>
                     </div>
                  
               </Col>
               <Col lg={4} className="m-auto">
                  
                     <img className="w-100" src={"/Assets/PlansAssets/CallCenter/CallCenterImg03.png"} alt="CallCenterImg03"></img>
                  
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default CallCenterOccSection