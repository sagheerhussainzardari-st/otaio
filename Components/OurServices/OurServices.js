import React from 'react'
import { servicesCardsContent } from '../../utilities/home'
import { Col, Container, Row } from "react-bootstrap";
import { Zoom } from 'react-reveal'
import ServicesCard from '../ServicesCard/ServicesCard'
import OurVideo from '../OurVideo/OurVideo'
import Heading from '../MainHeading/Heading';
import Wrapper from '@/hor/Wrapper/Wrapper';
import GetStarted from '../Buttons/GetStarted';
const OurServices = () => {
   return (
      <Wrapper>
         <div>
            <Container>
               <Heading
                  Heading="Our Services"
                  tagline="Outsource Any Of Your Project To Us."
                  mainTagLine="Expertise"
               />
               <Row className="mt-5">
                  {React.Children.toArray(
                     servicesCardsContent.map(({ icon, title, details, href }, id) => {
                        const altAttributes = ["maximizing your sales ratios", "partnership with us", "customer-centric firm", "projects consisting of app development", "digital marketing such as SEO", "brand values that your organization possesses", "Our professional group of leading designers", "content development", "solve your problems"]
                        return (
                           <Col lg={3}>
                              
                                 <ServicesCard
                                    image={icon}
                                    title={title}
                                    details={details}
                                    href={href}
                                    alt={altAttributes[id]}
                                 />
                              
                           </Col>
                        )
                     })
                  )}
               </Row>
               <br />
               <br />
               <Row>
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
         </div>
      </Wrapper>
   )
}

export default OurServices