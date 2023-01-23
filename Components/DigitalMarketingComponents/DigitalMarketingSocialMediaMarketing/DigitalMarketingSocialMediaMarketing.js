import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { SocialMediaMarketing } from '../../../utilities/SeoDigitalMarketingServices';
import GetStarted from '../../Buttons/GetStarted';
import ShowMoreContent from '../../ShowMoreText/ShowMoreContent';
import Buttons from './../../../UI/Buttons/Buttons';
import Link from 'next/link';

const DigitalMarketingSocialMediaMarketing = () => {
   return (
      <div>
         <Container>
            <Row>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">{SocialMediaMarketing.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{SocialMediaMarketing.title}</h2>
                              
                              
                                 <h6>
                                    Amplify your brand awareness with Outsource to Asia’s in-house SMM Experts who are highly qualified in managing campaigns for different Social Media Marketing channels like Facebook, Instagram, Pinterest, Twitter, Reddit, and LinkedIn.
                                    <ShowMoreContent><span>Our experts generate ideas for your <Link href="/creative-design-packages">brand’s visibility</Link> and integrity, delivering our unmatched <b>digital marketing services.</b> We have a team of creative digital marketing strategists who are determined to produce flawless compositions that create value and help your online needs.</span></ShowMoreContent>
                                 </h6>
                                 <Row>
                                    {SocialMediaMarketing.list.map((li, id) => {
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
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={SocialMediaMarketing.SocialMediaMarketingImagePath}
                        alt="digital marketing services usa"
                     ></img>
                  
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default DigitalMarketingSocialMediaMarketing