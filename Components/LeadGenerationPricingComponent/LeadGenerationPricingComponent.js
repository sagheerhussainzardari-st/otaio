import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Wrapper from '../../HigherOrderWrappers/Wrapper/Wrapper';
import Heading from '../MainHeading/Heading';
import OurVideo from '../OurVideo/OurVideo';
import { TabLeadGeneration } from '../Tabs';
const LeadGenerationPricingComponent = () => {


   return (
      <div>
         <Container fluid>
            <Row>
               <Wrapper>
                  <Container>
                     <Row>
                        <Col lg={12} className="m-auto">
                           <Heading
                              Heading="Lead Generation"
                              tagline="Draw in more customers to your brand with OTA's three packages. Choose the one that works best for you. You also have the option to upscale in the future."
                           />
                        </Col>
                     </Row>
                     <Row>
                        <TabLeadGeneration />
                     </Row>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <OurVideo />
                  </Container>
               </Wrapper>
            </Row>

         </Container>
      </div>
   )
}

export default LeadGenerationPricingComponent