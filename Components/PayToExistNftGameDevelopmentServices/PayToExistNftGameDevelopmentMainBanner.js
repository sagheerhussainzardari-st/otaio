import BannerWrapper from '@/horBannerWrapper/BannerWrapper'
import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import GetStarted from '../Buttons/GetStarted'

const PayToExistNftGameDevelopmentMainBanner = () => {
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
                                    Outsourcing
                                </text>
                            </g>
                        </svg>
                        <h1>
                            P2E NFT Game Development
                        </h1>
                        <p>
                            <b>P2E NFT games</b>, a type of game that will change the ways of traditional games, P2E NFT games is one of the exciting features offered by web3 and <Link href='/nft-metaverse-game-development'>Metaverse in which users can play by using augmented and virtual reality</Link> and earn rewards simultaneously. These rewards are specials as they can be used not only to buy in-game assets and characters but also you can convert into money through NFTs.
                        </p>
                        <p>
                            So what are you waiting for, just think that if the players are getting so many benefits then how much <b>P2E NFT game development</b> will become an advantage for you?
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

export default PayToExistNftGameDevelopmentMainBanner