import React from 'react'
import { Row } from 'react-bootstrap';
import GetStarted from '@/components/Buttons/GetStarted';
import DiscountedPrice from 'UI/DiscountedPrice/DiscountedPrice'

const SMMPricing = () => {
   return (
      <Row>
         <div className="pt-3 pb-3">
            <div className="mt-5 row m-auto">
               <div className="text-center col-lg-4 mb-5 m-auto">
                  <div className="card PricingCard BrandFont pt-0 ">
                     <div className="PackageAndPricing">
                        <h4>Basic</h4>
                        <h3>
                           USD<DiscountedPrice price="399" />
                        </h3>
                     </div>
                     <ul className="pricing-list">
                        <h5 className="mb-0 mt-1 fw-bold">Branding &amp; Strategy</h5>
                        <li>Logo Design + Style Guide</li>
                        <li>Social Media Design</li>
                        <li>Social media presence</li>
                        <li>Competitive Analysis ( Basic )</li>
                        <li>Digital Discovery</li>
                        <li>Roadmap Planning</li>
                        <h5 className="mb-0 fw-bold">Content &amp; Social</h5>
                        <li>Brainstorm Content Ideas</li>
                        <li>Content Creation</li>
                        <li>Creative Designing (10 Posts)</li>
                        <li>Social Media Management</li>
                        <h5 className="mb-0 fw-bold">Life Cycle Marketing</h5>
                        <li>Evaluation</li>
                        <li>Awareness</li>
                     </ul>

                     <GetStarted buttonClass={"PricingApplyNowBtn w-100 p-2"} buttonText="Sign-Up" />
                  </div>
               </div>
               <div className="text-center col-lg-4 mb-5 m-auto">
                  <div className="card PricingCard BrandFont pt-0 ActivePricingCard">
                     <div className="PackageAndPricing">
                        <h4>Best Package</h4>
                        <h3>
                           USD <DiscountedPrice price="999" />
                        </h3>
                     </div>
                     <ul className="pricing-list">
                        <h5 className="mb-0 mt-1 fw-bold">Branding &amp; Strategy</h5 >
                        <li>Logo Design + Style Guide</li>
                        <li>Social Media Design</li>
                        <li>Social media presence</li>
                        <li>Competitive Analysis (Basic )</li>
                        <li>Digital Discovery</li>
                        <li>Roadmap Planning</li>
                        <h5 className="mb-0 fw-bold">Content &amp; Social</h5>
                        <li>Brainstorm Content Ideas</li>
                        <li>Content Creation</li>
                        <li>Creative Designing (15 Posts)</li>
                        <li>Social Media Management</li>
                        <li>Post Boosting ( 1 Time )</li>
                        <h5 className="mb-0 fw-bold">Life Cycle Marketing</h5>
                        <li>Evaluation</li>
                        <li>Awareness</li>
                        <li>Engagement</li>
                        <h5 className="mb-0 fw-bold">Paid Social &amp;  Search</h5>
                        <li>Facebook</li>
                        <li>Instagram</li>
                     </ul>

                     <GetStarted buttonClass={"PricingApplyNowBtn w-100 p-2"} buttonText="Sign-Up" />
                  </div>
               </div>

            </div>
         </div>
      </Row>
   )
}

export default SMMPricing