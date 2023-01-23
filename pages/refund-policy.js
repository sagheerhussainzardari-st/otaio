import React from 'react'
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import GetStarted from './../Components/Buttons/GetStarted';
import Head from 'next/head';
import { metaDetails } from './../MetaTagTitleAndDescription/metadetails';

const RefundPolicy = () => {
   return (
      <>
         <Head>
            <title>{metaDetails[`refund-policy`]?.title}</title>
            <meta name="description" content={metaDetails[`refund-policy`]?.description} />
            <meta property="og:title" content={metaDetails[`refund-policy`]?.title} />
            <meta property="og:description" content={metaDetails[`refund-policy`]?.description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ota" />
            <meta name="twitter:title" content={metaDetails[`refund-policy`]?.title} />
            <meta name="twitter:description" content={metaDetails[`refund-policy`]?.description} />
         </Head>
         <Header />
         <div className="aboutUsPageBanner">
            <div className="aboutUsMainBanner">
               <Container>
                  <Row>
                     <Col lg={6} className="m-auto text-center">

                        <div className="smartWork mt-5 mb-5">
                           <h1>Refund Policy</h1>
                           <p>
                              Unlike other Digital Marketing firms, Outsource to Asia
                              issues you a refund when you’re not satisfied with our
                              service and we are sure that it won’t happen with our
                              experts at the back. You can get a free mockup of Web
                              Designing, Logo Designing, Content Marketing, or Graphics
                              tasks. We create a unique approach to bring traffic your
                              way.
                           </p>
                        </div>
                     </Col>
                  </Row>
                  <Row>
                     <Col lg={2} className="m-auto">
                        <GetStarted buttonText='Get Started' buttonClass='getStarted-btn' />
                     </Col>
                  </Row>
               </Container>
            </div>
         </div>
         <Container className="my-5">
            <ol>
               <li className="my-4">
                  Unlike other Digital Marketing firms, Outsource to Asia issues you a
                  refund when you’re not satisfied with our service and we are sure
                  that it won’t happen with our experts at the back. You can get a
                  free mockup of Web Designing, Logo Designing, Content Marketing, or
                  Graphics tasks. We create a unique approach to bring traffic your
                  way.
               </li>
               <li className="my-4">
                  We adopt a cautious strategy to assisting you with getting the most
                  ideal Internet exposure. We ensure utilization of the best SEO
                  practices possible, utilizing perfect methods to assist you with
                  developing your rankings and traffic. Furthermore, whenever given a
                  drawn-out a promising circumstance, we do ensure you'll see higher
                  rankings and traffic from every one of our endeavors.
               </li>
               <li className="my-4">
                  Outsource to Asia control over the policies, and practices, of
                  third-party companies/websites such as, but not limited to, Google,
                  Google My Business, Yelp, or comparative destinations/indexes.
                  Outsource to Asia doesn't have authority over outsider web-based
                  media organizations and practices, for example, however not
                  restricted to, Facebook, Twitter, Instagram, or comparative
                  organizations.
               </li>
               <li className="my-4">
                  We keep risk minimal on our customer’s side regarding all customer
                  website(s) content, photographs, online media substance, and
                  designs. ONVisit our customer privacy page to know more.
               </li>
            </ol>
            <h2 className="my-4">30 Days Marketing Plans Cancellation Policy</h2>
            <p className="my-3">
               Outsource to Asia customers on a continuous months advertising plan
               may drop our agreement, with 30 days earlier as a written notice.
               Outsource to Asia does not refund monthly payments. Cancellation is
               possible after the 30-day cancellation period is finished. The
               customer will be charged for any work done during the 30 days.
            </p>
         </Container>
         <Footer />
      </>
   )
}

export default RefundPolicy
RefundPolicy.noLayout = function (page) {
   return (
      <>
         {page}
      </>
   )
}