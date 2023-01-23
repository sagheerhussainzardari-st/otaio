import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper'
import GetStarted from '@/components/Buttons/GetStarted';
import ShowMoreContent from '@/components/ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const VideoDevelopmentBanner = () => {
   return (
      <BannerWrapper mainClass="VideoDevelopmentMainBanner">
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
                     Video Animation
                  
               </h1>
               <p>
                  Spectacular, riveting, and awe-inspiring <strong>Video Animation</strong> that enchants viewers, <Link href='/smart-contracts-development'>transforms prospects into clients and clients into fans.</Link>
                  <ShowMoreContent>
                     <span>
                        As a leading video production company, our media <Link href="/creative-design-packages">prodigies design engaging content</Link> customized to fit your product role effectively. We know how it’s done.
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

export default VideoDevelopmentBanner