import BannerWrapper from '@/horBannerWrapper/BannerWrapper'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted'

const NftDevelopmentServicesMainBanner = () => {
    return (
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
                                Services
                            </text>
                        </g>
                    </svg>
                    <h1>
                        {/* <Fade top cascade> */}
                            NFT Development Services
                        
                    </h1>
                    <p>
                        Be the owner of unique and distinguishable NFTs, to stand on top of the NFT world by acquiring outstanding <b>NFT Development Services</b>.
                    </p>
                    <p>
                        If you like to keep up with digital evolution and gain virtual assets for your business then you have come to the right place Acquire assets virtually in the form of NFTs. Hire us! For your <b>NFT development</b>. Our <b>NFT development services</b> include giving the best <b>NFT development solutions</b> which are customized especially for your project. We provide services of NFT development with features like transparency and uniqueness on various token standards to increase their desirability.
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
    )
}

export default NftDevelopmentServicesMainBanner