import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import GetStarted from '../../Buttons/GetStarted';
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper';
import ShowMoreContent from '../../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const CyberSecurityBanner = () => {
   return (
      <BannerWrapper mainClass="CyberSecurityMainBanner">
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
                        Security
                     </text>
                  </g>
               </svg>
               <h1>
                  {/* <Fade top cascade> */}
                     Cyber Security
                  
               </h1>
               <p>
                  Cyber Security Strengthen your cyber resilience by leveraging the most out of the latest security protocols, courtesy of our digital security experts.
                  <ShowMoreContent>
                     <span>
                        We bring power and promise to your cyber security needs. With us, <Link href='/smart-contracts-development'>you get the satisfaction of working</Link> with a highly advanced network security company. Don’t hold back; <Link href="/contact-us">let’s connect</Link>.
                     </span>
                  </ShowMoreContent>
               </p>
               <Row>
                  <Col lg={4}>
                     <GetStarted buttonClass={"getStarted-btn"} buttonText={"Get Started"}></GetStarted>
                  </Col>
               </Row>
            </div>
         </Col>
      </BannerWrapper>

   )
}

export default CyberSecurityBanner