import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bounce } from 'react-reveal'

const WhatIsDao = () => {
    return (

        <div className="OutsourcingBusiness">
            <Container>
                <Row>
                    <Col lg={6} className='m-auto'>
                        
                            <div className="Business">
                                <h2 className='text-light'>
                                    What is DAO?
                                </h2>
                            </div>
                        
                    </Col>
                    <Col lg={6} className="m-auto text-white">
                        
                            <div className="Business">
                                <h6>
                                    A <b>decentralized autonomous organization</b> also known as DAO is a key feature in the web 3 world with which users participate in a platform’s major decision-making activities. With DAOO users can make decisions in the platform’s facets, including governance, service, collection, social, investment, protocols, and media. DAO removes human participation and takes the lead with the technology as everything is taken care of through <b>smart contracts</b> on the hosting blockchains and such protocols assist in disposing of the barriers in the decision-making process.
                                </h6>
                            </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhatIsDao