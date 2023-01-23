import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import Link from 'next/link'
import { OTAWrittingService as writing, BlogWritingService } from './../../utilities/ContentWritingServices';
import GetStarted from '../Buttons/GetStarted';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
const OTAWriting = () => {
   return (
      <div>
         <Container>
            <Row>
               <Col lg={4} className="m-auto">
                  
                     <div className="StartUp">
                        <span class="BgText">{writing.heading}</span>
                        <Row className="OurServicesHeading">
                           <Col className="col-1"></Col>
                           <Col className="col-1 m-auto">
                              <i class="fas fa-long-arrow-alt-right text-primary"></i>
                           </Col>
                           <Col className="col-10">
                              
                                 <h2>{writing.title}</h2>
                              
                           </Col>
                        </Row>
                     </div>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <h6>
                        When you work with <Link href='/'>OTA</Link>, we align our content writing services with your <Link href="/social-media-management">brand’s business and marketing objectives</Link>, feeding your marketing machine the content it needs <Link href='/nft-staking-platform-development'>to create genuine outcomes for your company</Link>. Given our team's adaptation of the most recent news, trends, and insights, we dig deep into driving consumer attention to indelible memory through effective content writing tricks!
                        <ShowMoreContent>
                           <span>
                              Our creative content writing services are not just a breakthrough for your brand image. They are a clear representation of what your brand values stand for. <Link href='/portfolio'>We transform ideas into reality</Link> and give your audience exactly what they need. With more diversified industry experience as a professional content writing company, <Link href='/call-center-outsourcing'>we prioritize our customers and their needs first</Link>. Work with us and feel the difference.
                           </span>
                        </ShowMoreContent>
                     </h6>
                  
               </Col>
            </Row>
            <Row>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={BlogWritingService.BlogWritingServiceImgPath}
                        alt="BlogWritingService.BlogWritingServiceImgPath"
                     ></img>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span class="BgText">{BlogWritingService.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{BlogWritingService.title}</h2>
                              
                              
                                 <h6>
                                 <Link href='/blog'>Blogs are an incredible method for informing</Link>, teaching, and even engaging your target audience. High-grade blog writing services that not only aid in <Link href='/seo-services'>SEO but also increase site traffic</Link>.
                                    <ShowMoreContent>
                                       <span>
                                          We are the market experts when it comes to award-winning blog writing services, we believe in nothing but the best. Our core focus is to provide enriched and strong content that counts and hits like no other.
                                       </span>
                                    </ShowMoreContent>
                                 </h6>
                                 <Row>
                                    {BlogWritingService.list.map((li, id) => {
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
                                 <GetStarted buttonText={BlogWritingService.button[0]} buttonClass={BlogWritingService.button[1]} />
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

export default OTAWriting