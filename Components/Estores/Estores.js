import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce, Fade } from 'react-reveal'
import ShowMoreContent from '../ShowMoreText/ShowMoreContent'

const Estores = () => {
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
                    <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">eStores</text>
                  </g>
                </svg>
                <h2 className='text-light'>Get E-Commerce Automation</h2>
              </div>
            
          </Col>
          <Col lg={6} className="m-auto text-white">
            
              <div className="Business">
                <h5>
                  <i>
                    Boost Online Store Engagement And Increase Brand Exposure
                  </i>
                </h5>
                <h6>
                  Keep ahead of the competition with our web and mobile app development services for technical, enterprise-grade eCommerce. From <b>ecommerce sourcing and inventory management services to vendor central management and ecommerce virtual assistant</b>, we help in driving customer satisfaction, expanding audiences, and boosting sales. Outsource To Asia’s E-commerce Automation is your ticket to earning passive income. We handle all the work for you; the only job you do is collect checks.
                  <ShowMoreContent>
                    At Outsource To Asia, we blend our ecommerce development proficiency with advanced and latest automation technologies to dig out the crucial requirements of the clients across industries globally. Our team of highly qualified web developers creates customer-focused <b>ecommerce solutions</b> and products using WooCommerce, Shopify, Drupal, and Magento. We not only assist businesses with <b>ecommerce virtual assistant services</b> that give them a solid foundation but also ensure that they run seamlessly through their evolution.
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
                    Save Your Time
                  </li>
                  <li>
                    Reduce your overhead expenses
                  </li>
                  <li>
                    24/7 customer services
                  </li>
                </ul>
              
            </div>
          </Col>
          <Col lg={3} className="m-auto">
            
              <img className="w-100" src={"/Assets/ECommerceSolutions/ECommerceSolutionsImg01.png"} alt="Practices" decoding="async"></img>
            
          </Col>
          <Col lg={4} className="m-auto text-white">
            <div className="RocketUlTwo">
              {/* </Fade right> */}
                <ul>
                  <li>
                    You enjoy peace of mind
                  </li>
                  <li>
                    Get to know your customer better
                  </li>
                  <li>
                    Tactics for maximising FBA sales.
                  </li>
                </ul>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Estores