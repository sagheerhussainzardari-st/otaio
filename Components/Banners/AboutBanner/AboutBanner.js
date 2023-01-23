import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper'
import GetStarted from '@/components/Buttons/GetStarted'
import ShowMoreContent from '@/components/ShowMoreText/ShowMoreContent';

const AboutBanner = () => {
   return (
      <div>
         <BannerWrapper mainClass={"aboutUsPageBanner"} subClass={"aboutUsMainBanner"}>
            <Col lg={6} className="m-auto">
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
                           y="103"
                           strokeWidth="1"
                           stroke="url(#gradient)"
                           fill="rgb(0, 0, 0,0.2)"
                        >
                           About Us
                        </text>
                     </g>
                  </svg>
                  <h1>Your Virtual Digital</h1>
                  <h3>Production Facility Based In Asia</h3>
                  <p>
                     We at Outsource to Asia provide our clients with
                     out-of-the-box solutions in the realms of web design, web
                     development, and digital marketing. Our solutions are
                     precisely tuned to the demands of a business and its kind
                     and implemented in a way that encourages <Link href="/lead-generation-services">business growth and maximizes ROI.</Link>
                     <ShowMoreContent>
                        <span>
                           We are dedicated to bringing strategy and planning to your business. Our goal is to <Link href="/creative-design-packages">create aesthetic designs</Link> and offer practical risk-free services that signify your business values. We believe in making tailor-made solutions for our clients because one-size-fits-all doesn’t apply everywhere. Expect the unexpected when you sign up with us.
                        </span>
                     </ShowMoreContent>
                  </p>
                  <p>

                     <Link href='/web-development-services'><a className='text-decoration-none'>Outsource Web Design And Development Services</a></Link>

                     To A Well-Known Digital Outsourcing Agency In The United States To Expand Your Business Online. Let's Grow As One!
                  </p>
                  <Row>
                     <Col lg={4}>
                        <GetStarted buttonClass="getStarted-btn" buttonText="Get Started" />
                     </Col>
                  </Row>
               </div>
            </Col>
         </BannerWrapper>
      </div>
   )
}

export default AboutBanner