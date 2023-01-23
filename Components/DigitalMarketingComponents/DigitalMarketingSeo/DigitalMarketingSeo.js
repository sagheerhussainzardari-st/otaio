import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { SearchEngineOptimization, TheExpertiseOf } from '../../../utilities/SeoDigitalMarketingServices';
import ShowMoreContent from '../../ShowMoreText/ShowMoreContent';
import Buttons from '../../../UI/Buttons/Buttons';
import Link from 'next/link'
const DigitalMarketingSeo = () => {
   return (
      <div>

         <Container>
            <Row>
               <Col lg={4} className="m-auto">
                  
                     <div className="StartUp">
                        <span className="BgText">{TheExpertiseOf.heading}</span>
                        <Row className="OurServicesHeading">
                           <Col className="col-1"></Col>
                           <Col className="col-1 m-auto">
                              <i className="fas fa-long-arrow-alt-right text-primary"></i>
                           </Col>
                           <Col className="col-10">
                              
                                 <h2>{TheExpertiseOf.title}</h2>
                              
                           </Col>
                        </Row>
                     </div>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <h6>
                        In need of <strong>affordable digital marketing services</strong> for your local business? We gander at things with your perspective, with a fresh mind. We pursue your progress so we can give you - an extravagance of commitment, deals leading stocks to run out, and perks tearing your pockets apart. We convey quality content writing, not bogus guarantees, ensuring we boost your financial plan, so you get max returns on investment (ROI).
                        <ShowMoreContent>
                           <span>
                              Whether it’s about <strong>affordable digital marketing services</strong> for a local business or a global giant, our firm specializes in delivering custom-made digital solutions that shine. With each project, we learn something new, which motivates our team of strategy architects and marketing specialists to build a different impactful blueprint that matches your business infrastructure and brand aura.
                           </span>
                        </ShowMoreContent>
                     </h6>
                  
               </Col>
            </Row>
            <Row>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={SearchEngineOptimization.SearchEngineOptimizationImagePath}
                        alt="best digital marketing services"
                     ></img>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">{SearchEngineOptimization.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{SearchEngineOptimization.title}</h2>
                              
                              
                                 <h6>
                                    Get top rankings for desired search terms and drive qualified leads with effective keyword research and competitors analysis with our <strong>best digital marketing services.</strong> Let us propel your website to the highest point of the internet search results that are pivotal to building your business. The important factors affecting your SEO success probability are: <ShowMoreContent>
                                       <span>
                                          As proven <strong>digital marketing strategists</strong>, we believe in combining our calculated conversion strategies with conclusive keyword optimization to bring your visible presence into the limelight and make your website a pleasant experience. Our <Link href="/seo-services">local packages</Link> are a combination of innovative wonders and insightful marketing that capitalizes on your demographics. We are just a click away when you are looking for
                                          <strong>digital marketing expert </strong>services.
                                       </span>
                                    </ShowMoreContent>

                                 </h6>
                                 <Row>
                                    {SearchEngineOptimization.list.map((li, id) => {
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
                              
                              <Buttons link={"/seo-services"} />

                           </ul>
                        </div>
                     </div>
                  
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default DigitalMarketingSeo