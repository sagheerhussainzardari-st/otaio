import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Bounce, Zoom, Fade } from 'react-reveal';
import { WhiteLabellingDesignDevelopment, WhiteLabellingWeDo, WhiteLabellingDigitalMarketing, BusinessAndSolutionsContent } from './../../utilities/whitelabellingservices';
import Link from 'next/link'
import GetStarted from '../Buttons/GetStarted';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
const WeDo = () => {
   return (
      <>
         <div>
            <Container>
               <Row>
                  <Col lg={4} className="m-auto">
                     
                        <div className="StartUp">
                           <span className="BgText">{WhiteLabellingWeDo.heading}</span>
                           <Row className="OurServicesHeading">
                              <Col className="col-1"></Col>
                              <Col className="col-1 m-auto">
                                 <i className="fas fa-long-arrow-alt-right text-primary"></i>
                              </Col>
                              <Col className="col-10">
                                 
                                    <h2>{WhiteLabellingWeDo.title}</h2>
                                 
                              </Col>
                           </Row>
                        </div>
                     
                  </Col>
                  <Col lg={7} className="m-auto">
                     
                        <h6>
                           We offer top-notch white labeling services to our valuable clients in the USA. The service is purely provided under the supervision of experienced and knowledgeable team members. Each of the <strong>white labeling services</strong> is designed with a result-oriented approach to give you an impressive return rate. We hope to add value to every process.
                           <ShowMoreContent>
                              <p>
                                 Our work profile is diversified across multiple businesses and industries. We strongly believe in coming up with bright ideas that outshine our clients and fill that product/service gap it was lacking. With more cumulative experience as a White Label Marketing Agency, we have helped create unique and subtle white labeling services which have directly impacted sales and improved web conversions.
                              </p>
                           </ShowMoreContent>
                        </h6>
                     
                  </Col>
               </Row>
               <Row>
                  <Col lg={5} className="m-auto">
                     
                        <img
                           className="w-100"
                           src={WhiteLabellingDesignDevelopment.DesignDevelopment}
                           alt="WhiteLabellingDesignDevelopment.DesignDevelopment"
                           decoding="async"
                        ></img>
                     
                  </Col>
                  <Col lg={7} className="m-auto">
                     
                        <div className="StartUp pt-5 mt-5">
                           <span className="BgText">
                              {WhiteLabellingDesignDevelopment.heading}
                           </span>
                           <div className="OurServicesHeadingUl">
                              <ul>
                                 
                                    <h2>{WhiteLabellingDesignDevelopment.title}</h2>
                                 
                                 
                                    <h6>
                                          <Link href='/web-development-services' >
                                             <a className='text-decoration-none'>
                                                Our design and development process &nbsp;
                                             </a>
                                          </Link>is carried out with keen attention to detail to enhance our <strong>white labeling services</strong> experience. The process kick starts after a deep insight into the current trends and your requirements to get quality results. Your business philosophy and idea are analyzed to come up with an appropriate strategy. Our job is done only when every step is well-aligned with what your business needs. Outsource to Asia’s <strong>
                                          <Link href='/creative-design-packages'>
                                             <a className='text-decoration-none'>
                                                creative designing
                                             </a>

                                          </Link>
                                       </strong> team are experts in delivering the following services with full commitment:
                                       <ShowMoreContent>
                                          <p>
                                             We have been telling the brand stories of clients all over the world, and we pride ourselves on dominating the niches with increased demographic reach. Our white label services are totally scalable and customized as per clients’ needs. Our team of <Link href="/social-media-management">dedicated in-house marketing</Link> heroes, media warriors, and design experts work together in a supremely aligned workflow to create a solution that matches both the brand image and the company profile. Our work ethic is purely professional, and we are not your typical white label agency. We work alongside you as your partners. Involved with every part of the process, our game plan is to keep our customers aligned with our work progress.
                                          </p>
                                       </ShowMoreContent>
                                    </h6>
                                    <Row>
                                       {WhiteLabellingDesignDevelopment.list.map((li, id) => {
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
                                    <GetStarted buttonText={`${WhiteLabellingDesignDevelopment.button[0]}`} buttonClass={`${WhiteLabellingDesignDevelopment.button[1]}`} />
                                 </Col>
                              </ul>
                           </div>
                        </div>
                     
                  </Col>
               </Row>
            </Container>
         </div>
         <div className="mt-5 pt-5">
            <Container>
               <Row>
                  <Col lg={7} className="m-auto">
                     
                        <div className="StartUp pt-5 mt-5">
                           <span className="BgText">
                              {WhiteLabellingDigitalMarketing.heading}
                           </span>
                           <div className="OurServicesHeadingUl">
                              <ul>
                                 
                                    <h2>{WhiteLabellingDigitalMarketing.title}</h2>
                                 
                                 
                                    <p>
                                    </p>
                                    <p>
                                       Digital marketing is without a doubt the foundation of each business. From SEO to Social Media outsourcing, trust our white labeling team to present to you the most refined and <Link href="/digital-marketing-services">affordable digital marketing services</Link> for you, and your clients. Share your needs and requirements with us and the rest will be efficiently handled at our end. Get a chance to experience an <Link href="/lead-generation-services">instant boost to your business through increased traffic, reach, and conversions.</Link> The perfect opportunity to build brand awareness, gain a competitive edge, and organically expand your customer base.
                                       Here is a list of our digital marketing services
                                       <ShowMoreContent>
                                          <span>Looking for high-quality, affordable, and exceptional marketing solutions? We have got you covered. Other than making something entirely out of the box, we are also known to work with different budgeted campaigns of businesses, big or small. Our work code is simple, give your best and enjoy the fruits.
                                          Grow your business by employing our uncanny level of commitment and unmatched effort to <Link href="/creative-design-packages">establish your brand identity</Link> into the elite circle. We are committed to bringing your digital problems to an end and bringing online prosperity to your brand’s performance needs.</span>
                                       </ShowMoreContent>
                                    </p>
                                    <Row>
                                       {WhiteLabellingDigitalMarketing.list.map((li, id) => {
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
                                    <GetStarted buttonText={`${WhiteLabellingDigitalMarketing.button[0]}`} buttonClass={`${WhiteLabellingDigitalMarketing.button[1]}`} />
                                 </Col>
                              </ul>
                           </div>
                        </div>
                     
                  </Col>
                  <Col lg={5} className="m-auto">
                     
                        <img
                           className="w-100"
                           src={
                              WhiteLabellingDigitalMarketing.WhiteLabellingDigitalMarketingImage
                           }
                           loading='lazy'
                           alt="WhiteLabellingDigitalMarketing.WhiteLabellingDigitalMarketingImage"
                        ></img>
                     
                  </Col>
               </Row>
            </Container>
         </div>
         <div className="mt-5 pt-5 mb-5">
            <Container>
               <Row>
                  <Col lg={5} className="m-auto">
                     
                        <img
                           className="w-100"
                           src={
                              BusinessAndSolutionsContent.BusinessAndSolutionsContentImagePath
                           }
                           alt="BusinessAndSolutions"
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
                                 
                                 
                                    <p>
                                       If you need any help with <Link href="/outsource-human-resources">growing business online</Link>, we are here for you. At <Link href="/"> Outsource To Asia </Link>, we provide our partners with limitless possibilities for expanding and becoming more perceptible to the rest of the globe.
                                       <ShowMoreContent>
                                       <span>Boost your business today by reaching out to us, we are a need-based online solutions provider that works closely with our clients strictly functioning on their interests. <Link href="/web-development-services">Our custom-made designs exceed the expectations</Link> of our customers globally. We set your brand apart from other competitors in the market.</span>
                                       </ShowMoreContent>

                                    </p>
                                    <Row>
                                       {BusinessAndSolutionsContent.list.map((li, id) => {
                                          if (id > 3) {
                                             return (
                                                <Col lg={6}>
                                                   <li>
                                                      <b>{li}</b>
                                                   </li>
                                                </Col>
                                             );
                                          }
                                          return (
                                             <li>
                                                <b>{li}</b>
                                             </li>
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
      </>
   )
}

export default WeDo