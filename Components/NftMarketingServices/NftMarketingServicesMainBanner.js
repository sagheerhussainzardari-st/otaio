import BannerWrapper from '@/horBannerWrapper/BannerWrapper'
import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import GetStarted from '../Buttons/GetStarted'

const NftMarketingServicesMainBanner = () => {
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
                                Marketing
                            </text>
                        </g>
                    </svg>
                    <h1>
                        NFT Marketing Services
                    </h1>
                    <p>
                        Idealize your <b>NFT Marketing Campaign</b> and Boost your Reach with the leading <b>NFT Marketing Company</b>.
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

export default NftMarketingServicesMainBanner