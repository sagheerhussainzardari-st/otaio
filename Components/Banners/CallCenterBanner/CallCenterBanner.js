import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import BannerWrapper from '@/hor/BannerWrapper/BannerWrapper'
import GetStarted from '@/components/Buttons/GetStarted'
import ShowMoreContent from '@/components/ShowMoreText/ShowMoreContent'

const CallCenterBanner = () => {
   return (
      <BannerWrapper mainClass={'plansPageMainBanner'} subClass={"PlansMainBanner"}>
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
                        Quality
                     </text>
                  </g>
               </svg>
               <h1>
                  {/* <Fade top cascade> */}
                     Customer support
                   {/* </Fade>  */}
               </h1>
               <h3>
                  We’re Here To Help
               </h3>
               <p>
                  Cut costs and take your <strong>customer support and sales operation</strong> to the next level with <strong>BPO outsourcing</strong> that caters to your consumer’s needs and guarantees a highly dependable and helpful client experience.
                  <ShowMoreContent>
                     <p>
                        With us, you get the satisfaction of having an experienced call center outsourcing firm behind the scenes to keep your workload almost nil and keep the operations up and running. Let’s roll.
                     </p>
                  </ShowMoreContent>
               </p>
               <Row>
                  <Col lg={4}>
                     <GetStarted buttonText={"Get Started"} buttonClass={"getStarted-btn"} />
                  </Col>
               </Row>
            </div>
         </Col>
      </BannerWrapper>

   )
}

export default CallCenterBanner