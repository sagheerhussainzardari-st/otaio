import BannerWrapper from '@/horBannerWrapper/BannerWrapper'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'

const NftMarketplaceOnEthereumMainBanner = () => {
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
                                    Ethereum
                                </text>
                            </g>
                        </svg>
                        <h1>
                            {/* <Fade top cascade> */}
                                NFT Marketplace
                            
                        </h1>
                        <h3>
                            on Ethereum
                        </h3>
                        <p>
                            Build your own NFT Marketplace on Ethereum to entice the biggest hub for NFT devotees and gain benefits from the blockchain!
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

export default NftMarketplaceOnEthereumMainBanner