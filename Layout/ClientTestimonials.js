import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Zoom, Bounce } from 'react-reveal'
import Slider from "react-slick";
import { clientsTestimonialsSlider } from '../utilities/slidersettings'
const ClientTestimonials = (props) => {
  return (
    <div>
      <div>
        <div className="testmonialsSlider">
          <Container>
            <Row>
              <Col></Col>
              <Col lg={3} className="m-auto text-center">
                <svg width="100%">
                  <defs>
                    <linearGradient id="gradient" y1="0" y2="1">
                      <stop stopColor="#696368" offset="0" />
                      <stop stopColor="#76485f" offset="1" />
                    </linearGradient>
                  </defs>
                  <g>
                    <text id="text" y="85" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Clients</text>
                  </g>
                </svg>
                
                  <h2><strong>Testimonials</strong></h2>
                  
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col lg={7} className="mt-5 text-center m-auto">
                
                  <p>
                    We’ve been the buzz of the town lately. Find out what people are saying about us.
                  </p>
                
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Slider className="TestmonialsSlider" {...clientsTestimonialsSlider}>
                  <div>
                    <Card className="TestmonialsSliderCards">
                      <p>{props.testimonialTitle.Paragraph1}</p>
                      <div className="TestmonialsSliderCardsContent">
                        <Row>
                          <Col lg={3} className="m-auto col-2">
                            <img loading='lazy' className="w-100" src={"/Assets/Icons/client-img-1.png"} alt="design & development to advertising"></img>
                          </Col>
                          <Col lg={9} className="col-10 m-auto">
                            <h3>{props.testimonialTitle.Client1}</h3>
                            <h5>{props.testimonialTitle.ClientDesignation1}</h5>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card className="TestmonialsSliderCards">
                      <p>{props.testimonialTitle.Paragraph2}</p>
                      <div className="TestmonialsSliderCardsContent">
                        <Row>
                          <Col lg={3} className="m-auto col-2">
                            <img loading='lazy' className="w-100" src={"/Assets/Icons/client-img-2.png"} alt="establish your brand"></img>
                          </Col>
                          <Col lg={9} className="col-10 m-auto">
                            <h3>{props.testimonialTitle.Client2}</h3>
                            <h5>{props.testimonialTitle.ClientDesignation2}</h5>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card className="TestmonialsSliderCards">
                      <p>{props.testimonialTitle.Paragraph3}</p>
                      <div className="TestmonialsSliderCardsContent">
                        <Row>
                          <Col lg={3} className="m-auto col-2">
                            <img loading='lazy' className="w-100" src={"/Assets/Icons/client-img-3.png"} alt="providing a smooth and steady customer experience"></img>
                          </Col>
                          <Col lg={9} className="col-10 m-auto">
                            <h3>{props.testimonialTitle.Client3}</h3>
                            <h5>{props.testimonialTitle.ClientDesignation3}</h5>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card className="TestmonialsSliderCards">
                      <p>{props.testimonialTitle.Paragraph4}</p>
                      <div className="TestmonialsSliderCardsContent">
                        <Row>
                          <Col lg={3} className="testmonialImg m-auto col-2">
                            <img loading='lazy' className="w-100" src={"/Assets/Icons/client-img-4.jpeg"} alt="helping digital startups"></img>
                          </Col>
                          <Col lg={9} className="col-10 m-auto">
                            <h3>{props.testimonialTitle.Client4}</h3>
                            <h5>{props.testimonialTitle.ClientDesignation4}</h5>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card className="TestmonialsSliderCards">
                      <p>{props.testimonialTitle.Paragraph5}</p>
                      <div className="TestmonialsSliderCardsContent">
                        <Row>
                          <Col lg={3} className="testmonialImg m-auto col-2">
                            <img loading='lazy' className="w-100" src={"/Assets/Icons/client-img-5.jpg"} alt="reach their full potential"></img>
                          </Col>
                          <Col lg={9} className="col-10 m-auto">
                            <h3>{props.testimonialTitle.Client5}</h3>
                            <h5>{props.testimonialTitle.ClientDesignation5}</h5>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card className="TestmonialsSliderCards">
                      <p>{props.testimonialTitle.Paragraph6}</p>
                      <div className="TestmonialsSliderCardsContent">
                        <Row>
                          <Col lg={3} className="testmonialImg m-auto col-2">
                            <img loading='lazy' className="w-100" src={"/Assets/Icons/client-img-6.jpg"} alt="digital media agency"></img>
                          </Col>
                          <Col lg={9} className="col-10 m-auto">
                            <h3>{props.testimonialTitle.Client6}</h3>
                            <h5>{props.testimonialTitle.ClientDesignation6}</h5>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </div>
                </Slider>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default ClientTestimonials