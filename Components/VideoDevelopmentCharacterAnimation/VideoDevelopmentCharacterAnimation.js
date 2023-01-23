import React from 'react'
import GetStarted from '../Buttons/GetStarted';
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { CharacterAnimationService } from '../../utilities/VideoDevelopmentServices';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';

const VideoDevelopmentCharacterAnimation = () => {
   return (
      <div className="mt-5 pt-4">
         <Container>
            <Row>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">{CharacterAnimationService.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{CharacterAnimationService.title}</h2>
                              
                              
                                 <h6>
                                    Utilizing great animation modeling skills to bring character, feeling, and expression into otherwise lifeless animated characters.
                                    <ShowMoreContent>
                                       <p>
                                       Don’t look elsewhere for your video animation needs. Our bunch of animation services are unmatched and on-point. We are a video production company with the best animators providing customized and distinctive video animations and production designs globally.
                                       </p>
                                    </ShowMoreContent>
                                 </h6>
                                 <Row>
                                    {CharacterAnimationService.list.map((li, id) => {
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
                                 <GetStarted buttonClass={CharacterAnimationService.button[1]} buttonText={CharacterAnimationService.button[0]}></GetStarted>

                              </Col>
                           </ul>
                        </div>
                     </div>
                  
               </Col>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={
                           CharacterAnimationService.CharacterAnimationServiceImagePath
                        }
                        alt="CharacterAnimationService.CharacterAnimationServiceImagePath"
                     ></img>
                  
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default VideoDevelopmentCharacterAnimation