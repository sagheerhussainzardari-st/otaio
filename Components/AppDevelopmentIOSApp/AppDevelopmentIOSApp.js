import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { IosAppService } from '../../utilities/AppDevelopmentServices';
import GetStarted from '../Buttons/GetStarted';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const AppDevelopmentIOSApp = () => {
   return (
      <div>
         <Container>
            <Row>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">{IosAppService.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{IosAppService.title}</h2>
                              
                              
                                 <h6>
                                    Leverage OTA’s expertise in <strong>iOS app development services</strong>  to fabricate an intelligent, engaging, and consistent application for your industry, regardless of intricacy. As an <strong>outsource iOS app development agency</strong>, we start with the idea of getting an upheaval of the IOS app industry by enhancing your application on top of the iOS application store.
                                    <ShowMoreContent>
                                       <span>
                                          We are a leading iOS app development company that strives to bring together a smooth and <Link href="/blog">efficient product based on the company's core services and values.</Link> We are passionate about bringing to life the designated ios app development services that spark creativity. Our in-line team members make sure to present a product you can’t say no to.
                                       </span>
                                    </ShowMoreContent>
                                 </h6>
                                 <Row>
                                    {IosAppService.list.map((li, id) => {
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
                                 <GetStarted buttonClass={IosAppService.button[1]} buttonText={IosAppService.button[0]}></GetStarted>
                              </Col>
                           </ul>
                        </div>
                     </div>
                  
               </Col>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={IosAppService.IosAppServiceImagePath}
                        alt="IosAppService.IosAppServiceImagePath"
                        loading='lazy'
                     ></img>
                  
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default AppDevelopmentIOSApp