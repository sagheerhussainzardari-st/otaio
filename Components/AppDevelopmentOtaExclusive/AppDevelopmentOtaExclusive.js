import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { ExclusiveAppDevelopmentService, AndroidAppService } from '../../utilities/AppDevelopmentServices';
import Link from 'next/link'
import GetStarted from './../Buttons/GetStarted';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';

const AppDevelopmentOtaExclusive = () => {
   return (
      <div>
         <Container>
            <Row>
               <Col lg={4} className="m-auto">
                  
                     <div className="StartUp">
                        <span className="BgText">
                           {ExclusiveAppDevelopmentService.heading}
                        </span>
                        <Row className="OurServicesHeading">
                           <Col className="col-1"></Col>
                           <Col className="col-1 m-auto">
                              <i class="fas fa-long-arrow-alt-right text-primary"></i>
                           </Col>
                           <Col className="col-10">
                              
                                 <h2>{ExclusiveAppDevelopmentService.title}</h2>
                                 <h5>{"Link your business to all device"}</h5>
                              
                           </Col>
                        </Row>
                     </div>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <h6>
                        While designing your app, we take its look, feel, and incorporation of elements into thought.<Link href="/portfolio"> We carry out a technique that is the best methodology </Link> for <a href='https://elearningindustry.com/improve-your-mobile-app-user-experience-effective-ways'>mobile application improvement as it permits us</a> to make changes, add new features, and advance with changing trends. Our application development services include:
                        <ShowMoreContent>
                           <span>
                              Great designs <Link href='/nft-staking-platform-development'>inspire audiences and bring in more business.</Link> We are an android development company that uses a customer-centric approach to produce responsive app designs. We drive the entire app development process from start to finish checking up on <Link href="/contact-us">every little detail and keeping the brand’s identity intact.</Link>
                           </span>
                        </ShowMoreContent>
                     </h6>
                  
               </Col>
            </Row>
            <Row>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={AndroidAppService.AndroidAppServiceImgPath}
                        alt="AndroidAppService.AndroidAppServiceImgPath"
                        decoding="async"

                     ></img>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">{AndroidAppService.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{AndroidAppService.title}</h2>
                              
                              
                                 <h6>
                                    <strong><Link href='/' className='text-decoration-none'>OTA</Link></strong> has an expert team of mobile app development professionals specializing in Android app development services. We help companies create a terrific Android app experience, <Link href="/digital-startup">create new consumer channels,</Link> and differentiate themselves from the competition. We ensure our Android mobile application development services match your necessities by being:
                                    <ShowMoreContent>
                                       <span>
                                       Our team of mobile app developers has over a decade-long experience in producing android app development solutions that <Link href="/lead-generation-services">ensure brand awareness, meet industry requirements</Link> and encourage corporate expansion.
                                       Once you get on board with us, we promise you the best over-the-age app development services and the most proficient app development team that delivers results. We are the android development company that measures success at a 100% customer satisfaction rate.
                                       </span>
                                    </ShowMoreContent>
                                 </h6>
                                 <Row>
                                    {AndroidAppService.list.map((li, id) => {
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
                                 <GetStarted buttonClass={AndroidAppService.button[1]} buttonText={AndroidAppService.button[0]} />
                              </Col>
                           </ul>
                        </div>
                     </div>
                  
               </Col>
            </Row>
         </Container>
      </div >
   )
}

export default AppDevelopmentOtaExclusive