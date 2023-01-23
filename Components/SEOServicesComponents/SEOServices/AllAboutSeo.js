import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Bounce, Zoom, Fade } from 'react-reveal';
import { BasicSEO, OptimizedSEO1, OptimizedSEO2, OptimizedSEO3, OptimizedSEO4 } from '../../../utilities/SerServicesUtils';
import GetStarted from '../../Buttons/GetStarted';
import ShowMoreContent from './../../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const AllAboutSeo = () => {
   return (
      <div>
         <Container className='searchengineoptimization'>
            <Row>
               <Col lg={4} className="m-auto ">
                  
                     <div className="StartUp">
                        <span className="BgText">{"Explore"}</span>
                        <Row className="OurServicesHeading">
                           <Col className="col-1"></Col>
                           <Col className="col-1 m-auto">
                              <i className="fas fa-long-arrow-alt-right text-primary"></i>
                           </Col>
                           <Col className="col-10">
                              
                                 <h4 className='font-weight-bolder'>The Prowess That Wins!</h4>
                              
                           </Col>
                        </Row>
                     </div>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <h6>
                        Whether you are a small business or a large corporation, our team of <strong>SEO outsourcing</strong> gurus will develop a custom-made strategy for your business based on your organizational goals and brand needs. Feel the difference when you come on board with us.
                        <ShowMoreContent>
                           <p>Offering one of the best <strong>SEO services in the USA</strong>, don’t hesitate to put forward your concerns about website performance, we have a team of distinctive SEO strategists and planners that work hard to get you the desired results. We are one of the <strong> best local SEO companies</strong> offering customized <strong>affordable SEO services</strong> that align best with your business needs and brand image. A well-optimized website ignites visibility and ensures more traffic conversion, with our cost-friendly <strong>local SEO services pricing</strong>, you get your best features highlighted. Whatever you want, we can make it happen. Trust our technique.</p>
                        </ShowMoreContent>
                     </h6>
                  
               </Col>
            </Row>
            <Row className='my-5'>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={BasicSEO.BasicWebsiteImagePath}
                        alt="BasicWebsite.BasicWebsiteImagePath"
                     ></img>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">{"SEO"}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>On-Page Optimization</h2>
                              
                              
                                 <h6>
                                    We understand the importance of on-page SEO for your website and that is why we offer economical <strong>local SEO packages</strong>. This is why we have an unmatched and zealous team of <strong>local SEO specialists</strong> that work round the clock to convert your sales dreams into a definitive reality with one of the best <strong>SEO services in the USA</strong>. Some of the on-page ranking factors include:
                                    <ShowMoreContent>
                                       <span>Our objective is to research thoroughly and bring the best practices into action to get the <Link href="/lead-generation-services">top rankings and qualified leads </Link>. When you employ our <strong>SEO services for local businesses</strong>, you get the most comprehensive and web-optimized user experience that satisfies.</span>
                                    </ShowMoreContent>
                                 </h6>
                                 <Row>
                                    {React.Children.toArray(
                                       BasicSEO.list.map((li, id) => {
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
                        <span className="BgText">SEO</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>Off-Page Optimization</h2>
                              
                              
                                 <h6>
                                    We are a <strong>local SEO services company</strong> that provides enriched off-page SEO services that portray an expanded brand image of your company in the best way possible. With strong backlinking strategies and impactful guest posting, we make our clients stand out among the competition by offering the most <strong>affordable SEO packages</strong>. Off-page SEO factors involve:
                                    <ShowMoreContent>
                                       <p>
                                          Improving a website’s ranking depends on both the search engine and the user’s perception. At <Link href="/">Outsource to Asia</Link>, a squad of SEO winners comes together to transport your web presence a visible success with our cost-effective <strong>SEO packages</strong>. For a smooth run of things, we come in handy.
                                       </p>
                                    </ShowMoreContent>
                                 </h6>
                                 <Row>
                                    {React.Children.toArray(
                                       OptimizedSEO1.list.map((li, id) => {
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
                        src={OptimizedSEO1.OptimizeEcommerceWebsiteImagePath}
                        alt="BasicWebsite.BasicWebsiteImagePath"
                     ></img>
                  
               </Col>
            </Row>
            <Row className='my-5'>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={OptimizedSEO2.OptimizeEcommerceWebsiteImagePath}
                        alt="BasicWebsite.BasicWebsiteImagePath"
                     ></img>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">{OptimizedSEO2.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{OptimizedSEO2.title}</h2>
                              
                              
                                 <h6>
                                    Technical SEO is one of the <Link href="/web-development-services">most important aspects of a website’s structure</Link>, something we greatly emphasize at. Being regarded among the <strong>best local SEO companies,</strong> our goal is to upgrade your website into a quick-functioning modular wonder that brings in more traffic and sales. Some of the aspects that result in website success are:
                                    <ShowMoreContent>
                                       <span>
                                          When you sail with us, we try our best to amplify your brand essence into a full-scale strategy with our <strong>SEO outsourcing</strong> services that becomes a demand-based need for the people. We are your number-one <strong>outsource SEO services</strong> hitter to create a better search experience for all.
                                       </span>
                                    </ShowMoreContent>
                                 </h6>
                                 <Row>
                                    {React.Children.toArray(
                                       OptimizedSEO2.list.map((li, id) => {
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
                        <span className="BgText">{OptimizedSEO3.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{OptimizedSEO3.title}</h2>
                              
                              
                                 <h6>
                                    <p>
                                       If you are looking to increase your website traffic, you need to consider our second-to-none link-building services. Being the market expert for SEO services for local businesses, we provide high-quality and relevant backlinks to external websites to boost your web profile. Some important factors to be kept in mind for effective link building:
                                       <ShowMoreContent>
                                          <span>
                                             Driven by excellence with our results-proven SEO services packages, we come up with the best SEO services to adapt to your infrastructure for the finest results. Our core focus lies in making businesses realize the actual impact of their <Link href="/ios-android-app-development">online presence and develop growth-based</Link> link-building strategies that are on-point.
                                          </span>
                                       </ShowMoreContent>

                                    </p>
                                 </h6>
                                 <Row>
                                    {React.Children.toArray(
                                       OptimizedSEO3.list.map((li, id) => {
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
                        src={OptimizedSEO3.OptimizeEcommerceWebsiteImagePath}
                        alt="BasicWebsite.BasicWebsiteImagePath"
                     ></img>
                  
               </Col>

            </Row>
            <Row className='my-5'>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={OptimizedSEO4.OptimizeEcommerceWebsiteImagePath}
                        alt="BasicWebsite.BasicWebsiteImagePath"
                     ></img>
                  
               </Col>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span class="BgText">{OptimizedSEO4.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{OptimizedSEO4.title}</h2>
                              
                              
                                 <h6>
                                    <p>
                                       We are the creators of powerful SEO tools designed to bring in more traffic and qualified leads with the most cost-friendly local SEO packages. Our band of key optimizing heroes take your web presence stats seriously and take every measure to ensure your online presence improvises at a constant rate with budget-friendly SEO services packages. Three main factors involving keyword optimization involve:
                                       <ShowMoreContent>
                                          We pride ourselves in offering one of the best SEO services in the USA, with our combined effort comprising of research-obtained keywords and highly optimized content, your online business will surely boom and will get results you have only dreamed of. Try our array of affordable local SEO services and you will notice great things coming your way.
                                       </ShowMoreContent>
                                    </p>
                                 </h6>
                                 <Row>
                                    {React.Children.toArray(
                                       OptimizedSEO4.list.map((li, id) => {
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
      </div>
   )
}

export default AllAboutSeo