import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Bounce, Zoom, Fade } from 'react-reveal';
import GetStarted from '../../Buttons/GetStarted';
import { LeadGenServices1 as facebookAdd, LeadGenServices2 as googlePPC, LeadGenServices3 as igCreatives } from '../../../utilities/LeadGenerationServices';
import ShowMoreContent from './../../ShowMoreText/ShowMoreContent';
import Link from 'next/link';

const LeadGenServices = () => {
   return (
      <div>
         <Container>
            <Row>
               <Col lg={4} className="m-auto">
                  
                     <div className="StartUp">
                        <span className="BgText">Improvise</span>
                        <Row className="OurServicesHeading">
                           <Col className="col-1"></Col>
                           <Col className="col-1 m-auto">
                              <i className="fas fa-long-arrow-alt-right text-primary"></i>
                           </Col>
                           <Col className="col-10">
                              
                                 <h2>Your sales game plan!</h2>
                              
                           </Col>
                        </Row>
                     </div>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <h6>
                        <Link href='/nft-staking-platform-development'>Working with you smartly all the way</Link> to create a marketing system that amplifies your business and proves to be successful in delivering the right ROI targets, that’s what we do for you. We are a USA-based <strong>
                           Facebook and Instagram marketing agency</strong> providing impactful tools and designs for maximum influence online. Every opportunity is being capitalized on with our <strong>PPC management services,</strong> and none are missed in the process is what we ensure. Allow us to bring in our Lead-Gen A-Game!
                        <ShowMoreContent>
                           <p>
                              Our state-of-the-art agency is known to be the process optimizers and sales winners when it comes to providing the <strong>best lead generation services</strong> and <strong>Google ads management services.</strong> Our motto is to get you the desired results and live up to your expectations with our <strong>pay per click management services</strong> every time we perform a task for you. Our <strong>PPC lead generation</strong> and digital <strong>marketing services</strong> are incomparable and on-point.
                           </p>

                        </ShowMoreContent>
                     </h6>
                  
               </Col>
            </Row>
            <Row>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={facebookAdd.DevelopBrandPersonaImagePath}
                        alt="facebookAdd.BlogWritingServiceImgPath"
                     ></img>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">{"Engaging"}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>Facebook Ads</h2>
                              
                              
                                 <h6>
                                    <p>
                                       Infused with relevant ads, our core focus is to make the most of this competitive platform with our unmatched Facebook lead generation services that bring in more traffic, ultimately transforming into potential leads. We are a result-oriented and growth-enhancing outsource Facebook marketing firm that centers on driving sales and improvising visibility.Some of the crucial aspects to be considered before  starting a Facebook marketing campaign are:
                                       <ShowMoreContent>
                                          <p>Social media has the power to transform anything beneficial when used in the right context at the right time. Facebook is known as one of the best customer-engaging and lead-grabbing platforms today. With our Facebook marketing experts working tirelessly for you, the overall experience becomes amazing. Our goal is to provide the best Facebook advertising services to our clients globally.</p>
                                          <p>
                                             Our key focus is to get your brand the spotlight that it deserves. Known to have one of the best Facebook marketing experts assembled under our roof, we keep it highly integrated into our winning outsource Facebook marketing strategy, giving you the most refined results.
                                          </p>

                                       </ShowMoreContent>
                                    </p>
                                 </h6>
                                 <Row>
                                    {facebookAdd.list.map((li, id) => {
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
                                 <GetStarted buttonClass="getStarted-btn" buttonText='Get Started' />
                              </Col>
                           </ul>
                        </div>
                     </div>
                  
               </Col>
            </Row>
            <Row>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">{googlePPC.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{googlePPC.title}</h2>
                              
                              
                                 <h6>
                                    <p>
                                       We are a full-service <Link href="/digital-marketing-services">digital marketing agency</Link> laser-focused on converting the maximum number of qualified potential <strong>PPC leads</strong> with our exceptional <strong>PPC lead generation services</strong>. But to get the top-rated visibility among other competitive giants in the market is something of a challenge itself. With our awe-inspiring <strong>Google ads management services,</strong> you don’t have to worry about your visibility issues anymore. Some of the determining factors for the success of your PPC campaign are:
                                       <ShowMoreContent>
                                          <p>
                                             Our team of PPC warriors uses their industry-proven experience to accelerate sales conversions and drive demand-consumed buyers to your website, providing the most astounding <strong>PPC management services.</strong> By employing our cost-effective <strong>pay per click management services</strong>, you get the exact customer base looking to acquire what you offer. Hop in with us to get the most boost-up sales than ever!
                                          </p>
                                       </ShowMoreContent>
                                    </p>
                                 </h6>
                                 <Row>
                                    {googlePPC.list.map((li, id) => {
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
                                 <GetStarted buttonClass="getStarted-btn" buttonText='Get Started' />
                              </Col>
                           </ul>
                        </div>
                     </div>
                  
               </Col>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={googlePPC.DevelopBrandPersonaImagePath}
                        alt="googlePPC.BlogWritingServiceImgPath"
                        decoding="async"
                     ></img>
                  
               </Col>
            </Row>
            <Row className="my-2">
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={igCreatives.DevelopBrandPersonaImagePath}
                        alt="igCreatives.BlogWritingServiceImgPath"
                     ></img>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">{igCreatives.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{igCreatives.title}</h2>
                              
                              
                                 <h6>
                                    We offer one of the top-rated Instagram marketing services in the market. Our clients enjoy the full-scale line-up of specialized Instagram advertising services that complement your business. We strive hard for your brand to make a convincing statement in the market with a creative and engaging Instagram ads management strategy. Instagram requires a different strategy altogether:
                                    <ShowMoreContent>
                                       <p>
                                          Instagram is one of the most popular platforms these days, and it’s getting more popular among youngsters. It’s a great place to drive traffic and gain potential leads. With our unparalleled Instagram advertising services, we brought you the best-sorted outsource Instagram marketing services and elevated Instagram lead generation game plan that ignites emotion and derives results.
                                       </p>
                                       <p>
                                          Having an Instagram presence surely does <Link href="/web-development-services">add to your brand image online</Link>. With a large number of the world population using Instagram for all the creative and personal reasons, makes it a potential platform to benefit from. With our team of dedicated outsource Instagram marketing strategists and high-quality Instagram lead generation services, you get the maximum visibility and visual coverage of your brand online. You get the best Instagram ads management experience when you employ our services.
                                       </p>
                                    </ShowMoreContent>

                                 </h6>
                                 <Row>
                                    {igCreatives.list.map((li, id) => {
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
                                 <GetStarted buttonClass="getStarted-btn" buttonText='Get Started' />
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

export default LeadGenServices