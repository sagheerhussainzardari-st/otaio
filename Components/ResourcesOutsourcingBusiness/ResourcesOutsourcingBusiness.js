import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Bounce } from 'react-reveal';
import Link from 'next/link'
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
import GetStarted from '../Buttons/GetStarted';
const ResourcesOutsourcingBusiness = () => {
   return (
      <div>
         <div className="OutsourcingBusiness pt-5 pb-5">
            <Container>
               <Row>
                  <Col lg={6} className="m-auto">
                     
                        <img className="w-100" src={"/Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessImg01.png"} alt="ResourcesOutsourcing"></img>
                     
                  </Col>
                  <Col lg={6} className="m-auto">
                     
                        <div className="Business">
                           <svg width="100%">
                              <defs>
                                 <linearGradient id="gradient" y1="0" y2="1">
                                    <stop stopColor="#054084" offset="0" />
                                    <stop stopColor="#054084" offset="1" />
                                 </linearGradient>
                              </defs>
                              <g>
                                 <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Business</text>
                              </g>
                           </svg>
                           <h2>Resource Outsourcing</h2>
                           <p>
                              Every organization, whether small or large, strives to get the most out of the least amount of resources, which includes cost-cutting, strong infrastructure, and a regulated environment. We understand how difficult it is to manage the infrastructure while keeping departments in check. So we provide companies with an incredible opportunity to outsource human resources, by choosing the resources you want us to provide and manage. <Link href='/digital-startup' >Grow your business</Link> effortlessly by availing our Resource Outsourcing services.
                           </p>
                           <p>
                              <b><i>
                                 With our vast portfolio of high-end clients, we ensure that our resources fit your guidelines, whether you're a startup with minimal resources or an organization with extensive budgets to dispense.
                              </i></b>
                              <ShowMoreContent>
                                 <span>
                                    Partner with us today to let your cost-saving requirements be addressed, coupled with <Link href="/content-writing-services">our progressive technical expertise</Link>. Our goal is to present our elite customers with matchless outsource human resource services that meet their business needs profoundly. Our technical expertise and creative line of services make us stand out from other service providers in the market. We tend to provide fully-managed resource outsourcing services to our clients without much hassle and lesser ownership. As a resource outsourcing firm, we let you focus on your very own core competencies, while we work behind the lines to do the rest on your behalf. Joining our table, you get impeccable service with no-quality compromise.
                                 </span>
                              </ShowMoreContent>
                           </p>
                           <Row>
                              <Col lg={6}>
                                 <Row>
                                    <Col className="col-3 mb-3">
                                       <img className="w-100" src={"/Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessIcon01.png"} alt="ResourcesOutsourcing"></img>
                                    </Col>
                                    <Col className="col-9 m-auto">
                                       <h5><b>Light on Pocket</b></h5>
                                    </Col>
                                 </Row>
                              </Col>
                              <Col lg={6}>
                                 <Row>
                                    <Col className="col-3 mb-3">
                                       <img className="w-100" src={"/Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessIcon02.png"} alt="ResourcesOutsourcing"></img>
                                    </Col>
                                    <Col lg={9} className="col-9 m-auto">
                                       <h5><b>Heavy in Performance</b></h5>
                                    </Col>
                                 </Row>
                              </Col>
                           </Row>
                        </div>
                     
                  </Col>
               </Row>
               <Col lg={3} className='m-auto mt-5'>
                  <GetStarted buttonText='Hire Resources' buttonClass='getStarted-btn' />
               </Col>
            </Container>
         </div>
      </div>
   )
}

export default ResourcesOutsourcingBusiness