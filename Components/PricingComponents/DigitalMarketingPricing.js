import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Heading from './../MainHeading/Heading';
import OurVideo from './../OurVideo/OurVideo';
import Wrapper from '../../HigherOrderWrappers/Wrapper/Wrapper';
import DMSPricing from '../Tabs/DMSPricing';

const DigitalMarketingPricing = () => {
   return (
      <div>
         <Wrapper>
            <Container>
               <Row>
                  <Col lg={12} className="m-auto">
                     <Heading
                        Heading="Digital Marketing"
                        tagline="Introducing Outsource To Asia new pricing packages."
                     />
                  </Col>
                  <DMSPricing/>
               </Row>
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <OurVideo />
            </Container>
         </Wrapper>
      </div >
   )
}

export default DigitalMarketingPricing