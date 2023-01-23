import React from 'react'
import { Card, Col, Container,Row } from 'react-bootstrap';
import { Bounce } from 'react-reveal';
import { popularBlogsSlider } from '../../utilities/slidersettings';
import { popularPostsSlides } from './../../utilities/PopularBlogs';
import Slider from "react-slick";

const BlogSlider = () => {
   return (
      <div>
         <div className="OutsourcingBusiness">
            <Container>
               <Row>
                  <Col lg={4} className="m-auto text-center">
                     
                        <div className="Business">
                           <svg width="100%">
                              <defs>
                                 <linearGradient id="gradient" y1="0" y2="1">
                                    <stop stopColor="#054084" offset="0" />
                                    <stop stopColor="#054084" offset="1" />
                                 </linearGradient>
                              </defs>
                              <g>
                                 <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">OTA</text>
                              </g>
                           </svg>
                           <h2 className="text-light">Popular Posts</h2>
                        </div>
                     
                  </Col>
               </Row>

               <Slider className="" {...popularBlogsSlider}>
                  {React.Children.toArray(
                     popularPostsSlides.map(
                        ({ slideImage, slideTitle, date, details }) => (
                           <Card className="itemSlider">
                              <Row className="align-items-center">
                                 <Col lg={5} className="col-5">
                                    <img className="w-100" src={slideImage} alt='slideImage' />
                                 </Col>
                                 <Col lg={7} className="col-7 p-0">
                                    <Card.Title className="text-light">
                                       <h5 className="mb-0">{slideTitle}</h5>
                                       <h6>{date}</h6>
                                    </Card.Title>
                                    <div><span>{details}</span></div>
                                 </Col>
                              </Row>
                           </Card>
                        )
                     )
                  )}
               </Slider>
            </Container>
         </div>
      </div>
   )
}

export default BlogSlider