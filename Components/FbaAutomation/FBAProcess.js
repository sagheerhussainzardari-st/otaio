import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Link from 'next/link'
const FBAProcess = () => {
    return (
        <div>
            <div>
                <Container>
                    <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
                        <div className="StartUp">
                            <span className="BgText">FBA</span>
                            <div className="OurServicesHeading">
                                
                                    <h2><b>Process</b></h2>
                                
                            </div>
                        </div>
                    </Col>
                    <div className="WhyChooseUs">
                        <img className="w-100 processImg" src={"/Assets/Services/CreativeDesign/creative_design_agency.png"} alt="creative design agency"></img>
                        <Row className="mobile-view columnInitail">
                            <Col>
                                <Card className="WhyChooseUSCards text-dark">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <img className="w-50 position-relative mb-4" src={"/Assets/AmazonFBA/icon/icon1.png"} alt="Store & Account Setup"></img>
                                        <p><b>Store & Account Setup</b></p>
                                    </Col>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="WhyChooseUSCards text-dark">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <img className="w-50 position-relative mb-4" src={"/Assets/AmazonFBA/icon/icon2.png"} alt="Product Research & Sourcing"></img>
                                        <p><b>Product Research & Sourcing</b></p>
                                    </Col>
                                </Card>
                            </Col>

                            <Col>
                                <Card className="WhyChooseUSCards text-dark">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <img className="w-50 position-relative mb-4" src={"/Assets/AmazonFBA/icon/icon3.png"} alt="Ship products to Amazon warehouses"></img>
                                        <p><b>Ship products to Amazon warehouses</b></p>
                                    </Col>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="WhyChooseUSCards text-dark">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <img className="w-50 position-relative mb-4" src={"/Assets/AmazonFBA/icon/icon4.png"} alt="Market them to your target audience"></img>
                                        <p><b>Market them to your target audience</b></p>
                                    </Col>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="WhyChooseUSCards text-dark">
                                    <Col lg={8} className="m-auto text-center p-0">
                                        <img className="w-50 position-relative mb-4" src={"/Assets/AmazonFBA/icon/icon5.png"} alt="Let Amazon handle the rest"></img>
                                        <p><b>Let Amazon handle the rest</b></p>
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

export default FBAProcess