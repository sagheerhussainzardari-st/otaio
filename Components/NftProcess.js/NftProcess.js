import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
import Link from 'next/link'
const NftProcess = () => {
    return (
        <div>
            <div>
                <Container>
                    <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
                        <div className="StartUp">
                            <span className="BgText">Process</span>
                            <div className="OurServicesHeading">
                                
                                    <h2><b>NFT</b></h2>
                                
                            </div>
                        </div>
                    </Col>
                    <div className="WhyChooseUs">
                        <img className="w-100 processImg" src={"/Assets/Services/CreativeDesign/creative_design_agency.png"} alt="creative design agency"></img>
                        <Row className="mobile-view">
                            <Col>
                                <Card className="WhyChooseUSCards text-dark">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon01.png"} alt="creative design"></img>
                                        <p><b>CREATE AWARENESS</b></p>
                                    </Col>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="WhyChooseUSCards text-dark">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <p><b>BUILD HYPE</b></p>
                                        <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon02.png"} alt="logo design packages"></img>
                                    </Col>
                                </Card>
                            </Col>

                            <Col>
                                <Card className="WhyChooseUSCards text-dark">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon03.png"} alt="design agency"></img>
                                        <p><b>COMPETITOR ANALYSIS</b></p>
                                    </Col>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="WhyChooseUSCards text-dark">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <p><b>BRAND POSITIONING</b></p>
                                        <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon04.png"} alt="creative agency"></img>
                                    </Col>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="WhyChooseUSCards text-dark">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon05.png"} alt="logo packages"></img>
                                        <p><b>PLAN & EXECUTE NFT DROPS</b></p>
                                    </Col>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default NftProcess