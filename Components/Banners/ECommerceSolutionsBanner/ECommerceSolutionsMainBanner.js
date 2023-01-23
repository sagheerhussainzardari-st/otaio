import GetStarted from '@/components/Buttons/GetStarted'
import ShowMoreContent from '@/components/ShowMoreText/ShowMoreContent'
import BannerWrapper from '@/horBannerWrapper/BannerWrapper'
import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Bounce, Fade } from 'react-reveal'

const ECommerceSolutionsMainBanner = () => {
    return (
        <div>
            <BannerWrapper mainClass={"caseStudiesBanner"} subClass={"case-studies-banner"}>
                <Col lg={6} className="m-auto">
                    <div className="Outsource mt-5 mb-5">
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
                                    Platform
                                </text>
                            </g>
                        </svg>
                        <h1>
                            {/* <Fade top cascade> */}
                                Complete E-Commerce
                            
                        </h1>
                        <h3>
                            
                                Solutions.
                            
                        </h3>
                        <p>
                            Unlock the potential of eCommerce platforms! We empower you to leverage the brand power of Amazon, Walmart, eBay, and Shopify as a distinguished eCommerce web development business through our feature-rich, robust, and reliable <b>eCommerce solutions</b> for hands-free automation.
                            <ShowMoreContent>
                                We know how to merge brand imaginations with our solid tech stack to manifest your dream store. Our eCommerce web developers run through your requirements, identify the competitive roadblocks to <b>eCommerce solutions</b>, and define the scopes to outline the eCommerce website development plan.
                            </ShowMoreContent>
                        </p>
                        <Row>
                            <Col lg={4}>
                                <GetStarted buttonText={`Get Started`} buttonClass={`getStarted-btn`} />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </BannerWrapper>
        </div>
    )
}

export default ECommerceSolutionsMainBanner