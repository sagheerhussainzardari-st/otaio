import React from 'react'
import { logoSliderSettings } from '../utilities/slidersettings';
import LogoSlider from './../Components/LogoSlider/LogoSlider';
import { Col, Container, Row } from 'react-bootstrap'

const FirmsWeServed = () => {
   return (
      <div>
         <div className="ClientSlider">
            <Container>
               <div className="FirmsWe">
                  <Row>
                     <Col lg={3} className="col-4 m-auto">
                        <h4>Firms We</h4>
                        <h2 className='text-primary'> Served</h2>
                     </Col>
                     <Col lg={8} className="col-8">
                        <LogoSlider settings={logoSliderSettings} className="logoSlider" />
                     </Col>
                  </Row>
               </div>
            </Container>
         </div>
        
        
       
      </div>
   )
}

export default FirmsWeServed
