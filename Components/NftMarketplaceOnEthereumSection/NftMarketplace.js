import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce } from 'react-reveal'

const NftMarketplace = () => {
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Brief</text>
                                    </g>
                                </svg>
                                <h2 className='text-light'>
                                    Brief Introduction to NFT Marketplace
                                </h2>
                            </div>
                        
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        
                            <div className="Business">
                                <h6>
                                    An <b>NFT marketplace</b> is a software platform where users can purchase, sell, and trade <Link href='/nft-staking-platform-development'>digital assets back with non-fungible tokens (NFTs)</Link>.  Users can find a diverse array of sold NFTs on this platform. Common NFT assets include music, video, artwork, games, and many more. <Link href='/smart-contracts-development'>NFT marketplaces are hosted on blockchain</Link> networks that form the basis of the future’s internet.
                                </h6>
                            </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NftMarketplace