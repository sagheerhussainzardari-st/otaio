import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper'
import ShowMoreContent from '@/components/ShowMoreText/ShowMoreContent';
import GetStarted from '@/components/Buttons/GetStarted';
import Link from 'next/link';

const SeoDMBanner = () => {
  return (
    <BannerWrapper mainClass="DigitalMarketingMainBanner">
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
                Smart
              </text>
            </g>
          </svg>
          <h1>
            {/* <Fade top cascade> */}
              Digital Marketing
            
          </h1>
          <p>
            <strong>Online marketing</strong> that <a href="/e-commerce-solutions">highlights your brand in the digital world</a>. Ever wondered what it feels like to be in the spotlight? This is your chance. Boost your <strong>digital marketing campaigns</strong> now! <ShowMoreContent><span>
              Known as one of the leading digital agencies providing the best <strong>digital marketing services in the USA</strong>, we stay fixated on keeping your brand essence the main ingredient in <Link href="/lead-generation-services">our marketing</Link> mix. <Link href="/">Our digital agency</Link> offers the most <strong>affordable digital marketing services</strong> because <a href="/nft-staking-platform-development">we prioritize our commitment to you above everything else.</a>
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

export default SeoDMBanner