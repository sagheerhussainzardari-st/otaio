import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Layout/Header';
import GetStarted from './../Components/Buttons/GetStarted';
import Footer from './../Layout/Footer';
import { metaDetails } from './../MetaTagTitleAndDescription/metadetails';
import Head from 'next/head';

const TermsAndConditions = () => {
   return (
      <>
         <Head>
            <title>{metaDetails[`terms-and-conditions`]?.title}</title>
            <meta name="description" content={metaDetails[`terms-and-conditions`]?.description} />
            <meta property="og:title" content={metaDetails[`terms-and-conditions`]?.title} />
            <meta property="og:description" content={metaDetails[`terms-and-conditions`]?.description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ota" />
            <meta name="twitter:title" content={metaDetails[`terms-and-conditions`]?.title} />
            <meta name="twitter:description" content={metaDetails[`terms-and-conditions`]?.description} />
         </Head>
         <Header />
         <div className="aboutUsPageBanner">
            <div className="aboutUsMainBanner">
               <Container>
                  <Row>
                     <Col lg={6} className="m-auto text-center">
                        <div className="smartWork mt-5 mb-5">
                           <h1>Terms & Conditions</h1>
                           <p>
                              The decision of visiting our website, landing pages and
                              availing our service is exclusively your choice. Any
                              argument about protection is dependent upon our Privacy
                              Policy and our Conditions of Use. This incorporates
                              constraints on harms, mediation of questions, and the
                              material law of state. On the off chance that the customer
                              has any issues in regards to the Privacy Policy, they should
                              get in touch with us through our contact information given
                              on the website.
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
         <Container className="my-5">
            <h3>TERMS OF USE</h3>
            <p className="my-3">
               The decision of visiting our website, landing pages and availing our
               service is exclusively your choice. Any argument about protection is
               dependent upon our Privacy Policy and our Conditions of Use. This
               incorporates constraints on harms, mediation of questions, and the
               material law of state. On the off chance that the customer has any
               issues in regards to the Privacy Policy, they should get in touch with
               us through our contact information given on the website.
            </p>
            <p className="my-3">
               We own the rights to change our policies at any time. Therefore, we
               suggest that our visitors and customers thoroughly read the policy
               before they enter the website or avail any of our services.
            </p>
            <p className="my-3">
               We collect personal information and data about where guests go on our
               site, what pages they visit, how much time they spent on the pages and
               more. This data enables us to see which of our pages or services are
               most visited and helps us improve our services and understand our
               customers. We own the complete rights of all materials, including
               pictures, representations, plans, symbols, photos, content and
               different materials that are a part of this Site.
            </p>
            <p className="my-3">
               The customer may download or duplicate the Contents and other
               downloadable materials showed on the Site for their personal use as it
               were. No right, title or enthusiasm for any downloaded materials or
               programming is moved to the customer because of any such downloading
               or duplicating. The customer may not replicate (with the exception of
               as noted above), distribute, transmit, convey, show, alter, make
               subordinates, sell or partake in any deal or misuse of the site, its
               substance, or any related programming.
            </p>
         </Container>
         <Container>
            <h3>Testimonials</h3>
            <p className="my-4">
               All remarks, feedback, recommendations, thoughts, and different
               entries revealed, submitted or offered to Our Company on or by this
               Site or generally unveiled, submitted or offered regarding your
               utilization of this Site (all things considered, the "Remarks") will
               remain the Company's property.
            </p>
            <p className="my-4">
               All remarks, feedback, recommendations, thoughts, and different
               entries revealed, submitted or offered to Our Company on or by this
               Site or generally unveiled, submitted or offered regarding your
               utilization of this Site (all things considered, the "Remarks") will
               remain the Company's property.
            </p>
            <p className="my-4">
               The Company will claim complete rights, titles and interests and will
               not be constrained at all in its utilization, business or something
               else, with reference to the Comments. The Company is and will be under
               no commitment:
            </p>
            <ol>
               <li>To keep up any Comments in certainty;</li>
               <li>To pay clients for any Comments; or</li>
               <li>To react to any client Comments.</li>
            </ol>
            <p>
               The organization can likewise utilize the tributes and logos of the
               customers on its other web and disconnected properties.
            </p>
         </Container>
         <Container>
            <h3 className="my-4">Electronic Communications</h3>
            <p>
               Any time the customer visits our site or sends messages to us, the
               customer is communicating with our organization electronically. It's
               automatic for the customer to get our correspondences electronically.
               Our Company will speak with the customer by email or by posting on
               this site. Hence the customer concurs that all understandings,
               notification, divulgences and significant correspondence fulfill and
               satisfy every legitimate prerequisite and are proportionate to any
               lawful explanation recorded as a hard copy.
            </p>
         </Container>
         <Container>
            <h3 className="my-4">Copyright/Trademarks</h3>
            <p>
               All the material that is incorporated on this website, for example,
               content, designs, logos, buttons and their symbols, pictures,
               downloads, information arrangements, and programming, is the property
               of this organization or its substance providers and ensured according
               to the copyright laws. All products utilized at this site is the
               property of this organization or its product providers and ensured
               according to global copyright laws.
            </p>
            <p>
               The trademark names utilized inside our destinations are the property
               of their individual organization or its auxiliaries and can't be
               utilized regarding any item or administration that isn't a piece of
               that organization.
            </p>
         </Container>
         <Container>
            <h3 className="my-4">Copyright Complaints</h3>
            <p>
               The Company and its partners respect the licensed property of others.
               On the off chance that anybody perusing the site accepts that their
               work has been replicated in a manner that establishes copyright
               encroachment, please follow the procedure to making your claim.
            </p>
         </Container>
         <Container>
            <h3 className="my-4">Refund Policy</h3>
            <p>
               <p>
                  outsource to asia will provide full refund if the project has not
                  been started for the next 20 days of purchase. However, this policy
                  can be terminated at any point of time regardless of the scenario
                  and this only implies if the request is made upon viewing the
                  initial concepts only (less the 10% processing fee). Furthermore,
                  any revisions requested after viewing the initial concepts will void
                  this offer and would be considered as continuation of the project.
                  <b>i)</b> The refund policy will not be applicable on any discounted
                  offer.
                  <b>ii)</b> The refund policy will not be applicable if the customer
                  has been unresponsive for more than 20 days.
                  <b>iii)</b> The customer can always request to get his project held
                  for a certain period of time, however, refund won’t be applicable on
                  such situation.
                  <b>iv)</b> The refund will be voided if the refund is requested,
                  over situations not related to the company such as, the business
                  shutting down or partner not agreeing on the design or any scenarios
                  not related to the company.
                  <b>v)</b> Urgent design projects are non-refundable.
                  <b>vi)</b> The company will not refund any client whose work was
                  outsourced to outsource to asia by a third party.
                  <b>vii)</b> If the refund has been processed, the customer or the
                  entity will have zero authority to use any source of work design
                  that has been shared with the client. If found, it will be a breach
                  of contract and legal proceedings will be acted upon.
                  <b>viii)</b> The client will not be refunded any money after the
                  payment has been disputed. Any of such scenarios will lead to
                  termination of the contract.
                  <b>ix)</b> The client can always reach out to outsource to asia in
                  case of any difference between the contract and the commitments made
                  with the client.
                  <b>x)</b> In case of duplicate charges, the 100% refund will be
                  implied on such scenarios.
               </p>
            </p>
            <p>
               <b>Note: </b>The refund will take 10-15 days after the cancellation
               request. However, the client will not use any of the provided work
               shared with the client. In case of bundle purchases, the service in
               question will be refunded only.{" "}
            </p>
            <p>
               You can use the following ways to make sure that you refund is made.
            </p>
            <p>
               {" "}
               1. Call us
               <br />
               2. Click Live chat to start chatting with our representative
               <br />
               3. Email us
            </p>
            <h3 className="my-4">Delivery Policy</h3>
            <p>
               We deliver all our services according to the date specified on the
               Order Confirmation email. You will receive an email from us regarding
               your delivery. Once the order is placed, you will receive an order
               number so that you can track the status of your order and ask for
               revisions. We also offer Rapid Delivery service to our clients that
               they can avail by paying extra. Please contact our customer support to
               know more about it.
            </p>
            <h3 className="my-4">Revision Policy</h3>
            <p>
               Our promise of unlimited revisions is guaranteed. Revision turnaround
               time is 48 hours.
            </p>
            <h3 className="my-4">Bill of Rights</h3>
            <p>
               If you choose to partake in any activity or purchase any of our
               services, you are among the various customers who have safely and
               securely made purchases from us. You can place your order via call,
               email, or live chat. You can unsubscribe from our emails any time you
               want. If we make any changes to our website, or our services, we will
               immediately notify you through email.
            </p>
            <h3 className="my-4">INFORMATION SECURITY POLICY</h3>
            <p>
               OTA believes information management is an essential part of good IT
               governance. Information security is a key component of OTA’s overall
               security management framework, including system level security
               policies and security guidance.
            </p>
            <p>
               Information security enables us to provide the best possible services
               on the market. OTA has defined information security policy
               documentation that is available to our customers upon request. Our
               core principles for information security management rely on
               international security policy definitions that are adapted as
               necessary to the local situation for the following areas:
            </p>
            <ul>
               <li>risk management</li>
               <li>organizing information security</li>
               <li>human resource security</li>
               <li>communications and operations management</li>
               <li>system development and maintenance</li>
               <li>information security incident management</li>
               <li>business continuity management</li>
               <li>compliance</li>
            </ul>
            <h3 className="my-4">E-mail security</h3>
            <p>
               OTA treats that all e-mails received and sent must be kept
               confidential and can only be accessed by the persons indicated in the
               e-mails.
            </p>
            <p>
               The e-mails services used by OTA meet the data security requirements
               of the business.
            </p>
            <p>
               OTA connects to the electronical mailboxes with a secure and
               recognized SSL / TLS protocol that ensures reliable information
               encryption. Also, electronical mailboxes are protected against spam.
            </p>
            <p>
               All outgoing and incoming e-mails are encrypted, so there is a small
               possibility that it could be taken over by third parties.
            </p>
            <p>
               So, you can safely send e-mails to us and open e-mails where the
               sender is OTA.
            </p>
         </Container>
         <Footer />
      </>
   )
}

export default TermsAndConditions

TermsAndConditions.noLayout = function (page) {
   return (
      <>
         {page}
      </>
   )
}