import Link from 'next/link';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import GetStarted from '../../Buttons/GetStarted';
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper';

const PortfolioBanner = () => {
   return (
      <div>
         <BannerWrapper mainClass={"PortfolioMainBanner"} subClass={"case-studies-banner"}>
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
                           Portfolio
                        </text>
                     </g>
                  </svg>
                  <h1>Guaranteeing</h1>
                  <h3>
                     <strong><Link href='/' className='text-decoration-none text-light'>Supreme Quality Services</Link></strong> and an Optimal Experience Always and
                     Forever
                  </h3>
                  <Row>
                     <Col lg={4}>
                        <GetStarted buttonClass={"getStarted-btn"} buttonText={"Get Started"} />
                     </Col>
                  </Row>
               </div>
            </Col>
         </BannerWrapper>
      </div>
   )
}

export default PortfolioBanner