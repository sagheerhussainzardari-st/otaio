import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { WowMakeCustomersGoService, MotionGraphicsServices } from './../../utilities/VideoDevelopmentServices';
import Link from 'next/link'
import GetStarted from '../Buttons/GetStarted';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';

const VideoDevelopmentMotionGraphics = () => {
   return (
      <div className="mt-5 pt-4">
         <Container>
            <Row>
               <Col lg={4} className="m-auto">
                  
                     <div className="StartUp">
                        <span className="BgText">{WowMakeCustomersGoService.heading}</span>
                        <Row className="OurServicesHeading">
                           <Col className="col-1"></Col>
                           <Col className="col-1 m-auto">
                              <i className="fas fa-long-arrow-alt-right text-primary"></i>
                           </Col>
                           <Col className="col-10">
                              
                                 <h2>{WowMakeCustomersGoService.title}</h2>
                                 <h4>{WowMakeCustomersGoService.title2}</h4>
                              
                           </Col>
                        </Row>
                     </div>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <h6>
                        Video Animation is an integral tool that helps you vividly imagine and grasp the specific idea of a film, animated feature, advertisement, or production. <Link href='/nft-staking-platform-development'>Connect with an award-winning</Link> animation outsourcing company and <Link href="/lead-generation-services">lift your ROI with wholeheartedly engaging</Link> video production services.
                        <ShowMoreContent>
                           <p>
                              Video animation has never been so easy. We are dedicated to bringing a sound and flawless experience to your video development experience with us.
                           </p>
                           <p>
                           We are an Explainer Video Company with a <Link href="/about-us">team of innovative animators</Link> always trying to go out of the <Link href="/call-center-outsourcing">way to help our customers</Link>. And we pride ourselves in creating wonders for you.
                           </p>
                        </ShowMoreContent>
                     </h6>
                  
               </Col>
            </Row>
            <Row>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={MotionGraphicsServices.MotionGraphicsServicesImgPath}
                        alt="MotionGraphicsServices.MotionGraphicsServicesImgPath"
                     ></img>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">{MotionGraphicsServices.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{MotionGraphicsServices.title}</h2>
                              
                              
                                 <h6>
                                    Play with pictorial <Link href='/creative-design-packages'>objectives and creative edits</Link> to furnish astounding motion graphics for your viewers.
                                    <ShowMoreContent>
                                       <p>
                                       We are well-known as a prolific animation <Link href='/'>outsourcing company</Link>, and we are here to give you a productive contemporary experience.
                                       </p>
                                    </ShowMoreContent>
                                 </h6>
                                 <Row>
                                    {MotionGraphicsServices.list.map((li, id) => {
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
                                 <GetStarted buttonClass={MotionGraphicsServices.button[1]} buttonText={MotionGraphicsServices.button[0]} />
                              </Col>
                           </ul>
                        </div>
                     </div>
                  
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default VideoDevelopmentMotionGraphics