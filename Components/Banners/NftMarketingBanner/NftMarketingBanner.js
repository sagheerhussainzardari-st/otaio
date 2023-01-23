import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import BannerWrapper from '@/hor//BannerWrapper/BannerWrapper'
import GetStarted from '../../Buttons/GetStarted'
import ShowMoreContent from '../../ShowMoreText/ShowMoreContent'
const NftMarketingBanner = () => {
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
                                    NFT
                                </text>
                            </g>
                        </svg>
                        <h1>
                            {/* <Fade top cascade> */}
                                Smart Contract
                            
                        </h1>
                        <h3>
                            Development
                        </h3>
                        <p>
                            Procure our <strong>smart contract development services</strong> to become part of <Link href='/dao-enabled-nft-platform'>ever-growing blockchain technology</Link>. <strong>Smart contract development</strong> <a href="/lead-generation-services">enables the transactions between buyer and seller</a> to self-execute on the Blockchain without any central body involvement and saves your time.
                            <ShowMoreContent>
                                <span>
                                    <b>GO ON!</b> Reach out to us, and start your venture in the Blockchain world by developing smart contracts which will self-execute across a decentralized and distributed ledger, known as “blockchain”, through codes, and make the transactions trackable from the <a href="/web-development-services">very first step to the last, in the database.</a>
                                </span>
                            </ShowMoreContent>
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

export default NftMarketingBanner