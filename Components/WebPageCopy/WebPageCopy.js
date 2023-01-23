import React from 'react'
import { BusinessAndSolutionsContent } from '../../utilities/ContentWritingServices';
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Link from 'next/link';
import GetStarted from '../Buttons/GetStarted';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent'
const WebPageCopy = () => {
   return (
      <div className="mt-5 pt-5 mb-5">
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
                        <span class="BgText">
                           {BusinessAndSolutionsContent.heading}
                        </span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{BusinessAndSolutionsContent.title}</h2>
                              
                              
                                 <p>
                                    Without good content, even an impeccably designed website will struggle to engage visitors, let alone <Link href='/digital-startup' >generate leads</Link>. Our expert copywriters churn out
                                     <Link href='/web-development-services' > high-quality web copies </Link>
                                     that are compelling, gripping, and relevant.
                                    <ShowMoreContent>
                                       <span>
                                       Our professional content writers produce high-performance, engaging web copies that not only turn heads around but also bring in sales. We are proficient in <Link href='/social-media-management'>creating marketing-focused</Link> web copies that are all about grabbing public attention and gaining popularity for all the right marketing reasons. Let us work our magic.
                                       </span>
                                       </ShowMoreContent>
                                 </p>
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
                                 <GetStarted buttonText={`${BusinessAndSolutionsContent.button[0]}`} buttonClass={`${BusinessAndSolutionsContent.button[1]}`} />
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

export default WebPageCopy