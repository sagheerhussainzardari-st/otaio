import BannerWrapper from '@/horBannerWrapper/BannerWrapper'
import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import GetStarted from '../Buttons/GetStarted'

const NftMetaverseGameDevelopmentMainBanner = () => {
    return (

        <BannerWrapper mainClass={"CreativeAndDesignMainBanner"}>
            <Col lg={6} className="m-auto">
                <div className="Outsource nftStakingPlatformDevelopmentServicesMainBanner mt-5 mb-5">
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
                                Metaverse
                            </text>
                        </g>
                    </svg>
                    <h1 className='mb-2'>
                        NFT Metaverse Game Development
                    </h1>
                    <h4 className='text-light'>AN EVOLUTION OF GAMING INDUSTRY</h4>
                    <p>
                        Join us to build an NFT-based metaverse game to dive into the most trendy and ever-growing part of the virtual world. So Why NOT, Explore new investment opportunities and earn greater returns by acquiring metaverse NFT game <Link href='/social-token-development'>development services from us!</Link>
                    </p>
                    <Row>
                        <Col lg={4}>
                            <GetStarted buttonClass={'getStarted-btn'} buttonText={'Get Started'} />
                        </Col>
                    </Row>
                </div>
            </Col>
        </BannerWrapper>
    )
}

export default NftMetaverseGameDevelopmentMainBanner