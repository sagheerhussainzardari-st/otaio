import BannerWrapper from '@/horBannerWrapper/BannerWrapper'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import GetStarted from '../Buttons/GetStarted'

const SocialTokenDevelopmentMainBanner = () => {
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
                                Token
                            </text>
                        </g>
                    </svg>
                    <h1>
                        Social Token Development
                    </h1>
                    <p>
                        Monetize your brand in the world of crypto through <b>Social Token Development</b> and empower your community with numerous benefits.
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

export default SocialTokenDevelopmentMainBanner