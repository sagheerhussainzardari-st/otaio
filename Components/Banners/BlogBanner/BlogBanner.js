import React from 'react'
import { Col,  Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper'
import GetStarted from '@/components/Buttons/GetStarted'

const BlogBanner = () => {
   return (
      <div className='ota-blogs'>
         <BannerWrapper mainClass={"BlogPageMainBanner"} subClass={"BlogMainBanner"}>
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
                           latest
                        </text>
                     </g>
                  </svg>
                  <h1>
                     {/* <Fade top cascade> */}
                        Blogs!
                     
                  </h1>
                  <h3>
                     Stay tuned with the latest news about Digital Marketing
                     industry.
                  </h3>
                  <Row>
                     <Col lg={4}>
                        <GetStarted buttonClass={'getStarted-btn'} buttonText={'Get Started'} />
                     </Col>
                  </Row>
               </div>
            </Col>
         </BannerWrapper>
      </div>
   )
}

export default BlogBanner