import BannerWrapper from '@/horBannerWrapper/BannerWrapper'
import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted'

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
                        <h1 className='mb-0'>
                            {/* <Fade top cascade> */}
                                NFT Marketplace
                            
                        </h1>
                        <h3>
                            on Ethereum
                        </h3>
                        <p>
                            Build your own <b>NFT Marketplace on Ethereum</b> to entice the <Link href='/nft-listing-services'>biggest hub for NFT</Link> devotees and <Link href='/dao-enabled-nft-platform'>gain benefits from the blockchain! </Link>
                            Our experts are here you help you build a responsive and reliable <b>NFT marketplace on Ethereum</b> skillfully.
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