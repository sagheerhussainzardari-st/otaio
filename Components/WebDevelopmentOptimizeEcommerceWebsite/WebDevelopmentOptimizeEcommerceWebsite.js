import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { OptimizeEcommerceWebsite } from '../../utilities/WebDevelopmentServices';
import GetStarted from '../Buttons/GetStarted'
import ShowMoreContent from './../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const WebDevelopmentOptimizeEcommerceWebsite = () => {
   return (
      <div>
         <div className="mt-5 pt-4 mb-5 pb-4">
            <Container>
               <Row>
                  <Col lg={5} className="m-auto">
                     
                        <img
                           className="w-100"
                           src={OptimizeEcommerceWebsite.OptimizeEcommerceWebsiteImagePath}
                           alt="web development packages"
                        />
                     
                  </Col>
                  <Col lg={7} className="m-auto">
                     
                        <div className="StartUp pt-5 mt-5">
                           <span className="BgText">{OptimizeEcommerceWebsite.heading}</span>
                           <div className="OurServicesHeadingUl">
                              <ul>
                                 
                                    <h2>{OptimizeEcommerceWebsite.title}</h2>
                                 
                                 
                                    <h6>
                                       An insightful planned e-commerce website that resembles your physical showroom! Our enterprise-grade, professional, and fully-customized e-commerce website development service offers:
                                       <ShowMoreContent>
                                          <span>
                                             We propose an affordable web development solution that nourishes your brand needs and specifies your accomplishments as a whole. Moreover, we know how to bring your brand into the spotlight with our on-point custom web development services. We are experienced in getting the right kind of attention for your <Link href="/pricing">brand with our cost-effective</Link> web development packages. Let’s get your brand on the elite list.
                                          </span>
                                       </ShowMoreContent>

                                    </h6>
                                    <Row>
                                       {OptimizeEcommerceWebsite.list.map((li, id) => {
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
                                             <Col lg={6} key={id}>
                                                <li>
                                                   <b>{li}</b>
                                                </li>
                                             </Col>
                                          );
                                       })}
                                    </Row>
                                 
                                 <Col lg="3">
                                    <GetStarted buttonText={OptimizeEcommerceWebsite.button[0]} buttonClass={OptimizeEcommerceWebsite.button[1]} />
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

export default WebDevelopmentOptimizeEcommerceWebsite