import BannerWrapper from '@/horBannerWrapper/BannerWrapper'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted'

const NftConsultingServicesMainBanner = () => {
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
                                    Consulting
                                </text>
                            </g>
                        </svg>
                        <h1>
                            {/* <Fade top cascade> */}
                                NFT Consulting Services
                            
                        </h1>
                        <p>
                            Forethought every technical aspect of an <b>NFT transaction</b> system!
                        </p>
                        <p>
                            OTA offers a wide range of <b>consulting services</b> starting from planning and developing your NFTs in a strategic way to maintaining every minor detail of the final product so you stay worriless.
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

export default NftConsultingServicesMainBanner