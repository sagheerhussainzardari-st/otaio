import React from 'react'
import { Col, Row } from 'react-bootstrap';
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper'
import GetStarted from '@/components/Buttons/GetStarted';
import Link  from 'next/link';

const ContactBanner = () => {
   return (
      <BannerWrapper mainClass={"contactUsPageBanner"} subClass={"contactUsMainBanner"}>
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
                        Now !
                     </text>
                  </g>
               </svg>
               <h1 className="mt-0">Contact Us</h1>
               <h3>Need A Hand? We Would Love To Hold You</h3>
               <p>
                  From <strong><Link href='/call-center-outsourcing'>answering entrepreneurs queries</Link></strong> or giving ideas to a
                  veteran brand; we do it all. Hit us up for a free
                  consultation! With our vast portfolio of high end clients,
                  we ensure that our resources fit your guidelines either
                  you're a <Link href="/digital-startup">startup with minimum resources</Link> or an organization
                  with extensive budgets
               </p>
               <Row>
                  <Col lg={4}>
                     <GetStarted buttonClass={"getStarted-btn"} buttonText={"Get Started"}/>
                  </Col>
               </Row>
            </div>
         </Col>
      </BannerWrapper>
   )
}

export default ContactBanner