import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted'
import ShowMoreContent from '../ShowMoreText/ShowMoreContent'

const DaoEnabledNftMarketplacePlatformDevelopment = () => {
    return (
        <div className="section2 pb-5" id="section2">
            <Container>
                <Row>
                    <Col lg={6} className="ota_Bg">
                        {/* </Fade left> */}
                            <div className="whyChooseOta">
                                <h2>DAO-Enabled</h2>
                                <Row>
                                    <Col className="col-1 mt-4">
                                        <i className="fas fa-long-arrow-alt-right text-primary"></i>
                                    </Col>
                                    <Col className="col-11">
                                        <h3 className='mb-3'>DAO-Enabled NFT Marketplace Platform Development</h3>
                                        <p>
                                            A DAO-enabled <Link href='/nft-marketplace-on-ethereum'>NFT marketplace is a platform</Link> where users can make decisions about the platform’s future advancement. DAO is a facet of the NFT marketplace similar to user-end portals. Even though NFT marketplaces promise to be a P2P platform, they are yet not fully decentralized as we have seen several cases of the marketplace doing more than their available powers to save their reputation.
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
                                        <h3 className='mb-3'>How is DAO a part of Evolution?</h3>
                                        <p>
                                            <b>Decentralized autonomous organization development</b> does provide changes in the Marketplace. It is because of the community and the NFT marketplace’s growth. <b>Decentralized autonomous organizations</b> work as fundraising campaigns at the beginning and continue as a decentralized community <Link href='/smart-contracts-development'>trusting smart contract-based</Link> protocol with time. DAOs give more power and the community users can <Link href='/nft-staking-platform-development'>easily earn through staking NFTs.</Link>
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

export default DaoEnabledNftMarketplacePlatformDevelopment