import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import GetStarted from '../Buttons/GetStarted'

const AboutPortfolio = () => {
   return (
      <div className="PortfolioBrand">
         <Container>
            <Row>
               <Col lg={6} className="mt-5 pb-5 m-auto ms-0 mb-5 pb-5">
                  <div className="smartWork mt-5 mb-5">
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
                              y="90"
                              strokeWidth="1"
                              stroke="url(#gradient)"
                              fill="rgb(0, 0, 0,0.2)"
                           >
                              Portfolio
                           </text>
                        </g>
                     </svg>
                     <h6>Brand & Acquiring New Technologies.</h6>
                     <p>
                        Helping You Focus On Bringing In New Business, Developing Your
                        Own Brand And Acquiring New Technologies.
                     </p>
                     <Row>
                        <Col lg={4}>
                           <GetStarted buttonText={` Get Started`} buttonClass={`getStarted-btn`} />
                        </Col>
                     </Row>
                     <Row>
                        <Col lg={3} className="m-auto mt-3 position-absolute w-75">
                           <a href="#OTAPortfolio">
                              <i className="fas fa-mouse text-white opaCity-md"></i>
                              <br></br>
                              <i className="fas fa-arrow-down animatedArrow"></i>
                           </a>
                        </Col>
                     </Row>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default AboutPortfolio