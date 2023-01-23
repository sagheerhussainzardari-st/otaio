import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import GetStarted from '../../Buttons/GetStarted';
import Link from 'next/link';
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper';
import ShowMoreContent from '../../ShowMoreText/ShowMoreContent';

const PricingBanner = () => {
   return (
      <BannerWrapper mainClass={"PricingMainBanner"} subClass={"DigitalStartupMainBanner"}>
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
                        Packages
                     </text>
                  </g>
               </svg>
               <h1>
                  {/* <Fade top cascade> */}
                     Pricing
                  
               </h1>
               <p>
                  From envisioning <Link href="/lead-generation-services"><a className="text-light">your web identity to advertising</a></Link> it on the internet, we demystify and fulfill all your digital needs for your brand to go big! Pick a <Link href='creative-design-packages'>full branding package</Link> that is ideal for your brand.
                  <ShowMoreContent>
                     <p>
                        Our creative media designers always stand by your side and are<Link href="/content-writing-services"> readily available to help you renew your brand persona</Link> and make it a success. Let our designs speak for you.
                     </p>
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

export default PricingBanner