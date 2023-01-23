import React from 'react'
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper'
import { Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import GetStarted from '../../Buttons/GetStarted'
import ShowMoreContent from '../../ShowMoreText/ShowMoreContent';
const LGBanner = () => {
   return (
      <BannerWrapper mainClass={"leadgenbanner-bg"}>
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
                        Leads
                     </text>
                  </g>
               </svg>
               <h1>Lead Generation Services</h1>

               <p>
                  Worried about losing your potential leads? Don’t fret. We can help target those missed opportunities.
                  <ShowMoreContent>
                     <p>
                        Known as one of the <Link href="/">leading digital agencies in the USA</Link>, OTA has established a name for itself by providing the <strong>best lead generation services</strong>. Our strategic masterminds are bent on making your brand a carefully-computed success with our constant kick-ass <Link href="/social-media-management">social media management services.</Link>

                     </p>
                     <p>
                        We are a professional <strong>Facebook and Instagram marketing agency</strong> with experience and expertise in providing the best-qualified <strong>PPC leads</strong>. <Link href='/e-commerce-solutions'>Looking for better sales? Call us now.</Link>

                     </p>
                  </ShowMoreContent>
               </p>
               <Row>
                  <Col lg={4}>
                     <GetStarted buttonText="Get Started" buttonClass="getStarted-btn" />
                  </Col>
               </Row>
            </div>
         </Col>
      </BannerWrapper>)
}

export default LGBanner