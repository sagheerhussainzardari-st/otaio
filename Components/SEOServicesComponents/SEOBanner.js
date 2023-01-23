import React from 'react'
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper'
import { Col, Row } from 'react-bootstrap';
import GetStarted from '../Buttons/GetStarted';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const SEOBanner = () => {
   return (
      <BannerWrapper mainClass="seobanner-bg">
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
                        SEO
                     </text>
                  </g>
               </svg>
               <h1>
                  Search Engine Optimization
               </h1>
               <p>
                  With creative insight and a dynamic growth rate, bring in the audience that you are missing back to your website. <Link href='/e-commerce-solutions'>We care about your business</Link>. Do you too?
                  <ShowMoreContent>
                     <p>
                        Offering the most <strong>affordable SEO services in the USA</strong>, our main focus lies in elevating <Link href="/creative-design-packages">your brand image and making it look good</Link>. With the help of our experienced <strong>local SEO specialists,</strong> rank your website among the top-rated websites online.
                     </p>
                     <p>
                        <Link href='/smart-contracts-development'>We understand what you need and we aim to deliver to the best of our ability.</Link> It’s all about driving the <Link href="/lead-generation-services">maximum ROI and conversions</Link> for your business with our <strong>affordable SEO packages.</strong> Let’s get started.

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
      </BannerWrapper>
   )
}

export default SEOBanner