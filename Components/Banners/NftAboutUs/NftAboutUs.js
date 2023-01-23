import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Bounce } from 'react-reveal';
import Link from 'next/link'
const NftAboutUs = () => {
    return (
        <div>
            <div className="OutsourcingBusiness pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={6} className="m-auto">
                            
                                <img className="w-100" src={"/Assets/NftPage/nftAbout.png"} alt="nftAbout"></img>
                            
                        </Col>
                        <Col lg={6} className="m-auto">
                            
                                <div className="Business">
                                    <svg width="100%">
                                        <defs>
                                            <linearGradient id="gradient" y1="0" y2="1">
                                                <stop stopColor="#054084" offset="0" />
                                                <stop stopColor="#054084" offset="1" />
                                            </linearGradient>
                                        </defs>
                                        <g>
                                            <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">About</text>
                                        </g>
                                    </svg>
                                    <h2>Smart Contracts Development</h2>
                                    <p>
                                        We are the pioneer of <b>smart contract development</b> on <a href="/ios-android-app-development">different platforms, we have an experienced team of developers</a> and researchers dedicated only to the blockchain and smart contracts. Our team has full command of different blockchain <b>smart contract development services</b> with <Link href='/nft-marketing-services'>expertise on different token standards</Link> such as ERC-20 and ERC-721 on the <Link href='/nft-marketplace-on-ethereum'>Ethereum blockchain</Link> and as well as on different BEP standards on the Binance Smart Chain. We are one of the top smart contract development companies because of <a href="/seo-services">our diligence to deliver all our projects successfully.</a>
                                    </p>
                                </div>
                            
                        </Col>
                    </Row>
                    <Col lg={3} className='m-auto mt-5'>
                        <Link href="https://calendly.com/ota-usman/30min">
                            <button className="getStarted-btn">
                                Schedule a Call
                            </button>
                        </Link>
                    </Col>
                </Container>
            </div>
        </div>
    )
}

export default NftAboutUs