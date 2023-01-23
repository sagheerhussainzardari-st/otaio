import GetStarted from '@/components/Buttons/GetStarted';
import ShowMoreContent from '@/components/ShowMoreText/ShowMoreContent';
import BannerWrapper from '@/horBannerWrapper/BannerWrapper';
import Link from 'next/link';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'

const NFTStakingPlatformDevelopmentBanner = () => {
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
                                NFT
                            </text>
                        </g>
                    </svg>
                    <h1>
                        <strong>NFT Staking Platform</strong> Development Services
                    </h1>
                    <p>
                        Enable users to yield the <Link href='/nft-listing-services'>benefits of the Crypto world limitlessly</Link> through a reliable and fine <b>NFT Staking Platform Development</b>. <b>NFT Staking Platforms</b> is one the most exciting area in the crypto sphere, through NFT staking <Link href='/social-token-development'>platform Development</Link> you can <Link href='/lead-generation-services'>easily grow your income through investment.</Link>
                    </p>
                    <p>
                        NFT Staking is one of the fastest paths to take if you want to stake crypto in <Link href='/smart-contracts-development'>this new digital world</Link>, and you can provide this service to users through the <b>best NFT Staking Platform development</b> which will make the process faster and easier for our users.
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

export default NFTStakingPlatformDevelopmentBanner