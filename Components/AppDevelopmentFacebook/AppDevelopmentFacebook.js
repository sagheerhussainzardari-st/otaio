import React from 'react'
import { BusinessAndSolutionsContent } from '../../utilities/AppDevelopmentServices';
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import GetStarted from '../Buttons/GetStarted';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const AppDevelopmentFacebook = () => {
   return (
      <div className="mb-5">
         <Container>
            <Row>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={
                           BusinessAndSolutionsContent.BusinessAndSolutionsContentImagePath
                        }
                        alt="BusinessAndSolutionsContent.BusinessAndSolutionsContentImagePath"
                     ></img>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">
                           {BusinessAndSolutionsContent.heading}
                        </span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{BusinessAndSolutionsContent.title}</h2>
                              
                              
                                 <h6>
                                    An application for a preeminent <Link href="/social-media-management">social platform- Facebook</Link>. The odds of raking a higher user base and consequently your business growth greatly increases by landing your app on the leading social platform.
                                    <ShowMoreContent>
                                    As a market-leading ios app development company, we try our best to construct an idea-based app development blueprint that is an exact transformation of the customer’s perception coming to reality. The idea of making something that clicks is what we emphasize.
                                       </ShowMoreContent>
                                 </h6>
                                 <Row>
                                    {BusinessAndSolutionsContent.list.map((li, id) => {
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
                                 <GetStarted buttonText={BusinessAndSolutionsContent.button[0]} buttonClass={BusinessAndSolutionsContent.button[1]} />
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

export default AppDevelopmentFacebook