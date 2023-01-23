import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce } from 'react-reveal'

const WhyIsNftConsulting = () => {
    return (
        <div className="OutsourcingBusiness">
            <Container>
                <Row>
                    <Col lg={6}>
                        
                            <div className="Business">
                                <svg width="100%">
                                    <defs>
                                        <linearGradient id="gradient" y1="0" y2="1">
                                            <stop stopColor="#054084" offset="0" />
                                            <stop stopColor="#054084" offset="1" />
                                        </linearGradient>
                                    </defs>
                                    <g>
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Why</text>
                                    </g>
                                </svg>
                                <h2 className='text-light'>Why is NFT Consulting is crucial?</h2>
                            </div>
                        
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        
                            <div className="Business">
                                <h6>
                                    NFTs have expanded in elevation in the past years due to the increased adoption among the crypto-savvy community that saw their potential. Such distinction gives rise to more businesses based on these virtual tokens, which have given rise to competition in the <b>web 3.0</b> generation. So, <b>NFT consulting</b> is deemed necessary for an NFT-based startup venture to appeal to the community and take the spot in the gridlock space.
                                </h6>
                            </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhyIsNftConsulting