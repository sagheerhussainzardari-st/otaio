import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper';
import Link from 'next/link';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Fade, Bounce } from 'react-reveal';
import GetStarted from '@/components/Buttons/GetStarted';
import ShowMoreContent from '@/components/ShowMoreText/ShowMoreContent'
const WhiteLabellingMainBanner = () => {
   return (
      <div>
         <BannerWrapper mainClass={"caseStudiesBanner"} subClass={"case-studies-banner"}>
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
                           Platform
                        </text>
                     </g>
                  </svg>
                  <h1>
                     Affordable &#38; Reliable
                  </h1>
                  <h3>
                     White Labelling Platform
                  </h3>
                  <p>
                     Get the edge that will set you apart from your competitors. Our White Labeling <Link href='/lead-generation-services'> Marketing Agency</Link>  is the impetus your digital agency needs for unprecedented growth.
                     <ShowMoreContent>
                        <span>
                           Whether you need to improve the <Link href="/web-development-services">online presence and visibility of your custom website </Link> or are looking for reliable white labeling services for your business, OTA is the best company to rely on. We are the storm-breaking giants when it comes to white labeling.
                        </span>
                     </ShowMoreContent>
                  </p>
                  <Row>
                     <Col lg={4}>
                        <GetStarted buttonText={`Get Started`} buttonClass={`getStarted-btn`} />
                     </Col>
                  </Row>
               </div>
            </Col>
         </BannerWrapper>
      </div>
   )
}

export default WhiteLabellingMainBanner