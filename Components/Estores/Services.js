import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Bounce, Fade, Zoom } from 'react-reveal';
import { BasicWebsite, eCommerceSolutions, eCommerceSolutionsServices } from 'utilities/WebDevelopmentServices';
import GetStarted from '../Buttons/GetStarted';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';

const Services = () => {
    return (
        <div className="eCommerceSolutionsServices mt-5 pt-5">
            <Container>
                <Row>
                    <Col lg={4} className="m-auto">
                        
                            <div className="StartUp">
                                <span className="BgText">{eCommerceSolutions.heading}</span>
                                <Row className="OurServicesHeading">
                                    <Col className="col-1"></Col>
                                    <Col className="col-1 m-auto">
                                        <i className="fas fa-long-arrow-alt-right text-primary"></i>
                                    </Col>
                                    <Col className="col-10">
                                        
                                            <h2>{eCommerceSolutions.title}</h2>
                                            <h4>{eCommerceSolutions.title2}</h4>
                                        
                                    </Col>
                                </Row>
                            </div>
                        
                    </Col>
                    <Col lg={7} className="m-auto">
                        
                            <p>
                                Having honed our skills, we help create a premium ecommerce experience to win demanding modern consumers without you having to lift a finger. Partnering with OTA will give you unrestricted access to our <b>amazon product hunting, ecommerce order and inventory management services, ecommerce ppc management</b>, and a proficient team of <b>virtual assistants for ecommerce</b> at your beck and call.
                                <ShowMoreContent>
                                    Our <b>ecommerce ppc agency</b> specializes in creating integrated ecommerce infrastructures that are tailored to provide a seamless e-shopping experience. We build up front-office and back-office automation, maintain interoperability within the linked environment, and offer easy and intuitive tools to automate your <b>ecommerce sourcing</b>.
                                </ShowMoreContent>
                            </p>
                        
                    </Col>
                </Row>
                <Row>
                    <Col lg={5} className="m-auto">
                        
                            <img
                                className="w-100"
                                src={eCommerceSolutionsServices.BasicWebsiteImagePath01}
                                alt="affordable custom web design"
                            />
                        
                    </Col>
                    <Col lg={7} className="m-auto">
                        
                            <div className="StartUp pt-5 mt-5">
                                <span className="BgText">{eCommerceSolutionsServices.heading01}</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        
                                            <h2>{eCommerceSolutionsServices.title01}</h2>
                                        
                                        
                                            <h6>
                                                Whether you wish to sell items through Fulfillment by Amazon (FBA) or white label ecommerce, our remarkable trait of eyeing up impeccable products is second to none. We brainstorm new service ideas, analyze rival strategies, ascertain client expectations, and assist you in tailoring the service spectrum to the target demographic. OTA’s <b>amazon product research service</b> will help you increase your Ecommerce business without spending additional money or worrying about scaling concerns.
                                                <ShowMoreContent>
                                                    We select and source items that will optimize sales and profitability for your <b>ecommerce sourcing</b> endeavor using a combination of yours and our stringent criteria. We assist ecommerce store owners such as yourself in identifying "best-sellers". Identifying demand fluctuations, such as during holidays and seasons, we offer the right products through our <b>product sourcing services</b> that appeal to your audience at just the perfect moment.
                                                </ShowMoreContent>
                                            </h6>
                                            <Row>
                                                {BasicWebsite.list01.map((li, id) => {
                                                    if (id < 4) {
                                                        return (
                                                            <Col lg={6}>
                                                                <li>
                                                                    <b>{li}</b>
                                                                </li>
                                                            </Col>
                                                        );
                                                    }
                                                    return (
                                                        <Col lg={6}>
                                                            <li>
                                                                <b>{li}</b>
                                                            </li>
                                                        </Col>
                                                    );
                                                })}
                                            </Row>
                                        
                                        <Col lg="3">
                                            <GetStarted buttonText={BasicWebsite.button[0]} buttonClass={`${BasicWebsite.button[1]}`} />
                                        </Col>
                                    </ul>
                                </div>
                            </div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col lg={7} className="m-auto">
                        
                            <div className="StartUp pt-5 mt-5">
                                <span className="BgText">{eCommerceSolutionsServices.heading02}</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        
                                            <h2>{eCommerceSolutionsServices.title02}</h2>
                                        
                                        
                                            <h6>
                                                Why go product hunting when we can do all the work for you? Getting in touch with suppliers, getting something that sells like hot cakes. All this can be a daunting task. Our product sourcing service covers everything. To top it off, <b>e-commerce sourcing</b> is our forte, especially if you want to <b>source products for e-commerce</b>.
                                                <ShowMoreContent>
                                                    We can also track all the current trends once a product goes live. That’s what reliable <b>product sourcing companies</b> are for. What’s on-demand, what’s not? How to handle suppliers? Let us worry about all this. You can just sit back and relax; let our product sourcing company handle it all.
                                                </ShowMoreContent>
                                            </h6>
                                            <Row>
                                                {BasicWebsite.list02.map((li, id) => {
                                                    if (id < 4) {
                                                        return (
                                                            <Col lg={6}>
                                                                <li>
                                                                    <b>{li}</b>
                                                                </li>
                                                            </Col>
                                                        );
                                                    }
                                                    return (
                                                        <Col lg={6}>
                                                            <li>
                                                                <b>{li}</b>
                                                            </li>
                                                        </Col>
                                                    );
                                                })}
                                            </Row>
                                        
                                        <Col lg="3">
                                            <GetStarted buttonText={BasicWebsite.button[0]} buttonClass={`${BasicWebsite.button[1]}`} />
                                        </Col>
                                    </ul>
                                </div>
                            </div>
                        
                    </Col>
                    <Col lg={5} className="m-auto">
                        
                            <img
                                className="w-100"
                                src={eCommerceSolutionsServices.BasicWebsiteImagePath02}
                                alt="affordable custom web design"
                            />
                        
                    </Col>
                </Row>
                <Row>
                    <Col lg={5} className="m-auto">
                        
                            <img
                                className="w-100"
                                src={eCommerceSolutionsServices.BasicWebsiteImagePath03}
                                alt="affordable custom web design"
                            />
                        
                    </Col>
                    <Col lg={7} className="m-auto">
                        
                            <div className="StartUp pt-5 mt-5">
                                <span className="BgText">{eCommerceSolutionsServices.heading03}</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        
                                            <h2>{eCommerceSolutionsServices.title03}</h2>
                                        
                                        
                                            <h6>
                                                Want an <b>e-commerce PPC service</b> that runs engaging ads for your products? Don’t worry, our <b>e-commerce PPC management</b> is top-notch. Bland ads usually have the opposite effect on potential customers. We’ve all heard that “all publicity is welcome publicity," but not in this case. Leaving a positive impression will go a long way.
                                                <ShowMoreContent>
                                                    Ads are one of the most important factors when it comes to getting news out and about, especially when it comes to newer products. We’re the eCommerce PPC management gurus – managing millions in SKUs and monthly PPC spend, boosting your ROAS(Return on Ad Spend). Let our e-commerce PPC agency handle it all.
                                                </ShowMoreContent>
                                            </h6>
                                            <Row>
                                                {BasicWebsite.list03.map((li, id) => {
                                                    if (id < 4) {
                                                        return (
                                                            <Col lg={6}>
                                                                <li>
                                                                    <b>{li}</b>
                                                                </li>
                                                            </Col>
                                                        );
                                                    }
                                                    return (
                                                        <Col lg={6}>
                                                            <li>
                                                                <b>{li}</b>
                                                            </li>
                                                        </Col>
                                                    );
                                                })}
                                            </Row>
                                        
                                        <Col lg="3">
                                            <GetStarted buttonText={BasicWebsite.button[0]} buttonClass={`${BasicWebsite.button[1]}`} />
                                        </Col>
                                    </ul>
                                </div>
                            </div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col lg={7} className="m-auto">
                        
                            <div className="StartUp pt-5 mt-5">
                                <span className="BgText">{eCommerceSolutionsServices.heading04}</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        
                                            <h2>{eCommerceSolutionsServices.title04}</h2>
                                        
                                        
                                            <h6>
                                                Have trouble with keeping track of everything in stock? It sounds like you need the experience of an amazing <b>inventory management company</b> to help you out. You’d be surprised to learn how many agencies rely on our <b>inventory management services</b>.
                                                <ShowMoreContent>
                                                    Tracking what’s left and what’s sold, what to order and what to deliver; we do it all for you. Our <b>e-commerce inventory management</b> is renowned, and you’ll see why. Sales channels are automatically updated with key information such as shipment updates, tracking references, and order status updates, ensuring that your consumers are kept up to date. OTA’s <b>ecommerce order management</b> also syncs inventory with different channels properly in seconds, minimizing disappointment caused by lack of availability.
                                                </ShowMoreContent>
                                            </h6>
                                            <Row>
                                                {BasicWebsite.list04.map((li, id) => {
                                                    if (id < 4) {
                                                        return (
                                                            <Col lg={6}>
                                                                <li>
                                                                    <b>{li}</b>
                                                                </li>
                                                            </Col>
                                                        );
                                                    }
                                                    return (
                                                        <Col lg={6}>
                                                            <li>
                                                                <b>{li}</b>
                                                            </li>
                                                        </Col>
                                                    );
                                                })}
                                            </Row>
                                        
                                        <Col lg="3">
                                            <GetStarted buttonText={BasicWebsite.button[0]} buttonClass={`${BasicWebsite.button[1]}`} />
                                        </Col>
                                    </ul>
                                </div>
                            </div>
                        
                    </Col>
                    <Col lg={5} className="m-auto">
                        
                            <img
                                className="w-100"
                                src={eCommerceSolutionsServices.BasicWebsiteImagePath04}
                                alt="affordable custom web design"
                            />
                        
                    </Col>
                </Row>
                <Row>
                    <Col lg={5} className="m-auto">
                        
                            <img
                                className="w-100"
                                src={eCommerceSolutionsServices.BasicWebsiteImagePath05}
                                alt="affordable custom web design"
                            />
                        
                    </Col>
                    <Col lg={7} className="m-auto">
                        
                            <div className="StartUp pt-5 mt-5">
                                <span className="BgText">{eCommerceSolutionsServices.heading05}</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        
                                            <h2>{eCommerceSolutionsServices.title05}</h2>
                                        
                                        
                                            <h6>
                                                Maintaining the health of your Amazon Seller Account is pivotal for scaling your business. Would you want to waste time reinstating your suspended account which will disrupt the flow of your business, resulting in lost potential income? Right from the account set-up to managing and optimizing it, our <b>amazon seller account managers</b> handle everything on either your individual or pro merchant account.
                                                <ShowMoreContent>
                                                    Our <b>vendor central management</b> staff will give you a holistic approach to <b>
                                                        amazon seller central management</b>, maximizing the customer service experience, and maintaining the health of your seller account in all aspects. Streamline your <b>
                                                        Amazon Seller Central Management</b> to acquire a competitive advantage over your competition. Our vendor central management team can create an account from scratch or repurpose an existing one, no matter the platform (Amazon, Walmart, eBay, Shopify, etc.)
                                                </ShowMoreContent>
                                            </h6>
                                            <Row>
                                                {BasicWebsite.list05.map((li, id) => {
                                                    if (id < 4) {
                                                        return (
                                                            <Col lg={6}>
                                                                <li>
                                                                    <b>{li}</b>
                                                                </li>
                                                            </Col>
                                                        );
                                                    }
                                                    return (
                                                        <Col lg={6}>
                                                            <li>
                                                                <b>{li}</b>
                                                            </li>
                                                        </Col>
                                                    );
                                                })}
                                            </Row>
                                        
                                        <Col lg="3">
                                            <GetStarted buttonText={BasicWebsite.button[0]} buttonClass={`${BasicWebsite.button[1]}`} />
                                        </Col>
                                    </ul>
                                </div>
                            </div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col lg={7} className="m-auto">
                        
                            <div className="StartUp pt-5 mt-5">
                                <span className="BgText">{eCommerceSolutionsServices.heading06}</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        
                                            <h2>{eCommerceSolutionsServices.title06}</h2>
                                        
                                        
                                            <h6>
                                                Is your productivity going for a toss due to processing backlogs? Save precious hours that you would otherwise have to spend working on less important tasks by hiring our <b>virtual assistant for ecommerce</b> automation. Our skilled <b>ecommerce virtual assistants</b> help you accelerate the growth of your ecommerce store through multichannel growth marketing hacks.
                                                <ShowMoreContent>
                                                    Outsource to Asia’s <b>ecommerce virtual assistant services</b> is a secret weapon for business to power their business to growth and sustainability. Hire remote assistants who are thoroughly familiar with the ecommerce landscape. Our <b>ecommerce virtual assistants</b> handle the tedious work so you can focus on building your business and bringing products to market.
                                                </ShowMoreContent>
                                            </h6>
                                            <Row>
                                                {BasicWebsite.list06.map((li, id) => {
                                                    if (id < 4) {
                                                        return (
                                                            <Col lg={6}>
                                                                <li>
                                                                    <b>{li}</b>
                                                                </li>
                                                            </Col>
                                                        );
                                                    }
                                                    return (
                                                        <Col lg={6}>
                                                            <li>
                                                                <b>{li}</b>
                                                            </li>
                                                        </Col>
                                                    );
                                                })}
                                            </Row>
                                        
                                        <Col lg="3">
                                            <GetStarted buttonText={BasicWebsite.button[0]} buttonClass={`${BasicWebsite.button[1]}`} />
                                        </Col>
                                    </ul>
                                </div>
                            </div>
                        
                    </Col>
                    <Col lg={5} className="m-auto">
                        
                            <img
                                className="w-100"
                                src={eCommerceSolutionsServices.BasicWebsiteImagePath06}
                                alt="affordable custom web design"
                            />
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services