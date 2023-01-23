import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce } from 'react-reveal'

const NftListingServicesSections = () => {
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Service</text>
                                    </g>
                                </svg>
                                <h2 className='text-light'>What is NFT Listing Service?</h2>
                            </div>
                        
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        
                            <div className="Business">
                                <h6>
                                    Listing is one of the best tools in marketing promotion and one of the most essential ways to get noticed and gain potential clients.NFT listing provides information about the owners and a description of the NFT. Also, listing <Link href='/nft-marketplace-on-ethereum'>NFTs in a marketplace builds community interaction</Link> and gains more visibility as well among crypto investors and NFT collectors.
                                </h6>
                            </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NftListingServicesSections