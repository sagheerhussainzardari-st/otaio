import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce, Fade, Zoom } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted'

const NftListingAllServices = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col lg={6} className="m-auto">
                        
                            <div className="StartUp pt-5 mt-5">
                                <span className="BgText">Benefits </span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        <h2>
                                            Benefits of NFT Listing
                                        </h2>
                                        
                                            <p>
                                                Boost Growth: NFT listing provides you enhanced visibility that leads to emerging interest and rapid capital gain growth.
                                            </p>
                                            <p>
                                                <b>Verification of NFT Originality:</b> Listing gives owners and third parties the trusteeship of verified originality as the listing of <Link href='/nft-staking-platform-development'>NFT has all the verified information.</Link>
                                            </p>
                                            <p>
                                                <b>Lifetime earning:</b> This <Link href='/dao-enabled-nft-platform'>provides the NFTs the opportunity</Link> to be sold or loaned as much as the owner wants which gives revenue for a lifetime.
                                            </p>
                                            <p>
                                                <b>Transparency:</b> All information on the NFT marketplace is owned by the creator and this is the whole concept of blockchains.
                                            </p>
                                        
                                        <Col lg="3">
                                            <GetStarted buttonClass="getStarted-btn btn btn-primary" buttonText="Get Started"
                                            ></GetStarted>
                                        </Col>
                                    </ul>
                                </div>
                            </div>
                        
                    </Col>
                    <Col lg={6} className="m-auto">
                        
                            <img
                                className="w-100"
                                src="/Assets/NftListingServices/BenefitsOfNftListing.png"
                                alt="design packages"
                            ></img>
                        
                    </Col>
                </Row>
                <Row>
                    <Col lg={5} className="m-auto">
                        
                            <img
                                className="w-100"
                                src="/Assets/NftListingServices/HowToListNft.jpeg"
                                alt="design packages"
                            ></img>
                        
                    </Col>
                    <Col lg={7} className="m-auto">
                        
                            <div className="StartUp pt-5 mt-5">
                                <span className="BgText">NFT</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        <h2>
                                            How to list NFT?
                                        </h2>
                                        
                                            <p className='mb-0'>
                                                Tap on the “Create” option.
                                            </p>
                                            <p className='mb-0'>
                                                If you already have a collection on the marketplace can add another to that or also create one from scratch.
                                            </p>
                                            <p className='mb-0'>
                                                You mint any type of NFT.
                                            </p>
                                            <p className='mb-0'>
                                                Type in the name and description.
                                            </p>
                                            <p className='mb-0'>
                                                You can select an instant sell price or can put up your piece for the auction too.
                                            </p>
                                            <p className='mb-0'>
                                                Some marketplaces have free listing options and charge later in the future.
                                            </p>
                                            <p className='mb-0'>
                                                Also, change applied by marketplaces are gas prices of transactions.
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
                    <Col lg={5} className="m-auto">
                        
                            <div className="StartUp pt-5 mt-5">
                                <span className="BgText">Remarkable</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        <h2>
                                            Our Remarkable Services
                                        </h2>
                                        
                                            <p>
                                                <b>NFT Minting Platform:</b> We provide you with a sure-shot solution to all your minting problems.
                                            </p>
                                            <p>
                                                <b>NFT Listing Services:</b> Our team helps you in listing your NFT in well-known marketplaces to engage more audiences for you.
                                            </p>
                                            <p>
                                                <b>NFT Marketing:</b> Our marketing helps you to generate better revenue by coming up with unique strategies.
                                            </p>
                                            <p>
                                                <b>NFT Marketplace Development:</b> We experts help you with developing your own detailed marketplace.
                                            </p>
                                        
                                        <Col lg="3">
                                            <GetStarted buttonClass="getStarted-btn btn btn-primary" buttonText="Get Started"
                                            ></GetStarted>
                                        </Col>
                                    </ul>
                                </div>
                            </div>
                        
                    </Col>
                    <Col lg={7} className="m-auto">
                        
                            <img
                                className="w-100"
                                src="/Assets/NftListingServices/OurRemarkableServices.png"
                                alt="design packages"
                            ></img>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NftListingAllServices