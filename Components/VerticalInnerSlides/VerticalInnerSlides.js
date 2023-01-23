import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Zoom, Bounce } from 'react-reveal';
import VerticalSlidesContent from './VerticalSlidesContent';
import PropTypes from 'prop-types';

const VerticalInnerSlides = ({ context1, context2, context3, text, sideImage, additionalText, altAttribute }) => {
   return (
      <div>
         <Row>
            <Col lg={6} className="p-0 slideImgBg">
               
                  <img className="w-75" src={sideImage} alt={altAttribute} decoding="async"></img>
               
            </Col>
            <Col lg={6} className="m-auto">
               <svg width="100%">
                  <defs>
                     <linearGradient id="gradient" y1="0" y2="1">
                        <stop stopColor="#696368" offset="0" />
                        <stop stopColor="#76485f" offset="1" />
                     </linearGradient>
                  </defs>
                  <g>
                     <text id="text" y="85" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">{context3}</text>
                  </g>
               </svg>
               <div className="verticalSettingsContent">
                  
                     <h2 className="mb-0">{context1}</h2>
                     <h2><strong>{context2}</strong></h2>
                     <p>
                        <VerticalSlidesContent text={text} additionalText={additionalText} />
                     </p>
                  
               </div>
            </Col>
         </Row>
      </div>
   )
}

VerticalInnerSlides.propTypes = {
   context1: PropTypes.string.isRequired,
   context2: PropTypes.string.isRequired,
   context3: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
   sideImage: PropTypes.string.isRequired,
}

export default VerticalInnerSlides

