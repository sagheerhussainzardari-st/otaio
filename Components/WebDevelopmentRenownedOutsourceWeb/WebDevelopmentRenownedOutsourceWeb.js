import React from 'react'
import GetStarted from './../Buttons/GetStarted';
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { BasicWebsite, RenownedOutsourceWeb } from './../../utilities/WebDevelopmentServices';
import ShowMoreContent from './../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const WebDevelopmentRenownedOutsourceWeb = () => {
   return (
      <div>
         <div>
            <Container>
               <Row>
                  <Col lg={4} className="m-auto">
                     
                        <div className="StartUp">
                           <span className="BgText">{RenownedOutsourceWeb.heading}</span>
                           <Row className="OurServicesHeading">
                              <Col className="col-1"></Col>
                              <Col className="col-1 m-auto">
                                 <i className="fas fa-long-arrow-alt-right text-primary"></i>
                              </Col>
                              <Col className="col-10">
                                 
                                    <h2>{RenownedOutsourceWeb.title}</h2>
                                    <h4>{RenownedOutsourceWeb.title2}</h4>
                                 
                              </Col>
                           </Row>
                        </div>
                     
                  </Col>
                  <Col lg={7} className="m-auto">
                     
                        <h6>
                           <p>
                              Whether you are a startup, <Link href="/outsource-human-resources">a small business aiming to grow,</Link> or an established enterprise looking to branch out, <Link href="/">OTA</Link> has the exact web solution in store for you. We transform any business challenge thrown our way into cost-friendly web solutions.
                              <ShowMoreContent>
                                 <span>
                                 We plan out a strategic outsource web application development model that integrates and works best with your business layout. It’s about <Link href="/social-media-management">getting the maximum conversion for your business online</Link> using our budget-friendly web development packages. <Link href="/call-center-outsourcing">Keeping our clients in the loop</Link>, we work hard to make your firm stand strong by offering the most affordable website development packages.
                                 </span>
                              </ShowMoreContent>
                           </p>
                        </h6>
                     
                  </Col>
               </Row>
               <Row>
                  <Col lg={5} className="m-auto">
                     
                        <img
                           className="w-100"
                           src={BasicWebsite.BasicWebsiteImagePath}
                           alt="affordable custom web design"
                        />
                     
                  </Col>
                  <Col lg={7} className="m-auto">
                     
                        <div className="StartUp pt-5 mt-5">
                           <span className="BgText">{BasicWebsite.heading}</span>
                           <div className="OurServicesHeadingUl">
                              <ul>
                                 
                                    <h2>{BasicWebsite.title}</h2>
                                 
                                 
                                    <h6>
                                       Improve your business standing with highly responsive web designs. Whether you want to generate leads, contact prospective clients, or advertise your business, our basic website development package is the perfect match by being:
                                       <ShowMoreContent>
                                          <span>
                                          Our team of custom web application development enthusiasts comes up with affordable website development designs that suit your line of business the best and provide the <Link href="/white-label-agency" >unique pathway for sales opportunities and traffic conversions.</Link> We deliver what we promise. Also, we make sure your time is not wasted; therefore, our outsource web development services are there to get you more time to focus on other aspects of your business.
                                          </span>
                                       </ShowMoreContent>
                                    </h6>
                                    <Row>
                                       {BasicWebsite.list.map((li, id) => {
                                          if (id < 4) {
                                             return (
                                                <Col lg={6}>
                                                   <li>
                                                      <b>{li}</b>
                                                   </li>
                                                </Col>
                                             );
                                          }
                                          return (
                                             <Col lg={6}>
                                                <li>
                                                   <b>{li}</b>
                                                </li>
                                             </Col>
                                          );
                                       })}
                                    </Row>
                                 
                                 <Col lg="3">
                                    <GetStarted buttonText={BasicWebsite.button[0]} buttonClass={`${BasicWebsite.button[1]}`} />
                                 </Col>
                              </ul>
                           </div>
                        </div>
                     
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
   )
}

export default WebDevelopmentRenownedOutsourceWeb