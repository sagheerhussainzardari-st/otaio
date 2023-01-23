import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce, Zoom } from 'react-reveal'

const ReachOut = () => {
    return (
        <div className="howWeWork pb-5">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="consultationContent">
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
                                        Reach Out
                                    </text>
                                </g>
                            </svg>
                            
                                <h2 className='text-dark'>Reach Out to us Right now! </h2>
                            
                            
                                <h6 className='mt-5'>
                                    Our experts are masters in the development of the <b>DAO-enabled NFT Marketplace platform</b>. So, this is the right time to get on board with a <b>DAO-enabled NFT marketplace business</b>. Contact us today to stay ahead!
                                </h6>
                            
                        </div>
                    </Col>
                    <Col lg={4} className="m-auto">
                        
                            <Link href="https://calendly.com/ota-usman/30min">
                                <button className="schedulecall  rounded-pill ">
                                    Schedule a Call
                                </button>
                            </Link>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReachOut