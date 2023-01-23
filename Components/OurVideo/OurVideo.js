import React from 'react'
import Video from '../Video/Video.js'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted.js'

const OurVideo = () => {
    return (
        <div>
            <Row className="videoSection">
                <Col lg={6} md={12} className="p-0 position-relative">
                    <div className="laptop-wrapper">
                        {/* </Fade left> */}
                            <Video />
                            
                    </div>
                </Col>
                <Col lg={5} md={12} className="p-0">
                    {/* </Fade right> */}
                        <div className="watchContent position-relative mt-4"><div className="watch">
                        </div>
                            <h4>
                                What Our
                            </h4>
                            <h2>
                                Clients Say
                            </h2>
                            <span>Happy clients generate healthy business</span>
                            <p>Watch how we help our clients walk through the world wide web directly from their perspective.</p>
                        </div>
                    
                    <Col lg={5}>
                        <GetStarted buttonText={` Get Started`} buttonClass={`getStarted-btn`} />
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default OurVideo