import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper';
import GetStarted from '../../Buttons/GetStarted'
import ShowMoreContent from '../../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const DigitalStartupBanner = () => {
   return (
      <div>
         <BannerWrapper mainClass="plansPageDigitalStartupMainBanner" subClass={"contactUsMainBanner"}>
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
                           Startup
                        </text>
                     </g>
                  </svg>
                  <h3>
                     {/* <Fade top cascade> */}
                        Digital services and Strategies
                     
                  </h3>
                  <p>
                     Develop Your Customer Base With Data-Driven, End-To-End Designated Strategies From A Renowned Player In The It Industry.
                     <ShowMoreContent>
                        <span>
                           Our objective is to carefully <Link href="/lead-generation-services">craft a strategy that boosts your business</Link>, enhances your brand essence, and has the audience mesmerized by creating long-lasting impactful impressions.

                        </span>
                     </ShowMoreContent>
                  </p>
                  <Row>
                     <Col lg={4}>
                        <GetStarted buttonText='Get Started' buttonClass='getStarted-btn' />
                     </Col>
                  </Row>
               </div>
            </Col>
         </BannerWrapper>
      </div>
   )
}

export default DigitalStartupBanner