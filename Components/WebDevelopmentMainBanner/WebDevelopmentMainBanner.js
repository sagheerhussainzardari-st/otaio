import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper'
import GetStarted from '../Buttons/GetStarted'
import ShowMoreContent from './../ShowMoreText/ShowMoreContent';

const WebDevelopmentMainBanner = () => {
   return (
      <BannerWrapper mainClass="WebDevelopmentMainBanner">
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
                        Traffic
                     </text>
                  </g>
               </svg>
               <h1>
                  {/* <Fade top cascade> */}
                     Web Development
                  
               </h1>
               <p>
                  Web design that <a href="/nft-staking-platform-development">develops connections and improves notoriety.</a> Our custom web development company <a href="/e-commerce-solutions">helps your website persuade your audience</a> to learn more, stay longer, and make a move.
                  <ShowMoreContent>
                     <span>
                        If you are looking for affordable custom web designs that elevate your brand profile, be sure to give us a try. We believe in prospering together.
                     </span>
                  </ShowMoreContent>
               </p>
               <Row>
                  <Col lg={4}>
                     <GetStarted buttonClass={'getStarted-btn'} buttonText={'Get Started'} />
                  </Col>
               </Row>
            </div>
         </Col>
      </BannerWrapper>
   )
}

export default WebDevelopmentMainBanner