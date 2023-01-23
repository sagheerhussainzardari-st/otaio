import BannerWrapper from '@/horBannerWrapper/BannerWrapper'
import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted'

const NftListingServicesMainBanner = () => {
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
                                    Listing
                                </text>
                            </g>
                        </svg>
                        <h1>
                            {/* <Fade top cascade> */}
                                NFT Listing Services
                            
                        </h1>
                        <p>
                            Let our experts list your NFTs and assist you to reach a wider audience with their expertise in <b>NFT listing services</b>. Our NFT listing services will surely help you reach <Link href='/smart-contracts-development'>more reliable NFT collectors</Link>, and <Link href='/nft-development-services'>improve your visibility among NFT investors</Link>.
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

export default NftListingServicesMainBanner