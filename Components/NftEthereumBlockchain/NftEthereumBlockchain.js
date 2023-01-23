import Link from 'next/link'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Bounce } from 'react-reveal'
import GetStarted from '../Buttons/GetStarted'
const NftEthereumBlockchain = () => {
    return (
        <div className='py-5'>
            <Container>
                <Col lg={8} className='m-auto text-center'>
                    <h2>
                        <b>
                            Brief Insight into Smart Contract standards on Ethereum Blockchain:
                        </b>
                    </h2>
                    <p>
                        The Smart contract has to follow the token standard which is a subset standard of smart contracts on different platforms like EOS, BSC, and Ethereum. The token standard contains guidelines on how to create and issue tokens on the blockchain, the smart contract has to comply with the token standard to be functional on the blockchain. The most popular choice for the smart contract is Ethereum and the <Link href='/nft-listing-services'>most popular token standard</Link> are ERC-20 and ERC-721.
                    </p>
                </Col>
                <Row>
                    <Col lg={6}>
                        
                            <div className="planServicesSvg">
                                <svg width="100%">
                                    <defs>
                                        <linearGradient id="gradient" y1="0" y2="1">
                                            <stop stopColor="#054084" offset="0" />
                                            <stop stopColor="#054084" offset="1" />
                                        </linearGradient>
                                    </defs>
                                    <g>
                                        <text
                                            id="text"
                                            y="103"
                                            strokeWidth="1"
                                            stroke="url(#gradient)"
                                            fill="rgb(0, 0, 0,0.2)"
                                        >
                                            ERC
                                        </text>
                                    </g>
                                </svg>
                                <h2>
                                    ERC-20
                                </h2>
                                <p>
                                    ERC-20 is the basic fungible token standard on blockchain development in which the fungible token can be created, and exchanged. The ERC-20 is the dominant standard for the development of blockchain, ERC-20 standard provides a basic framework to transfer and approve tokens on the blockchain and allow coalescing with other wallet and marketplace due to its standardized commands.
                                </p>
                            </div>
                            <Col lg={4}>
                                <GetStarted buttonText='Schedule a Call' buttonClass='getStarted-btn' />
                            </Col>
                        
                    </Col>
                    <Col lg={4} className="m-auto">
                        
                            <img
                                className="w-100"
                                src={"/Assets/NftPage/ERC20Img.png"}
                                alt="ResourcesOutsourcingBusinessImg02"
                            ></img>
                        
                    </Col>
                </Row>

                <Row>
                    <Col lg={5} className="m-auto">
                        
                            <img
                                className="w-100"
                                src={"/Assets/NftPage/ERC721Img.jpg"}
                                alt="ResourcesOutsourcingBusinessImg02"
                            ></img>
                        
                    </Col>
                    <Col lg={6}>
                        
                            <div className="planServicesSvg">
                                <svg width="100%">
                                    <defs>
                                        <linearGradient id="gradient" y1="0" y2="1">
                                            <stop stopColor="#054084" offset="0" />
                                            <stop stopColor="#054084" offset="1" />
                                        </linearGradient>
                                    </defs>
                                    <g>
                                        <text
                                            id="text"
                                            y="103"
                                            strokeWidth="1"
                                            stroke="url(#gradient)"
                                            fill="rgb(0, 0, 0,0.2)"
                                        >
                                            ERC
                                        </text>
                                    </g>
                                </svg>
                                <h2>
                                    ERC-721
                                </h2>
                                <p>
                                    ERC-721 standard is used for Non-Fungible token, NFTs are cryptogenic token which is unique, indivisible, and can easily be differentiated from the other tokens, which means that NFTs are not interchangeable, they are used to tokenized collectibles such as <a href="/creative-design-packages">digital art</a>, music, land, tickets, etc.
                                </p>
                            </div>
                            <Col lg={4}>
                                <GetStarted buttonText='Schedule a Call' buttonClass='getStarted-btn' />
                            </Col>
                        
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default NftEthereumBlockchain