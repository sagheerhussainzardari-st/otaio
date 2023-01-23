import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce, Fade, Zoom } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted'

const BusinessOpportunities = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col lg={5} className="m-auto">
                        
                            <img
                                className="w-100"
                                src="/Assets/NftPage/BusinessOpportunities.png"
                                alt="design packages"
                            ></img>
                        
                    </Col>
                    <Col lg={7} className="m-auto">
                        
                            <div className="StartUp pt-5 mt-5">
                                <span className="BgText">Business</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        
                                            <h2>Business Opportunities</h2>
                                        
                                        
                                            <p className='mb-0'>
                                                <b>Asset-Based NFTs:</b>
                                            </p>
                                            <p>
                                                NFTs that are created by assets that are available both digitally and physically are known to be asset-based NFTs. These assets could be anything from real estate to game characters. Surprisingly, they can even be music or a painting.
                                            </p>
                                            <p className='mb-0'>
                                                <b>Automated NFTs:</b>
                                            </p>
                                            <p>
                                                NFTs that are generated automatically have <Link href='/seo-services'>more influence on the market and the audience</Link>, automated NFT or generative NFT is a great opportunity obtained by NFT Staking Development as automated NFTs are attracting investors massively.
                                            </p>
                                            <p className='mb-0'>
                                                <b>Art-based NFTs:</b>
                                            </p>
                                            <p>
                                                Art-based NFTs are created by <Link href='/creative-design-packages'>digital designers and artists</Link>. Such NFTs are showcased for sale in the NFT marketplace Art-based NFT can bring in a lot of money if launched carefully through Best NFT Staking Platform Development and <Link href='/cryptocurrency-exchange-marketing-services'>relevant marketing</Link>.
                                            </p>
                                            <p className='mb-0'>
                                                <b>Game/Sport-Based NFTs: </b>
                                            </p>
                                            <p>
                                                These NFTs are the most reviewed and influential because they are minted based on their real characters, the NFT staking platform is a huge opportunity to attract a great chunk of users to your platform through Game/sports NFT as sports fan love to buy the NFTs associated with their favorite celebrity.
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

export default BusinessOpportunities