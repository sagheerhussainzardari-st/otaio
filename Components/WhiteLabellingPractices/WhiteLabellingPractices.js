import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce, Fade } from 'react-reveal'
import Link from 'next/link'
import ShowMoreContent from '../ShowMoreText/ShowMoreContent'
const WhiteLabellingPractices = () => {
  return (
    <div className="OutsourcingBusiness">
      <Container>
        <Row>
          <Col lg={6}>
            
              <div className="Business">
                <svg width="100%">
                  <defs>
                    <linearGradient id="gradient" y1="0" y2="1">
                      <stop stopColor="#054084" offset="0" />
                      <stop stopColor="#054084" offset="1" />
                    </linearGradient>
                  </defs>
                  <g>
                    <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Practices</text>
                  </g>
                </svg>
                <h2 className='text-light'>We Have Developed Easy Ways</h2>
              </div>
            
          </Col>
          <Col lg={6} className="m-auto text-white">
            
              <div className="Business">
                <h5><i>
                  White-labeling
                </i></h5>
                <h5><i>Your secret weapon for exponential growth.!</i></h5>
                <h6>
                  Enhance customers' experience with higher-quality , <Link href="/social-media-management">affordable services  by augmenting revenue generation opportunities</Link> through OTA's White labeling services . The digital marketing industry  is growing at an exponential rate and being more competitive at each passing second. Reducing operational costs and instead focusing on core business goals is the need of every organization.
                  <ShowMoreContent>
                    <span>
                    The digital era today is rapidly changing. What you need is a high-performance, readily available White Label Marketing Agency<Link href="/seo-services"> that gets you quick results.</Link> Look no further; OTA is the answer to all your white labeling problems and concerns. We are in the business of creating mind-blowing patterns and designs that register perceptive impressions.
                    </span>
                  </ShowMoreContent>
                </h6>
              </div>
            
          </Col>
        </Row>

        <Row className="mt-5 pt-2">
          <Col lg={4} className="m-auto text-white">
            <div className="RocketUlOne">
              {/* </Fade left> */}
                <ul>
                  <li>
                    Working with 1,000+ clients
                  </li>
                  <li>
                    No joining fees
                  </li>
                  <li>
                    High quality white labelling services
                  </li>
                  <li>
                    Customized packages
                  </li>
                  <li>
                    Fast delivery
                  </li>
                </ul>
              
            </div>
          </Col>
          <Col lg={3} className="m-auto">
            
              <img className="w-100" src={"/Assets/PlansAssets/WhiteLabelling/WhiteLabellingimg01.png"} alt="Practices" decoding="async"></img>
            
          </Col>
          <Col lg={4} className="m-auto text-white">
            <div className="RocketUlTwo">
              {/* </Fade right> */}
                <ul>
                  <li>
                    Dedicated support
                  </li>
                  <li>
                    Quick response rate
                  </li>
                  <li>
                    Quick turnaround time
                  </li>
                  <li>
                    Highly Creative Work
                  </li>
                  <li>
                    <Link href="/call-center-outsourcing"><a className="text-light">Customer Satisfaction Guaranteed</a></Link>
                  </li>
                </ul>
              
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default WhiteLabellingPractices