import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Link from 'next/link';
import GetStarted from './../Components/Buttons/GetStarted';
import Head from 'next/head';
import { metaDetails } from './../MetaTagTitleAndDescription/metadetails';
const PrivacyPolicy = () => {
   return (
      <>
         <Head>
            <title>{metaDetails[`privacy-policy`]?.title}</title>
            <meta name="description" content={metaDetails[`privacy-policy`]?.description} />
            <meta property="og:title" content={metaDetails[`privacy-policy`]?.title} />
            <meta property="og:description" content={metaDetails[`privacy-policy`]?.description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ota" />
            <meta name="twitter:title" content={metaDetails[`privacy-policy`]?.title} />
            <meta name="twitter:description" content={metaDetails[`privacy-policy`]?.description} />
         </Head>

         <Header />
         <div>
            <div className="aboutUsPageBanner">
               <div className="aboutUsMainBanner">
                  <Container>
                     <Row>
                        <Col lg={6} className="m-auto text-center">
                           <div className="smartWork mt-5 mb-5">
                              <h1>Privacy Policy</h1>
                              <p>
                                 This Privacy Policy describes how “Outsource To Asia”
                                 (“Company” or “we” hereby) collects uses and shares
                                 information provided by you when you visit our website
                                 located at &nbsp;
                                 <Link href="/">
                                    <a className="text-light">
                                       <b>https://outsourcetoasia.co</b>
                                    </a>
                                 </Link> or use
                                 any of our services.
                              </p>
                           </div>
                        </Col>
                     </Row>
                     <Row>
                        <Col lg={2} className="m-auto">
                           <GetStarted buttonClass="getStarted-btn" buttonText="Get Started" />
                        </Col>
                     </Row>
                  </Container>
               </div>
            </div>
            <Container>
               <div className="aboutUsPageContent my-5">
                  <h3>GENERAL</h3>
                  <p className="my-5">
                     This Privacy Policy describes how “Outsource To Asia” (“Company” or
                     “we” hereby) collects uses and shares information provided by you
                     when you visit our website located at &nbsp;
                     <Link href="/">https://outsourcetoasia.co</Link> or use any of our
                     services.{" "}
                  </p>
                  <p className="my-5">
                     This policy also informs you about your rights as visitors or
                     viewers of our website with respect to your Personal data and how
                     you can get your questions answered about your Personal data and our
                     Privacy Policy.
                  </p>
                  <p className="my-5">
                     We own the rights to change our Privacy Policy anytime in the
                     future. If we change the Policy, we will update it in this section
                     of our website along with the date of revision. When you visit our
                     site or any of our services, you become subject to our Privacy
                     Policy. You agree to our collection and use of your Personal Data
                     and any other information. We use the data collected from our
                     website according to the laws and regulations of collecting,
                     sharing, using and transmitting of your Personal and non-Personal
                     Data.
                  </p>
                  <p className="my-5">
                     Please read our Privacy Policy and our Cookie Policy thoroughly and
                     if you have any questions pertaining to it, please feel free to
                     contact us through the contact information given at the bottom of
                     the page.
                  </p>
               </div>
               <div>
                  <h3>Whose personal data do we process?</h3>
                  <ul>
                     <li className="my-3">We can process your personal data if:</li>
                     <ul>
                        <li className="my-3">
                           You are a visitor, client or vendor of OTA. (or are interested
                           in becoming one);
                        </li>
                        <li className="my-3">
                           You use our products and/or our services;
                        </li>
                        <li className="my-3">
                           You work for our client and/or vendor, or someone who uses
                           services and/or products that have been developed by us;
                        </li>
                        <li className="my-3">
                           You are a client (or work for a client), who we want to tell
                           about and offer our services and/or products;
                        </li>
                        <li className="my-3">
                           You are our employee, subcontractor, or are interested in
                           working with us.
                        </li>
                     </ul>
                  </ul>
               </div>
               <div>
                  <h3>What kind of personal information do we collect?</h3>
                  <ul>
                     <li>
                        We collect personal data and other information provided to us
                        either by you or by a third party.
                     </li>
                  </ul>
                  <ul>
                     <li>This information can include:</li>
                     <ul>
                        <li>
                           Information about your employer, subdivision, and official
                           duties;
                        </li>
                        <li>
                           our address, phone number, email address, or any other contact
                           details;
                        </li>
                        <li>
                           Personal information given to us during phone conversations,
                           email correspondence, the use of our website (information
                           gathered when you register to receive newsletters; place an
                           order; participate in a contest, advertising campaign, or
                           survey; form submits when you are reporting a problem);
                        </li>
                        <li>
                           Information regarding any cooperation between OTA and you or
                           your employer (such as requesting specifications for products
                           we’ve developed and/or services we have provided to you or your
                           employer);
                        </li>
                     </ul>
                     <ul>
                        <li>Other personal information includes;</li>
                        <ul>
                           <li>
                              Technical information including the IP address which you use
                              to connect to the Internet;
                           </li>
                           <li>Your registration information;</li>
                           <li>The type and version of your browser;</li>
                           <li>Your time-zone;</li>
                           <li>Versions and information about your browser plugins;</li>
                           <li>Your operating system and platform;</li>
                           <li>Information about your visit, including visited URLs;</li>
                           <li>Your browsing history across our website;</li>
                           <li>
                              Information about the time and date when you visited our
                              website;
                           </li>
                           <li>Services and pages that you saw and searched for;</li>
                           <li>Time spent on each page;</li>
                           <li>Page response time;</li>
                           <li>
                              Information on your activities on any page of our website
                              (such as scrolling and mouse clicks or hovers);
                           </li>
                           <li>
                              Ways in which you landed on pages as well as the phone number
                              or social buttons you used to get in touch with us.
                           </li>
                           <li>
                              If you provide OTA with data of/from third parties (such as
                              their names, email addresses, phone numbers, etc.), you
                              guarantee that you have the rights to do so. In certain cases,
                              OTA and partner third-parties can automatically collect data
                              using browser cookies, web logs, web beacons, and other
                              similar applications and attachments.
                           </li>
                        </ul>
                     </ul>
                  </ul>
               </div>
               <div>
                  <h3>What we do with your personal information.</h3>
                  <ul>
                     <li>
                        We process your personal information for the following reasons:
                     </li>
                     <ul>
                        <li>
                           Advertising and sales activities as well as presenting
                           information about our services and products (in ways that we
                           determine ourselves);
                        </li>
                        <li>
                           Creating and executing contracts and agreements with you or your
                           employer to:
                        </li>
                        <li>
                           Provide services to clients and other users of these services;
                        </li>
                        <li>Receive goods and services from vendors;</li>
                        <li>
                           Internal processing, including fixes of defects, data analysis,
                           testing, and collecting data for surveys;
                        </li>
                        <li>
                           Improving our website to provide content in the most effective
                           way for you and the device you are using;
                        </li>
                        <li>
                           Improving safety during your visit of our website and use of our
                           products and services;
                        </li>
                        <li>
                           Evaluation and understanding of the efficiency of the
                           advertising that we display to you and other parties as well as
                           displaying relevant advertising;
                        </li>
                        <li>
                           Providing tips and recommendations on services which could be
                           interesting to you or your employer in accordance with your
                           preferences (where applicable).
                        </li>
                     </ul>
                  </ul>
               </div>
               <div>
                  <h3>To whom do we disclose your personal information.</h3>
                  <ul>
                     <li>We can share your personal data with:</li>
                     <ul>
                        <li>
                           Any member of our company, including subsidiaries, affiliated
                           companies.
                        </li>
                        <li>Third parties, including:</li>
                        <li>
                           Our business partners, clients, vendors, and subcontractors;
                        </li>
                        <li>
                           Our auditors, legal consultants, and other professional
                           consultants or
                        </li>
                        <li>We can share data collected via our website with:</li>
                        <li>
                           Our advertisers and advertising networks which need this data to
                           select and display relevant ads to you and others. We do not
                           disclose any data that can personally identify you to
                           advertisers, but we do provide general data about our users. We
                           can also use this general data to help advertisers display ads
                           to our target audience. We can use your personal data to
                           demonstrate ads of our advertisers and their target audience.
                        </li>
                        <li>
                           To protect the rights, property, and security of OTA, our
                           clients, our employees, and other users. This includes sharing
                           information with other companies and organizations (including
                           law enforcement) with the goal of preventing fraud and other
                           risks.
                        </li>
                     </ul>
                  </ul>
               </div>
               <div>
                  <h3>Usage of outbound links</h3>
                  <p>
                     OTA websites might include links that lead to other websites,
                     websites that are controlled by parties we are not related or
                     connected to. After clicking an outbound link we lose any control of
                     collection, storage, or processing of your personal data that is
                     transferred
                  </p>
               </div>
            </Container>
         </div>
         <Footer />
      </>

   )
}

export default PrivacyPolicy

PrivacyPolicy.noLayout = function (page) {
   return (
      <>
         {page}
      </>
   )
}