import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import GetStarted from '../Buttons/GetStarted';
import { DesignCustomWebsite } from './../../utilities/WebDevelopmentServices';
import Link from 'next/link'
import ShowMoreContent from './../ShowMoreText/ShowMoreContent';

const WebDevelopmentDesignCustomWebsite = () => {
   return (
      <div>
         <div className="mt-5 pt-4">
            <Container>
               <Row>
                  <Col lg={7} className="m-auto">
                     
                        <div className="StartUp pt-5 mt-5">
                           <span className="BgText">{DesignCustomWebsite.heading}</span>
                           <div className="OurServicesHeadingUl">
                              <ul>
                                 
                                    <h2>{DesignCustomWebsite.title}</h2>
                                 
                                 
                                    <h6>
                                       Take control of your website through custom design and code. Our custom web design allows flexibility with the ever-evolving businesses spectrum and is:
                                       <ShowMoreContent>
                                          <span>
                                             
                                          We concentrate mainly on the type of affordable custom web designs a company is looking for, something that aligns with their business structure and gives them a winning advantage over their rivals. Our affordable web development services are <Link href="/about-us">second to none in the market.</Link>
                                          </span>
                                       </ShowMoreContent>
                                    </h6>
                                    <Row>
                                       {DesignCustomWebsite.list.map((li, id) => {
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
                                    <GetStarted buttonText={DesignCustomWebsite.button[0]} buttonClass={DesignCustomWebsite.button[1]} />
                                 </Col>
                              </ul>
                           </div>
                        </div>
                     
                  </Col>
                  <Col lg={5} className="m-auto">
                     
                        <img
                           className="w-100"
                           src={DesignCustomWebsite.DesignCustomWebsiteImagePath}
                           alt="custom web development services"
                        />
                     
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
   )
}

export default WebDevelopmentDesignCustomWebsite