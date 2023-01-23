import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce, Fade, Zoom } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted'

const NftStakingMarket = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col lg={7} className="m-auto">
                        
                            <div className="StartUp pt-5 mt-5">
                                <span className="BgText">Market</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        
                                            <h2 className='mb-0'>NFT Staking Platform development</h2>
                                            <h4>A need of the Crypto Market</h4>
                                        
                                        
                                            <p>
                                                <b>NFT staking platform</b> is a need for the growing crypto Market as some people just like the traditional world like to lock up their NFT and then sell them at higher prices whenever the demand is high, the <b>NFT Staking Platform Development</b> enables the users to enjoy various benefits such as rewards and airdrops through blockchain technology.
                                            </p>
                                            <p>
                                                A blockchain with the NFT has made it the <Link href='/cyber-security-services'>most trusted tech</Link> in the crypto world. The NFT staking <Link href='/digital-marketing-services'>market is expanding consistently day by day</Link>. The prime features of minting the NFT have brought many artists and other creators into the crypto world. The requirement for an NFT is getting varied based on the people who are in need as it transforms.
                                            </p>
                                        
                                        <Col lg="3">
                                            <GetStarted buttonClass="getStarted-btn btn btn-primary" buttonText="Get Started"
                                            ></GetStarted>
                                        </Col>
                                    </ul>
                                </div>
                            </div>
                        
                    </Col>
                    <Col lg={5} className="m-auto">
                        
                            <img
                                className="w-100"
                                src="/Assets/NftPage/NftStakingMarketImg.png"
                                alt="design packages"
                            ></img>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NftStakingMarket