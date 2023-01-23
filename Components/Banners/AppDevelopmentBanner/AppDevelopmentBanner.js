import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper'
import GetStarted from '@/components/Buttons/GetStarted'
import ShowMoreContent from '@/components/ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const AppDevelopmentBanner = () => {
   return (
      <BannerWrapper mainClass={"AppDevelopmentMainBanner"}>
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
                        Mobile
                     </text>
                  </g>
               </svg>
               <h1>
                  {/* <Fade top cascade> */}
                     App Development
                  
               </h1>
               <p>
                  Creating custom-built, high-performing, and digitally transformative apps for satisfying user experiences on Android and iOS alike.
                  <ShowMoreContent>
                     <span>
                        
                  <Link href="/digital-startup">Our breathtaking ideas and inventive techniques</Link> are the right match for your outsource app development requirements.
                     </span>
                  </ShowMoreContent>
               </p>
               <Row>
                  <Col lg={4}>
                     <GetStarted buttonClass={"getStarted-btn"} buttonText={"Get Started"} />
                  </Col>
               </Row>
            </div>
         </Col>
      </BannerWrapper>
   )
}

export default AppDevelopmentBanner