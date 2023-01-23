import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper'
import GetStarted from '@/components/Buttons/GetStarted';
import ShowMoreContent from '@/components/ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const ContentWritingBanner = () => {
   return (
      <BannerWrapper mainClass="ContentWrittingMainBanner">
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
                        Best
                     </text>
                  </g>
               </svg>
               <h1>
                  {/* <Fade top cascade> */}
                     Content Writing
                  
               </h1>
               <p>
                  Draw in and inspire a developing fanbase for the content you put out. At the point when your worth is obvious, choosing you becomes a no-brainer.
                  <ShowMoreContent>
                     <p>
                     <Link href='/'>Your set of ideas need a trusting platform</Link>. Welcome to OTA; we are the market competent content writing company that leaves a mark with our work profile.
                     </p>
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

export default ContentWritingBanner