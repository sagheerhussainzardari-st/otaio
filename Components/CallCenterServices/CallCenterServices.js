import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted'
import ShowMoreContent from '../ShowMoreText/ShowMoreContent'

const CallCenterServices = () => {
   return (
      <div>
         <div>
            <Container>
               <Row>
                  <Col lg={4} className="m-auto">
                     
                        <img className="w-100" src={"/Assets/PlansAssets/CallCenter/CallCenterImg02.png"} alt="CallCenterImg02"></img>
                     
                  </Col>
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
                                    Services
                                 </text>
                              </g>
                           </svg>
                           <h2>
                              Making Clients Happy
                           </h2>
                           <p>
                              If you are in the service industry, you would realize how hard it is to please clients Our objective at <Link href='/' >Outsource to Asia</Link> is to give our clients the best staff available. We will ensure that your customers' demands are met with our call centre outsourcing services. We understand that many of our clients have concerns regarding contact centre outsourcing, which is why we are here to assist. We are one of the finest inbound call center outsourcing out there and can handle all communication channels, including phone, chat, text, and email.
                              <ShowMoreContent>
                                 <span>
                                    An effective line-up of support services mixed with a blend of <Link href="/social-media-management"> innovative sales design </Link> is what we offer. What’s more important after scoring a sale? Keeping a customer happy and satisfied or rather customer satisfaction and support. With our outsource call center services, your worries become ours and we keep you worry-free. Our set of process outflows is designed specifically to keep our clients away from hassle.
                                    When an organization serves customers right, partners and customers stay brand loyal. And the customer experience that we present equals none.
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
               </Row>
            </Container>
         </div>
      </div>
   )
}

export default CallCenterServices