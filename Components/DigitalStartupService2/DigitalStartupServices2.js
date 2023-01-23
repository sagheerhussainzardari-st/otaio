import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Bounce, Zoom, Fade } from 'react-reveal';
import GetStarted from '../Buttons/GetStarted';
import { Startup, DevelopBrandPersonal, ProvideSupportingTools, leadgenarationpagecontent as lgpc } from './../../utilities/DigitalStartupServicesDiscription';
import Link from 'next/link'
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
const DigitalStartupServices2 = () => {
  return (
    <div>
      <div className="StartupServicesSection">
        <Container>
          <Row>
            <Col lg={4} className="m-auto">
              
                <div className="StartUp">
                  <span className="BgText">{Startup.heading}</span>
                  <Row className="OurServicesHeading">
                    <Col className="col-1"></Col>
                    <Col className="col-1 m-auto">
                      <i className="fas fa-long-arrow-alt-right text-primary"></i>
                    </Col>
                    <Col className="col-10">
                      
                        <h2>{Startup.title}</h2>
                      
                    </Col>
                  </Row>
                </div>
              
            </Col>
            <Col lg={7} className="m-auto">
              
                <h6>
                  We hope to bring a transformation in the world of business through our <Link href="/digital-startup">cutting-edge services designed for digital startups</Link>. The services are competitively priced to give newer businesses a chance to revolutionize the world. Our services have been specifically designed with up-and-coming digital startups in mind to <Link href="/lead-generation-services">boost your business</Link>. We have assembled a team of professionals with extensive knowledge and expertise in the field of digital services.
                  <ShowMoreContent>
                    <span>Even if you are in the business, and the business is on the rise, there may be some part of it that you might be missing out on. Our job is to help grow businesses with <Link href="/outsource-human-resources">enhanced profitability without increasing their overhead costs.</Link> Let our services be the drivers of your business cycle while you relax in the back seat, enjoying your company’s expansion and fame.</span>
                  </ShowMoreContent>
                </h6>
              
            </Col>
          </Row>
          <Row>
            <Col lg={5} className="m-auto">
              
                <img
                  className="w-100"
                  src={DevelopBrandPersonal.DevelopBrandPersonaImagePath}
                  alt="DevelopBrandPersonal.DevelopBrandPersonaImagePath"
                ></img>
              
            </Col>
            <Col lg={7} className="m-auto">
              
                <div className="StartUp pt-5 mt-5">
                  <span className="BgText">{DevelopBrandPersonal.heading}</span>
                  <div className="OurServicesHeadingUl">
                    <ul>
                      
                        <h2>{DevelopBrandPersonal.title}</h2>
                      
                      
                        <h6>
                          We acutely focus on analyzing your brand inclinations to concoct the right techniques for <Link href='/creative-design-packages'>creating an uplifting brand identity</Link>  . Highlights of a brand persona built at OTA are:
                          <ShowMoreContent>
                            <p>
                              And not just that, a brand has a tone, an image, and a perception that needs proper nurturing. We take care of your brand as if it’s our own. At OTA, we care about your business.
                            </p>
                          </ShowMoreContent>
                        </h6>
                        {DevelopBrandPersonal.list.map((li) => {
                          return (
                            <li>
                              <b>{li}</b>
                            </li>
                          );
                        })}
                      
                      <Col lg="3">
                        <GetStarted buttonText={DevelopBrandPersonal.button[0]} buttonClass={DevelopBrandPersonal.button[1]} />
                      </Col>
                    </ul>
                  </div>
                </div>
              
            </Col>
          </Row>
        </Container>
      </div>
      <div className="StartupServicesSection">
        <Container>
          <Row>
            <Col lg={7} className="m-auto">
              
                <div className="StartUp pt-5 mt-5">
                  <span className="BgText">{ProvideSupportingTools.heading}</span>
                  <div className="OurServicesHeadingUl">
                    <ul>
                      
                        <h2>{ProvideSupportingTools.title}</h2>
                      
                      
                        <p>
                          With custom or 3rd party customer support tools such as Tawk.to and Zendesk Chat App or popular chat platforms integration through WhatsApp/iMessage for business, your clients experience exceptional after-sales support 24/7:
                          <ShowMoreContent>
                            <span>
                            Our in-house team of lethal <Link href="/ios-android-app-development"> developers and product architects think of groundbreaking ideas </Link> that level up your game with more control over the products. With our management gizmo, you get easy-to-use and demand-based options that keep it simple and impactful.
                            </span>
                          </ShowMoreContent>
                        </p>
                        {ProvideSupportingTools.list.map((li) => {
                          return (
                            <li>
                              <b>{li}</b>
                            </li>
                          );
                        })}
                      
                      <Col lg="3">
                        <GetStarted buttonText={"Get Started"} buttonClass={"getStarted-btn"} />
                      </Col>
                    </ul>
                  </div>
                </div>
              
            </Col>
            <Col lg={5} className="m-auto">
              
                <img
                  className="w-100"
                  src={ProvideSupportingTools.ProvideSupportingToolsImagePath}
                  alt="ProvideSupportingTools.ProvideSupportingToolsImagePath"
                />
              
            </Col>
          </Row>
        </Container>
      </div>
      <div className="StartupServicesSection">
        <Container>
          <Row>
            <Col lg={5} className="m-auto">
              
                <img
                  className="w-100"
                  src={lgpc.ProvideSupportingToolsImagePath}
                  alt="lgpc.ProvideSupportingToolsImagePath"
                ></img>
              
            </Col>
            <Col lg={7} className="m-auto">
              
                <div className="StartUp pt-5 mt-5">
                  <span className="BgText">LG</span>
                  <div className="OurServicesHeadingUl">
                    <ul>
                      
                        <h2>{lgpc.heading}</h2>
                      
                      
                        <h6>
                          Be it Inbound or Outbound, our <strong>B2B Lead Generation services</strong> offer an incredible chance to get quality leads that convert. Rapidly increase your sales pipeline through our lead generation services via BPO or digital marketing, that provides:
                          <ShowMoreContent>
                            <span>
                            When it comes to <Link href="/lead-generation-services">lead generation services </Link>, we are results-oriented and sales-focused with our energetic team of sales hunters. We help you drive revenue with online strategies that guide your customers to conversions. Led by strategic direction on both clear vision and attention to detail, we try to bring in the greatest ROI possible.
                              </span>
                          </ShowMoreContent>
                        </h6>
                        {lgpc.list.map((li) => {
                          return (
                            <li>
                              <b>{li}</b>
                            </li>
                          );
                        })}
                      
                      <Col lg="3">
                        <GetStarted buttonText={lgpc.button[0]} buttonClass={lgpc.button[1]} />
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

export default DigitalStartupServices2