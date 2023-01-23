import Link from 'next/link'
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Bounce } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted'
import ShowMoreContent from '../ShowMoreText/ShowMoreContent'
const OutsourcingHumanResources = () => {
   return (
      <div className='py-5'>
         <Container>
            <Row>
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
                                 Hassle-free
                              </text>
                           </g>
                        </svg>
                        <h2>
                           Human Resource
                        </h2>
                        <p>
                           To win in the marketplace, you must first win the workplace! We make sure that your dream candidate will walk right through your doors.
                           Hiring and managing employees with adequate knowledge and skillset for each new project is a time-consuming and daunting endeavor for any firm. Not only that, but it also costs you money, effort, and time. <Link href='/'>Outsource to Asia LLC,</Link>  acknowledges the importance and value of your time and money, and, as a corollary, offers fully-managed human resource outsourcing services to its prestigious customers. Our goal with resource outsourcing is to allow you to focus on your core strengths while we handle the rest.
                           <ShowMoreContent>
                              <p>
                                 With our functional team at work, you can relax and chill out. We make sure your interests are best served when we come on board. We know best how to make use of the time and work efficiently for you. The accurate and comprehensive approach that we take is to make you grow stronger with your own set of resource outsourcing services while we manage the rest and handle the business to the best of our ability. <Link href="/contact-us">Get on board, let’s get going.</Link>
                              </p>
                           </ShowMoreContent>
                        </p>
                     </div>
                     <Col lg={4}>
                        <GetStarted buttonText='Hire Resources' buttonClass='getStarted-btn' />
                     </Col>
                  
               </Col>
               <Col lg={4} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={"/Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessImg02.png"}
                        alt="ResourcesOutsourcingBusinessImg02"
                     ></img>
                  
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default OutsourcingHumanResources