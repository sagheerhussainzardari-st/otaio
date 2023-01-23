import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted'

const Web3MarketingNftVentures = () => {
    return (
        <div className="section2 pb-5" id="section2">
            <Container>
                <Row>
                    <Col lg={6} className="ota_Bg">
                        {/* </Fade left> */}
                            <div className="whyChooseOta">
                                <Row>
                                    <Col className="col-1 mt-4">
                                        <i className="fas fa-long-arrow-alt-right text-primary"></i>
                                    </Col>
                                    <Col className="col-11">
                                        <h3 className='mb-3'>
                                            Web 3 Marketing NFT Ventures
                                        </h3>
                                        <p>
                                            <b>NFT Brand Marketing: </b>Brand marketing is done to utilize brand identity accordingly
                                        </p>
                                        <p>
                                            <b>NFT Art Marketing: </b>Our <b>NFT artworks</b> are to <Link href='/nft-consulting-services'>generate buzz around the item to get more bids</Link>.
                                        </p>
                                        <p>
                                            <b>NFT Game Marketing: </b>Our team <Link href='/nft-metaverse-game-development'>market game based on the interest</Link> the Web3 gaming community.
                                        </p>
                                        <p>
                                            <b>NFT Marketplace Marketing: </b>We offer promotions for marketplaces for <Link href='/social-token-development'>building a community of NFT</Link> users and creators.
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={1}></Col>
                                    <Col lg={4} className="m-auto ms-0">
                                        <GetStarted buttonText='Get Started' buttonClass='getStarted-btn' />
                                    </Col>
                                </Row>
                            </div>
                        
                    </Col>
                    <Col lg={6} className="m-auto">
                        {/* </Fade right> */}
                            <div className="whyChooseOta">
                                <Row>
                                    <Col className="col-1 mt-3">
                                        <i className="fas fa-long-arrow-alt-right text-primary"></i>
                                    </Col>
                                    <Col className="col-11">
                                        <h3 className='mb-3'>
                                            Our NFT Marketing Services
                                        </h3>
                                        <p>
                                            Building landing pages.
                                        </p>
                                        <p>
                                            Design Web Designs.
                                        </p>
                                        <p>
                                            Whitepaper Development.
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={1}></Col>
                                    <Col lg={4} className="m-auto">
                                        <GetStarted buttonText='Get Started' buttonClass='getStarted-btn' />
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Web3MarketingNftVentures