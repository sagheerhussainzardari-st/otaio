import React from 'react'
import GetStarted from '../Buttons/GetStarted';
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { SocialMediaDesign } from '../../utilities/CreativeDesignWowCustomers';
import Link from 'next/link';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
const CreativeDesignSocialMedia = () => {
   return (
      <div>
         <div className="mt-5 pt-5">
            <Container>
               <Row>
                  <Col lg={5} className="m-auto">
                     
                        <img
                           className="w-100"
                           src={SocialMediaDesign.SocialMediaDesignImagePath}
                           alt="custom logo design packages"
                        ></img>
                     
                  </Col>
                  <Col lg={7} className="m-auto">
                     
                        <div className="StartUp pt-5 mt-5">
                           <span className="BgText">{SocialMediaDesign.heading}</span>
                           <div className="OurServicesHeadingUl">
                              <ul>
                                 
                                    <h2>{SocialMediaDesign.title}</h2>
                                 
                                 
                                    <p>
                                       Our designers have fostered an effective design strategy to help your brand image be impactful and remembered with clean, clear, and unique graphics that match your brand's visual identity. Grasping the <strong><Link href='/social-media-management'> power of social media </Link></strong> that:
                                       <ShowMoreContent>
                                         <span>
                                         We are in the business of changing perceptions with our bright ideas and creative insight. Our efficacious strategies and competent campaigns bring in the best audience based on your given demographical filters with our affordable logo design packages. <Link href="/lead-generation-services">We help all kinds of businesses achieve their goals</Link> using our cost-effective web design and logo packages. Our job is to make you look good, and we are good at it.
                                         </span>
                                       </ShowMoreContent>
                                    </p>
                                    <Row>
                                       {SocialMediaDesign.list.map((li, id) => {
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
                                 
                                 <Col lg="3">
                                    <GetStarted buttonClass={SocialMediaDesign.button[1]} buttonText={SocialMediaDesign.button[0]} />

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

export default CreativeDesignSocialMedia