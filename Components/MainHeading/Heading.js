import React from 'react'
import { Col } from 'react-bootstrap';
import { Bounce, Zoom } from 'react-reveal';
import MainHeading from './MainHeading';
const Heading = ({ Heading, tagline, mainTagLine }) => {
   return (
      <Col lg={5} className="text-center m-auto">
         <div className="HomePageBannerFourHeading">
            
               <MainHeading text={mainTagLine} />
               <h2 className='text-light font-size-36'>{Heading}</h2>
            
            
               <p>{tagline}</p>
            
         </div>
      </Col>
   )
}

export default Heading