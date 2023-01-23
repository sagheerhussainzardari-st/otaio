import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce } from 'react-reveal'

const WhatIsNftStaking = () => {
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">NFT</text>
                                    </g>
                                </svg>
                                <h2 className='text-light'>What is NFT Staking?</h2>
                            </div>
                        
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        
                            <div className="Business">
                                <h6>
                                    The <Link href='/dao-enabled-nft-platform'>concept of securing an NFT asset</Link> for numerous purposes is known as NFT staking, and there are a lot of benefits to staking the NFT. These assets that are staked can, directly and indirectly, help in establishing a <Link href='/nft-marketplace-on-ethereum'>liquidity pool in the NFT space</Link>. Also, NFT staking delivers various offers, benefits, rewards and so much more for staking an asset in a platform.
                                </h6>
                            </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhatIsNftStaking