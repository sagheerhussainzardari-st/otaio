import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import BannerWrapper from '../../../HigherOrderWrappers/BannerWrapper/BannerWrapper'
import GetStarted from '../../Buttons/GetStarted'
import ShowMoreContent from '../../ShowMoreText/ShowMoreContent';

const CreativePackagesBanner = () => {
   return (
      <BannerWrapper mainClass={"CreativeAndDesignMainBanner"}>
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
                        Brand
                     </text>
                  </g>
               </svg>
               <h1>
                  {/* <Fade top cascade> */}
                     Creative Designing
                  
               </h1>
               <p>
               Rouse your audience through <a href="/e-commerce-solutions">innovative and top-notch</a> graphics, logos, and illustrations from our creative and graphic design agency.
               <ShowMoreContent>
               We are a leading creative design agency with a motto to <a href="/smart-contracts-development">create something exquisite for our clients globally.</a> Our custom logo design packages are specifically tailored as per your business needs.
               </ShowMoreContent>
               </p>
               <Row>
                  <Col lg={4} className={'sagheer-div-get-started'}>
                     <GetStarted buttonClass={'getStarted-btn'} buttonText={'Get Started'} />
                  </Col>
               </Row>
            </div>
         </Col>
      </BannerWrapper>
   )
}

export default CreativePackagesBanner