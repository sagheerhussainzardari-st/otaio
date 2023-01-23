import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { SocialMediaManagement as SMM } from '../../../utilities/SeoDigitalMarketingServices';
import ShowMoreContent from '../../ShowMoreText/ShowMoreContent';
import Buttons from './../../../UI/Buttons/Buttons';
import Link from 'next/link'
const SocialMediaManagement = () => {
   return (
      <div>
         <Container>
            <Row>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={SMM.SocialMediaMarketingImagePath}
                        alt="digital marketing"
                     ></img>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">{SMM.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{SMM.title}</h2>
                              
                              
                                 <h6>
                                    Enrich your social media feed with stunning, sensational, and flamboyant <Link href="/creative-design-packages">graphics and illustrations</Link>, piquing your audience's interest and keeping them coming back for more.
                                    <ShowMoreContent>A carefully constructed social media campaign using our online digital marketing services can increase your online traffic, enhance sales revenue and escalate your brand awareness. We keep a dynamic approach; old-school marketing is out of the window now. We are hip, we are now. We are the modern age, digital marketing experts.</ShowMoreContent>
                                 </h6>
                                 <Row>
                                    {SMM.list.map((li, id) => {
                                       if (id < 4) {
                                          return (
                                             <Col lg={6} key={id}>
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
                              
                              <Buttons link={"/social-media-management"} />
                           </ul>
                        </div>
                     </div>
                  
               </Col>

            </Row>
         </Container>
      </div>
   )
}

export default SocialMediaManagement