import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import BannerWrapper from '@/hor//BannerWrapper/BannerWrapper'
import GetStarted from '../../Buttons/GetStarted'
import ShowMoreContent from '../../ShowMoreText/ShowMoreContent'
const OutsourceHumanResourcesBanner = () => {
   return (
      <div>
         <BannerWrapper mainClass={"plansPageResourcesOutsourcingMainBanner"} subClass={"outsource-human-resources"}>
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
                           Outsourcing
                        </text>
                     </g>
                  </svg>
                  <h1>
                     {/* <Fade top cascade> */}
                        Business Essentials
                     
                  </h1>
                  <h3>
                     Lifting the burden off your shoulders!
                  </h3>
                  <p>
                     From <strong><Link href='/web-development-services' className='text-decoration-none'>outsourcing designers and developers</Link> to sales representatives and project managers</strong>, we help your organization achieve goals in minimum capacity - in both time, complexity, and infrastructure cost.
                     <ShowMoreContent>
                        <span>
                           We are a high-performance outsource web <Link href="/ios-android-app-development">app development company</Link> that helps you navigate the deep seas of developmental chaos to find the best technology that controls your cost and boosts your business.
                        </span>
                     </ShowMoreContent>
                  </p>
               </div>
               <div className="position-relative popUpBtnForHumanResources">
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

export default OutsourceHumanResourcesBanner