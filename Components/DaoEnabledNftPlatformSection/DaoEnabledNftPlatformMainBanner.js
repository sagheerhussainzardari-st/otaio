import BannerWrapper from '@/horBannerWrapper/BannerWrapper'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted'

const DaoEnabledNftPlatformMainBanner = () => {
    return (
        <div>
            <BannerWrapper mainClass={"plansPageResourcesOutsourcingMainBanner"} subClass={"outsource-human-resources"}>
                <Col lg={6} className="m-auto">
                    <div className="Outsource mt-5 mb-5">
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
                                    DAO
                                </text>
                            </g>
                        </svg>
                        <h1 className='mb-0'>
                            {/* <Fade top cascade> */}
                                DAO-Enabled
                            
                        </h1>
                        <h3>
                            NFT Platform
                        </h3>
                        <p>
                            Be one of the forerunners in establishing an exceptional <b>decentralized web 3.0</b> world with a <b>DAO-Enabled NFT Platform</b>. DAO-enabled NFT platforms allow you to vote for issue grants and make changes to the existing rules of the platform.
                        </p>
                    </div>
                    <div className="position-relative popUpBtnForHumanResources">
                        <Row>
                            <Col lg={4}>
                                <GetStarted buttonText='Get Started' buttonClass='getStarted-btn' />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </BannerWrapper>
        </div>
    )
}

export default DaoEnabledNftPlatformMainBanner