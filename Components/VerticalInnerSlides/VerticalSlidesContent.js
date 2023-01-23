import React from 'react'
import { Col } from 'react-bootstrap';
import GetStarted from '../Buttons/GetStarted';
import ShowMoreContent from './../ShowMoreText/ShowMoreContent';

const VerticalSlidesContent = ({ text, additionalText }) => {
   return (
      <>
         <div>
            {text}
            <ShowMoreContent>
               {additionalText}
            </ShowMoreContent>
         </div>
         <Col lg={5}>
            <GetStarted buttonText='Get Started' buttonClass='getStarted-btn' />
         </Col>
      </>
   )
}

export default VerticalSlidesContent