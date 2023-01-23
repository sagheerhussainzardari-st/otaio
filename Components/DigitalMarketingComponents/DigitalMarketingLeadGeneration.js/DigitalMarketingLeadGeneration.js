import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { LeadGeneration } from '../../../utilities/SeoDigitalMarketingServices';
import ShowMoreContent from './../../ShowMoreText/ShowMoreContent';
import Buttons from './../../../UI/Buttons/Buttons';
import Link from 'next/link';
const DigitalMarketingLeadGeneration = () => {
   return (
      <div>
         <div className="mb-5">
            <Container>
               <Row>

                  <Col lg={7} className="m-auto">
                     
                        <div className="StartUp pt-5 mt-5">
                           <span className="BgText">{LeadGeneration.heading}</span>
                           <div className="OurServicesHeadingUl">
                              <ul>
                                 
                                    <h2>{LeadGeneration.title}</h2>
                                 
                                 
                                    <h6>
                                       We are experts in online lead generation, be it <Link href="/call-center-outsourcing">inbound advertising</Link> or account-based marketing. We create a lead executive process that is constantly evolving and self-sustaining.
                                       <ShowMoreContent>
                                          <span>
                                             We offer one of the best digital marketing services in the USA. Our extensive market experience of <Link href="digital-startup">generating sales revenue</Link> using our remarkable digital marketing services makes us one of the A-list companies with an exceptional track record. Being a leading <strong>digital marketing specialist</strong>, we always come up with solid practices combined with cutting-edge, ingenious ideas, which is why we always come up with a scheme that hits the jackpot.
                                          </span>
                                       </ShowMoreContent>
                                    </h6>
                                    <Row>
                                       {LeadGeneration.list.map((li, id) => {
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
                                 
                                 <Buttons link={"/lead-generation-services"} />
                              </ul>
                           </div>
                        </div>
                     
                  </Col>
                  <Col lg={5} className="m-auto">
                     
                        <img
                           className="w-100"
                           src={LeadGeneration.LeadGenerationImagePath}
                           alt="digital marketing in usa"
                        />
                     
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
   )
}

export default DigitalMarketingLeadGeneration