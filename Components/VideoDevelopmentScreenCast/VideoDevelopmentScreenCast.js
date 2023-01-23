import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { ScreenCastService } from '../../utilities/VideoDevelopmentServices';
import GetStarted from '../Buttons/GetStarted';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const VideoDevelopmentScreenCast = () => {
   return (
      <div className="mt-5 pt-4 mb-5">
         <Container>
            <Row>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={ScreenCastService.ScreenCastServiceImagePath}
                        alt="alt-image"
                     ></img>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span class="BgText">{ScreenCastService.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{ScreenCastService.title}</h2>
                              
                              
                                 <h6>
                                    Walk viewers through your newly launched product or service with splendid and swanky-looking Screencast animation service
                                    <ShowMoreContent>
                                       <span>
                                       As an explainer video company, <Link href="/pricing">we offer a wide variety</Link> of video animation services globally. Tired of moving around in circles, we are here to give you your dream screencast video services packed with sweet little wonders that add to your animation needs.
                                       </span>
                                    </ShowMoreContent>
                                 </h6>
                                 <Row>
                                    {ScreenCastService.list.map((li, id) => {
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
                                 <GetStarted buttonText={ScreenCastService.button[0]} buttonClass={ScreenCastService.button[1]}></GetStarted>

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

export default VideoDevelopmentScreenCast