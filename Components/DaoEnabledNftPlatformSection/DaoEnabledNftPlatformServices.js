import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce, Fade } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted'

const DaoEnabledNftPlatformServices = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col lg={7} className="m-auto">
                        
                            <div className="StartUp pt-5 mt-5">
                                <span className="BgText">DAO-enabled</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        <h2>
                                            Beneficial Aspects of DAO-enabled NFT Platform
                                        </h2>
                                        
                                            <p className='mb-0'>
                                                <b>Review Policies:</b>
                                            </p>
                                            <p>
                                                Anyone can quickly review all the policies and rules followed by the NFT marketplace and suggest changes.
                                            </p>
                                            <p className='mb-0'>
                                                <b>Stake and Earn:</b>
                                            </p>
                                            <p>
                                                Through this, NFT marketplace users can now earn through staking NFTs and native tokens.
                                            </p>
                                            <p className='mb-0'>
                                                <b>Participation in the Event:</b>
                                            </p>
                                            <p>
                                                DAO gives users the chance to participate in the NFT marketplace.
                                            </p>
                                            <p className='mb-0'>
                                                <b>Voting Power:</b>
                                            </p>
                                            <p>
                                                Voting power is the major feature of DAO where users can contribute to the platform’s reforms.
                                            </p>
                                            <p className='mb-0'>
                                                <b>Total Decentralization:</b>
                                            </p>
                                            <p>
                                                DAOs provide users the power of contributing to the community.
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
                                src="/Assets/DAOEnabledNftPlatform/BeneficialAspectsOfDaoEnabledNftPlatform.jpg"
                                alt="design packages"
                            ></img>
                        
                    </Col>
                </Row>
                <Row>
                    <Col lg={5} className="m-auto">
                        
                            <img
                                className="w-100"
                                src="/Assets/DAOEnabledNftPlatform/NftMarketplaceAfterDaos.jpg"
                                alt="design packages"
                            ></img>
                    </Col>
                    <Col lg={7} className="m-auto">
                        
                            <div className="StartUp pt-5 mt-5">
                                <span className="BgText">Changes</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        <h2>
                                            Changes in NFT Marketplace after DAOs
                                        </h2>
                                        
                                            <p>
                                                Users are allowed to see the coding on the platform and add changes that can be visible.
                                            </p>
                                            <p>
                                                Voted decisions will automatically be executed by the <b>smart contract programs.</b>
                                            </p>
                                            <p>
                                                Decisions are taken in the collaboration with the user community.
                                            </p>
                                            <p>
                                                Community acceptance is needed to shut down a platform.
                                            </p>
                                            <p>
                                                It is not allowed to misuse power by a small set of individuals.
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
                <Row>
                    <Col lg={7} className="m-auto">
                        
                            <div className="StartUp pt-5 mt-5">
                                <span className="BgText">NFT</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        <h2>
                                            Use Cases of DAO-Enabled NFT Marketplace Platforms
                                        </h2>
                                        
                                            <p>
                                                <b>Maxity:</b> 98% of every payment is directly transferred to the charity partners of maxity with benefits during secondary sales. 
                                            </p>
                                            <p>
                                                <b>PleasrDAO:</b> PleasrDAO is an NFT marketplace for <Link href='/nft-listing-services'>NFT art collections and collectors</Link> that plan to use fractional ownership.
                                            </p>
                                            <p>
                                                <b>Flamingo:</b> This platform wants to provide financial functionality to NFTs through Dao. On Flamingo users can employ NFT-based investment strategies. 
                                            </p>
                                            <p>
                                                <b>Mintable:</b> Mintable is a marketplace that utilizes special NFTs to provide voting potential users. It is one of the initial platforms to mix NFTs and DAOs. 
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
                                src="/Assets/DAOEnabledNftPlatform/UseCasesOfDaoEnabledNftMarketplacePlatforms.jpg"
                                alt="design packages"
                            ></img>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DaoEnabledNftPlatformServices