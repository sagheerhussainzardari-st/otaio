import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce, Fade, Zoom } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted'

const DeFiLgnitionNftStaking = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col lg={7} className="m-auto">
                        
                            <div className="StartUp pt-5 mt-5">
                                <span className="BgText">NFT Staking</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        
                                            <h2>DeFi-Ignition NFT Staking</h2>
                                        
                                        
                                            <p>
                                                Decentralized finance is the foundation of the crypto space which boosts the survival of the crypto and every other of its assets in the crypto sphere. DeFi basically eliminated the centralized authority and made everything privacy concerned by automating the transaction with a smart contract.
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
                                src="/Assets/NftPage/DeFi-IgnitionNftStaking.jpg"
                                alt="design packages"
                            ></img>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DeFiLgnitionNftStaking