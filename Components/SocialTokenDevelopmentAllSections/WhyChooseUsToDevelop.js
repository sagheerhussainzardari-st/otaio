import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce } from 'react-reveal'

const WhyChooseUsToDevelop = () => {
    return (
        <div className="OutsourcingBusiness">
            <Container>
                <Row>
                    <Col lg={6} className='m-auto'>
                        
                            <div className="Business">
                                <h3 className='text-light'>
                                    <b>Why choose us to develop your Social token Platform</b>
                                </h3>
                            </div>
                        
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        
                            <div className="Business">
                                <h6>
                                    Our company has expertise in different blockchain networks, <Link href='/cryptocurrency-exchange-marketing-services'>we have a team of crypto</Link> geek who has grasped and mastered the technicalities related to NFT and social and community token development. We can provide you with a robust platform with high security and transparency. We can develop your platform on various blockchains and are determined to give you the best technical support that you will not forget.
                                </h6>
                            </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhyChooseUsToDevelop