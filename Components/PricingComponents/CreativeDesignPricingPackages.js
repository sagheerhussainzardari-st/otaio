import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { StartupPricing } from './../../utilities/DigitalStraupPricing';
import Heading from './../MainHeading/Heading';
import GetStarted from './../Buttons/GetStarted';
import OurVideo from './../OurVideo/OurVideo';
import Wrapper from '../../HigherOrderWrappers/Wrapper/Wrapper';
import { BrandingAndDesigns } from '../Tabs';
const GetDiscountedPrice = ({ price }) => {
   return (
      <>
         USD&nbsp;
            {price}
         {/* <span>
            &nbsp;${+(price.replaceAll("$", "").replaceAll(",", "") * 0.8).toFixed(2)}
         </span> */}
      </>
   )
}

const CreativeDesignPricingPackages = () => {
   return (
      <div>
         <Wrapper>
            <Container>
               <Row>
                  <Col lg={12} className="m-auto">
                     <Heading
                        Heading="Pricing Packages"
                        tagline="Introducing Outsource to asia pricing packages."
                        mainHeading=""
                     />
                  </Col>
               </Row>
               
               <BrandingAndDesigns/>

               <Row className="mt-5">
                  <Col lg={4}></Col>
                  <Col lg={6} className="m-auto">
                     <div className="watch">
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
                                 Watch
                              </text>
                           </g>
                        </svg>
                     </div>
                  </Col>
               </Row>
               <OurVideo />
            </Container>
         </Wrapper>
      </div>
   )
}

export default CreativeDesignPricingPackages