import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Bounce, Zoom, Fade } from 'react-reveal';
import GetStarted from '../../Buttons/GetStarted';
import { BasicSMM as fb, DesignCustomSMM as insta, LinkedServices } from '../../../utilities/AboutSmm';
import OurVideo from '../../OurVideo/OurVideo';
import Heading from '../../MainHeading/Heading';
import ShowMoreContent from './../../ShowMoreText/ShowMoreContent';
import Wrapper from '../../../HigherOrderWrappers/Wrapper/Wrapper';
import Link from 'next/link'
import SMMPricing from '@/components/Tabs/SMMPricing';
const SMMServices = () => {
   return (
      <div>
         <Container>
            <Row>
               <Col lg={4} className="m-auto">
                  
                     <div className="StartUp">
                        <span className="BgText">{"Proactive"}</span>
                        <Row className="OurServicesHeading">
                           <Col className="col-1"></Col>
                           <Col className="col-1 m-auto">
                              <i className="fas fa-long-arrow-alt-right text-primary"></i>
                           </Col>
                           <Col className="col-10">
                              
                                 <h4>{'Approach to your marketing needs!'}</h4>
                              
                           </Col>
                        </Row>
                     </div>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <h6>
                        <p>
                           Our cut-through <strong>Facebook page management services</strong> and <Link href="/digital-startup">sales-generating strategies</Link> make us a good-to-go option. Whether you are looking for a <Link href="/lead-generation-services">lead generation service</Link> or a social media ad campaigning, our <strong> outsource social media content</strong> engineers are always up for the challenge and always looking to get you the next-level gig with our superb <strong>social media management services.</strong>
                           <ShowMoreContent>
                              <span>
                                 We are a tested-and-proven <strong>outsource social media marketing</strong> service provider, with our help you get to improve your product sales, build a strong social media presence, acquire more visibility with smart <strong>social content creation</strong> and get more captivating results. We bring out the best in you with our befitting <strong>social media content writing services</strong>. Your competitors won’t see it coming!
                              </span>
                           </ShowMoreContent>
                        </p>
                     </h6>
                  
               </Col>
            </Row>
            <Row className='my-5'>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={"/Assets/Services/SMM/facebook-marketing.png"}
                        alt="instagram management agency"
                     ></img>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">FB</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{"Facebook Marketing"}</h2>
                              
                              
                                 <h6>
                                    Our social media strategists are always curious to try <a href='https://www.forbes.com/sites/forbesbusinesscouncil/2021/11/02/how-to-leverage-social-media-to-grow-a-company/?sh=3a7b08f26379'>new and innovative ways to grow business via social media marketing</a> with our concentrated <strong>Facebook page management services</strong>. With us on board, you get better results from Facebook marketing and advertising. We provide your business with turn-key <strong>social media marketing services</strong> that go beyond expectations with our specialized team of Facebook gurus. Prioritizing your brand image and social media marketing needs, you always come first to us. What you need to factor in before starting your marketing campaign:
                                    <ShowMoreContent>
                                       We are a productive and developmental <strong>outsource social media marketing</strong> company that is focused on grabbing more heads to be transformed into your customer base with exceptional <strong>social content creation</strong> and engagement tactics. We strive hard to get your brand to connect with its appropriate audiences on all social media platforms using our <strong>social media community management services.</strong> The engagement of a brand with its audience is something we concentrate on with our on-point <strong>social media optimization services.</strong>

                                    </ShowMoreContent>
                                 </h6>
                                 <Row>
                                    {React.Children.toArray(
                                       fb.list.map((li, id) => {
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
                                       })
                                    )}
                                 </Row>
                              
                              <Col lg="3">
                                 <GetStarted buttonText={"Get Started"} buttonClass={`getStarted-btn`} />
                              </Col>
                           </ul>
                        </div>
                     </div>
                  
               </Col>
            </Row>
            <Row className='my-5'>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">Insta</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>Instagram Marketing</h2>
                              
                              
                                 <h6>
                                    With our exceptional team of Instagram growth champions, we are regarded as one of the leading <strong>Instagram management agencies</strong> in the market. The fact that we are hell-bent on making your brand reach its highest point becomes more visible when compared with rival competing brands in the mix. Factors involved with our strategy are:
                                    <ShowMoreContent>
                                       <p>
                                          When you employ our <strong>social media content creation services</strong> , you get the added benefits of visible growth in your followers, enhanced engagement, and more sales opportunities. Not just that, we do offer <strong>Instagram growth management services</strong> as well. With our <strong>outsource social media content</strong> innovators hard at work, you get to see a rapid boost in sales revenues.
                                       </p>
                                       <p>No more fading sales, our team at OTA prioritizes your brand image and social media marketing needs first. We are an <strong>Instagram management agency</strong> that reports a campaign’s reach, sales, clicks, and impressions so you can get a clear idea of differences in numbers with our <strong>Instagram management services.</strong> All-in-all, we are ultimately focused on getting you the outcome you are looking for.</p>
                                    </ShowMoreContent>
                                 </h6>
                                 <Row>
                                    {React.Children.toArray(
                                       insta.list.map((li, id) => {
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
                                       })
                                    )}
                                 </Row>
                              
                              <Col lg="3">
                                 <GetStarted buttonText={"Get Started"} buttonClass={`getStarted-btn`} />
                              </Col>
                           </ul>
                        </div>
                     </div>
                  
               </Col>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={"/Assets/Services/SMM/instagram-marketing.png"}
                        alt="social media marketing services"
                     ></img>
                  
               </Col>
            </Row>
            <Row className='my-5'>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={"/Assets/Services/SMM/linkedin-marketing.png"}
                        alt="outsource social media content"
                     ></img>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">Efficient</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>Linked-In Marketing</h2>
                              
                              
                                 <h6>
                                    Grow your business and drive more results with our Linked-In professional growth kings. Industry experienced <strong> management agency</strong> in generating leads and enhancing sale opportunities, we are one of the leading marketing agencies in the USA providing unmatched <strong>social media management services.</strong> With Linked-In, you get the leads from a professional community which is a benefit itself. How will this work for you, let’s take a look:
                                    <ShowMoreContent>
                                       <span>
                                          Our <strong>outsource social media management</strong> tigers have the right tools to work out a game plan that augments the <Link href="/digital-marketing-services">digital marketing strategy</Link> in turn generating qualified leads with absolute potential. Connecting your target market with your <Link href="/call-center-outsourcing">inbound sales strategy </Link> to maximize efforts is what we do best offering the best <strong>social media marketing services.</strong> You can put your trust in us, we believe in winning it all.
                                       </span>

                                    </ShowMoreContent>
                                 </h6>
                                 <Row>
                                    {React.Children.toArray(
                                       LinkedServices.list.map((li, id) => {
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
                                       })
                                    )}
                                 </Row>
                              
                              <Col lg="3">
                                 <GetStarted buttonText={"Get Started"} buttonClass={`getStarted-btn`} />
                              </Col>
                           </ul>
                        </div>
                     </div>
                  
               </Col>

            </Row>

         </Container>
         <Container fluid>
            <Row>
               <Wrapper>
                  <Container>
                     <Row>
                        <Col lg={12} className="m-auto">
                           <Heading
                              Heading="Social Media Marketing"
                              tagline="To provide substantial value and savings to our clients, we have designed three website packages for you."
                           />
                        </Col>
                     </Row>
                     <SMMPricing />
                     <Row className="mt-5">
                        <Col lg={4}></Col>
                        <Col lg={6} className="m-auto">
                           <div className="watch">
                              <svg width="100%">
                                 <defs>
                                    <linearGradient id="gradient" y1="0" y2="1">
                                       <stop stopColor="#054084" offset="0" />
                                       <stop stopColor="#054084" offset="1" />
                                    </linearGradient>
                                 </defs>
                                 <g>
                                    <text
                                       id="text"
                                       y="103"
                                       strokeWidth="1"
                                       stroke="url(#gradient)"
                                       fill="rgb(0, 0, 0,0.2)"
                                    >
                                       Watch
                                    </text>
                                 </g>
                              </svg>
                           </div>
                        </Col>
                     </Row>
                     <OurVideo />
                  </Container>
               </Wrapper>
            </Row>

         </Container>
      </div>
   )
}

export default SMMServices