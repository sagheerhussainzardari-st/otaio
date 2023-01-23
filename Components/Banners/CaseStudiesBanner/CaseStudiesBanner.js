import React from 'react'
import { Col } from 'react-bootstrap';
import GetStarted from '@/components/Buttons/GetStarted';
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper';
import { Fade } from 'react-reveal'
import Link from 'next/link';
import { Row } from 'react-bootstrap';
const CaseStudiesBanner = () => {
   return (
      <div>
         <BannerWrapper mainClass="caseStudiesBanner" subClass="case-studies-banner">
            <Col lg={6} className="m-auto">
               <div className="Outsource mt-5 mb-5">
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
                           Case Study
                        </text>
                     </g>
                  </svg>
                  <h1>
                     {/* <Fade top cascade> */}
                        Case Study
                     
                  </h1>
                  <p>
                     Before you can outsource your <strong><Link href='/cyber-security-services' className='text-decoration-none'>IT production</Link></strong>, you have to
                     make sure that you and your company are in safe hands. A
                     case study of our clients and how we have helped them might
                     vouch on our behalf.
                  </p>

                  <Row>
                     <Col lg={4}>
                        <GetStarted buttonClass={"getStarted-btn"} buttonText="Get Started" />
                     </Col>
                  </Row>
               </div>
            </Col>
         </BannerWrapper>
      </div>
   )
}

export default CaseStudiesBanner