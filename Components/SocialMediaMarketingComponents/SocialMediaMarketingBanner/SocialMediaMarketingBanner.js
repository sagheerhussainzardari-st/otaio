import React from 'react'
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper'
import GetStarted from '../../Buttons/GetStarted';
import { Row, Col } from 'react-bootstrap'
import ShowMoreContent from './../../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const SocialMediaMarketingBanner = () => {
   return (
      <div>
         <BannerWrapper mainClass={"socialmediamarketing"}>
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
                           SMM
                        </text>
                     </g>
                  </svg>
                  <h1>Social Media Marketing</h1>

                  <p>
                     Solving your immediate problems with swift and out-of-the-box solutions. We are the Growth-Tigers of Social Media! Let’s advance together. <ShowMoreContent>
                        <p>We are a <Link href="/">USA-based digital agency</Link> driven by a frenzied desire to facilitate our clients with the most befitting results on all engagement channels with our constant <strong>social media content writing services.</strong> With us, you don’t have to worry about any of your social media marketing channels. <Link href='/e-commerce-solutions'>We offer personalized attention to all of our clients with attention to detail focus on every project</Link> that we work on using our extraordinary <strong>Instagram growth management services.</strong></p>
                        <p>
                           Social Media has become the new driving force of today’s media. We are living in the digital era driven by pace. <Link href='/smart-contracts-development'>Stop wasting your time testing around and waiting on results</Link>, we can get you the much-required reach that you are looking for with our <strong>outsource social media marketing</strong> services. We are proud to house some of the best marketing talents in the industry who work hard to deliver incredible results with our <strong>social media optimization services</strong> . Reach out to us today.

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
      </div>
   )
}

export default SocialMediaMarketingBanner