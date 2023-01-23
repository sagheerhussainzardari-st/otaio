import BannerWrapper from '@/horBannerWrapper/BannerWrapper'
import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import GetStarted from '../Buttons/GetStarted'

const CryptocurrencyExchangeMarketingServicesMainBanner = () => {
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
                                Exchange
                            </text>
                        </g>
                    </svg>
                    <h1>
                        Cryptocurrency Exchange Marketing Services
                    </h1>
                    <p>
                        The Ultimate Way to promote your Cryptocurrency Exchange is here!
                    </p>
                    <p>
                        Attract a wider audience and reach your destined <Link href='/nft-development-services'>goals with our brilliant expert team</Link> who are dedicated to increasing your daily trading volumes.
                    </p>
                    <p>
                        Cryptocurrency exchange eases the purchasing and selling process of digital currencies like Ethereum, Bitcoin, and many more.
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

export default CryptocurrencyExchangeMarketingServicesMainBanner