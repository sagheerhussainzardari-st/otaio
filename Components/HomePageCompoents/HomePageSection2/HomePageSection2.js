import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from "react-reveal";
import GetStarted from '../../Buttons/GetStarted';
import ShowMoreContent from '../../ShowMoreText/ShowMoreContent';
const HomePageSection2 = () => {

   return (
      <>
         <div className="section2 pb-5" id="section2">
            <Container>
               <Row>
                  <Col lg={6} className="ota_Bg">
                     {/* </Fade left> */}
                        <div className="whyChooseOta">
                           <h3 className="text-dark font-size-36 font-weight-bold">Why Choose</h3>
                           <h2>Outsource to Asia</h2>
                           <Row>
                              <Col className="col-1 mt-4">
                                 <i className="fas fa-long-arrow-alt-right text-primary"></i>
                              </Col>
                              <Col className="col-11">
                                 <h3>A Wide Array of Services Provided Under One Roof</h3>
                                 <p>
                                    From the nascent stages of design &#38; development to advertising it on the internet, we offer a slew of services to help you establish your brand in the digital world.
                                    Creative Web &#38; Logo Design
                                    , web and <Link href="/ios-android-app-development">app development</Link>, <Link href="/web-development-services">custom CMS & e-commerce development,</Link> SEO, SEM, SMO, Video Animation, Content Writing, and Cyber Security are just a few of the services our full-service<Link href='/digital-marketing-services'> digital marketing agency</Link> delivers.
                                    <ShowMoreContent>
                                       <p>
                                          We are a custom web development company with a key <Link href='/nft-staking-platform-development'>focus on providing a smooth and steady customer experience</Link> that is second to none. We are best known for meeting our deadlines efficiently and <Link href="/digital-startup">helping digital startups</Link> reach their full potential.
                                       </p>
                                       <p>
                                          As an experienced digital media agency, we have the art of producing powerful designs that are beneficial in <Link href="/lead-generation-services">maximizing your sales ratios</Link>. Your partnership with us is something we cherish with a track record of an established customer-centric firm.
                                       </p>
                                    </ShowMoreContent>
                                 </p>
                              </Col>
                           </Row>
                           <Row>
                              <Col lg={1}></Col>
                              <Col lg={4}>
                                 <GetStarted buttonText={` Get Started`} buttonClass={`getStarted-btn`} />
                              </Col>
                           </Row>
                        </div>
                        <div className="whyChoose">
                           <Row>
                              <Col className="col-1">
                                 <i className="fas fa-long-arrow-alt-right text-primary"></i>
                              </Col>
                              <Col className="col-11">
                                 <h3>
                                    High-Quality Services Paired With Seamless Customer
                                    Support
                                 </h3>
                                 <p>
                                    Our projects are always accomplished within time, with no compromises on quality. We have a strong quality control procedure in place to guarantee that everything we supply meets and even exceeds the expectations of our clients. <Link href="/call-center-outsourcing">Our customer support team works around the clock</Link> for flawless communication with both prospects and existing clients.
                                    <ShowMoreContent>
                                       <p>
                                          With an extended portfolio, our team has worked with various clients on projects consisting of app development, digital marketing such as SEO, social media marketing, lead generation, video animations, content development, etc. Our professional group of leading designers makes sure you get the best creative composition of brand values that your organization possesses.
                                       </p>
                                    </ShowMoreContent>
                                 </p>
                              </Col>
                           </Row>
                           <Row>
                              <Col lg={1}></Col>
                              <Col lg={4}>
                                 <GetStarted buttonText={` Get Started`} buttonClass={`getStarted-btn`} />
                              </Col>
                           </Row>
                        </div>
                     
                  </Col>
                  <Col lg={6} className="m-auto">
                     {/* </Fade right> */}
                        <div className="whyChooseOta">
                           <Row>
                              <Col className="col-1 mt-3">
                                 <i className="fas fa-long-arrow-alt-right text-primary"></i>
                              </Col>
                              <Col className="col-11">
                                 <h3>An Awe-inspiring Digital Agency Experience</h3>
                                 <p>
                                    We're a cluster of young, energetic, and innovative minds that go above and beyond to solve your problems. <Link href='/e-commerce-solutions'>We develop eye-catching websites</Link>, engaging content, strategize distinctive campaigns, and help companies expand by turning followers into customers. We've established a plethora of success stories by assisting brands in growing their businesses online. <Link href='/smart-contracts-development'>Working with us means collaborating with a group</Link> of articulate writers, tech geeks, and visionary minds who will assist you in increasing lead generation, sales prospects, and revenue.
                                    <ShowMoreContent>
                                       <p>
                                          We are the perfect blend of digital transformation and grow-your-business tactics with premium <Link href="/white-label-agency">white labeling services</Link>. Our solutions are purely based on your collective goals and momentum, we keep our objectives deeply aligned with yours that’s why we win when you win. So if you are looking for something out of the ordinary, we are just what you need.
                                       </p>
                                    </ShowMoreContent>
                                 </p>
                              </Col>
                           </Row>
                           <Row>
                              <Col lg={1}></Col>
                              <Col lg={4} className="m-auto">
                                 <Link href="/about-us">
                                    <a className="learn-btn">
                                       Read to Learn
                                    </a>
                                 </Link>
                              </Col>
                              <Col lg={4} className="m-auto">
                                 <GetStarted buttonText='Get Started' buttonClass='getStarted-btn' />
                              </Col>
                              <Col></Col>
                           </Row>
                        </div>
                     
                  </Col>
               </Row>
            </Container>
         </div>
      </>
   )
}
export default HomePageSection2