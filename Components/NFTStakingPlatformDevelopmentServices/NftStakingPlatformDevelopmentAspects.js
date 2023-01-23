import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce, Fade, Zoom } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted'

const NftStakingPlatformDevelopmentAspects = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col lg={5} className="m-auto">
                        
                            <img
                                className="w-100 shadow"
                                src="/Assets/NftPage/NftStakingPlatformDevelopmentAspects.jpeg"
                                alt="design packages"
                            ></img>
                        
                    </Col>
                    <Col lg={7} className="m-auto">
                        
                            <div className="StartUp pt-5 mt-5">
                                <span className="BgText">Development</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        
                                            <h2>NFT Staking Platform Development Aspects</h2>
                                        
                                        
                                            <p className='mb-0'>
                                                <b>Protective Security: </b>
                                            </p>
                                            <p>
                                                Security becomes a crucial part of <Link href='/web-development-services'>any application that is internet-based</Link> and in our staking platform the protocols are defense-grade to any breaches.
                                            </p>
                                            <p className='mb-0'>
                                                <b>Smart Contracts:</b>
                                            </p>
                                            <p>
                                                Smart contracts based on our staking platform are completely automated and the agreements in the smart contract maintain transparency.
                                            </p>
                                            <p className='mb-0'>
                                                <b>APIs: </b>
                                            </p>
                                            <p>
                                                Crypto wallets and other important APIs are integrated into the NFT staking platform automatically.
                                            </p>
                                            <p className='mb-0'>
                                                <b>User Experience: </b>
                                            </p>
                                            <p>
                                                <Link href='/ios-android-app-development'>The user interface has a crucial role</Link> to play in inspiring the user and providing them with an excellent user experience.
                                            </p>
                                        
                                        <Col lg="3">
                                            <GetStarted buttonClass="getStarted-btn btn btn-primary" buttonText="Get Started"
                                            ></GetStarted>
                                        </Col>
                                    </ul>
                                </div>
                            </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NftStakingPlatformDevelopmentAspects