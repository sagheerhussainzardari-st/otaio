import Wrapper from '@/horWrapper/Wrapper'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import { PlatformsWeWorkOnSlider } from 'utilities/slidersettings'
import Heading from '../MainHeading/Heading'
import OurVideo from '../OurVideo/OurVideo'

const PlatformsWeWorkOn = () => {
    return (
        <Wrapper>
            <Container>
                <Heading Heading="Platforms We've Mastered" tagline="We assure you that your website is developed with a robust business strategy and advanced top-notch development technologies. Not to mention our exceptional eCommerce web design services that bring value to your business by delivering the right custom solution to build and scale your brand." mainHeading="E-Commerce" />
                <div className="whitelabeling-price-category my-5">
                    <Slider {...PlatformsWeWorkOnSlider}>
                        <div className="card PricingCard PlatformsWeWorkOn text-center">
                            <img className='w-100' src="/Assets/ECommerceSolutions/slideImg01.png" alt="slideImg01" />
                            <img className='w-100 PlatformsWeMasteredContect' src="/Assets/ECommerceSolutions/PlatformsWeMasteredContect.png" alt="PlatformsWeMasteredContect" />
                        </div>
                        <div className="card PricingCard PlatformsWeWorkOn text-center">
                            <img className='w-100' src="/Assets/ECommerceSolutions/slideImg02.png" alt="slideImg02" />
                            <img className='w-100 PlatformsWeMasteredContect' src="/Assets/ECommerceSolutions/PlatformsWeMasteredContect.png" alt="PlatformsWeMasteredContect" />
                        </div>
                        <div className="card PricingCard PlatformsWeWorkOn text-center">
                            <img className='w-100' src="/Assets/ECommerceSolutions/slideImg04.png" alt="slideImg04" />
                            <img className='w-100 PlatformsWeMasteredContect' src="/Assets/ECommerceSolutions/PlatformsWeMasteredContectMagento.png" alt="PlatformsWeMasteredContect" />
                        </div>
                        <div className="card PricingCard PlatformsWeWorkOn text-center">
                            <img className='w-100' src="/Assets/ECommerceSolutions/slideImg03.png" alt="slideImg03" />
                            <img className='w-100 PlatformsWeMasteredContect' src="/Assets/ECommerceSolutions/PlatformsWeMasteredContect.png" alt="PlatformsWeMasteredContect" />
                        </div>
                        <div className="card PricingCard PlatformsWeWorkOn text-center">
                            <img className='w-100 filter' src="/Assets/ECommerceSolutions/wix.svg" alt="slideImg05" />
                            <img className='w-100 PlatformsWeMasteredContect' src="/Assets/ECommerceSolutions/PlatformsWeMasteredContect.png" alt="PlatformsWeMasteredContect" />
                        </div>
                        <div className="card PricingCard PlatformsWeWorkOn text-center">
                            <img className='w-100' src="/Assets/ECommerceSolutions/prestaShop.svg" alt="slideImg06" />
                            <img className='w-100 PlatformsWeMasteredContect' src="/Assets/ECommerceSolutions/PlatformsWeMasteredContect.png" alt="PlatformsWeMasteredContect" />
                        </div>
                        <div className="card PricingCard PlatformsWeWorkOn text-center">
                            <img className='w-100' src="/Assets/ECommerceSolutions/bigCommerce.svg" alt="slideImg07" />
                            <img className='w-100 PlatformsWeMasteredContect' src="/Assets/ECommerceSolutions/PlatformsWeMasteredContect.png" alt="PlatformsWeMasteredContect" />
                        </div>
                        <div className="card PricingCard PlatformsWeWorkOn text-center">
                            <img className='w-100 filter' src="/Assets/ECommerceSolutions/ecwidLogo.webp" alt="slideImg08" />
                            <img className='w-100 PlatformsWeMasteredContect' src="/Assets/ECommerceSolutions/PlatformsWeMasteredContect.png" alt="PlatformsWeMasteredContect" />
                        </div>
                        <div className="card PricingCard PlatformsWeWorkOn text-center">
                            <img className='w-100 filter' src="/Assets/ECommerceSolutions/weebly.svg" alt="slideImg09" />
                            <img className='w-100 PlatformsWeMasteredContect' src="/Assets/ECommerceSolutions/PlatformsWeMasteredContect.png" alt="PlatformsWeMasteredContect" />
                        </div>
                    </Slider>
                </div>
            </Container>
            <Container>

                <Row>
                    <Col lg={4}></Col>
                    <Col lg={6} className="m-auto">
                        <div className="watch">
                            <svg width="100%">
                                <defs>
                                    <linearGradient id="gradient" y1="0" y2="1">
                                        <stop stopColor="#054084" offset="0" />
                                        <stop stopColor="#054084" offset="1" />
                                    </linearGradient>
                                </defs>
                                <g>
                                    <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Watch</text>
                                </g>
                            </svg>
                        </div>
                    </Col>
                </Row>
                <OurVideo />
            </Container>
        </Wrapper>
    )
}

export default PlatformsWeWorkOn