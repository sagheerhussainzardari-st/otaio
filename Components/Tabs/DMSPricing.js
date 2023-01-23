import React from 'react'
import GetStarted from '@/components/Buttons/GetStarted';
import DiscountedPrice from 'UI/DiscountedPrice/DiscountedPrice'

const DMSPricing = () => {
   return (
      <div className="pt-3 pb-3">
         <div className="mt-5 row">
            <div className="text-center col-lg-5 mb-5 m-auto">
               <div className="card PricingCard BrandFont pt-0 ">
                  <div className="PackageAndPricing">
                     <h4>BASIC</h4>
                     <strong>15 Interested Leads</strong>
                     <p class="fw-bold h5">
                        USD <DiscountedPrice price="1199"/>
                     </p>
                     <small class="text-secondary">*Ad Spend $800 (not included)</small>
                  </div>
                  <ul className="pricing-list">
                     <h4 className="mb-0 mt-1 fw-bold">Brand Development</h4>
                     <li>Logo Design</li>
                     <li>Brand Website</li>
                     <li>Social Media Profiling</li>

                     <h4 className="mb-0 fw-bold">Lead Channels</h4>
                     <li>Facebook</li>
                     <li>Instagram</li>
                     <h4 className="mb-0 fw-bold">Virtual Assistant Services</h4>
                     <li>Lead Connection</li>
                     <li>Lead Verification</li>
                     <li>Lead Nurturing</li>
                  </ul>
                  <GetStarted buttonText='Sign-Up' buttonClass='PricingApplyNowBtn w-100 p-2' />

               </div>
            </div>
            <div className="text-center col-lg-5 mb-5 m-auto">
               <div className="card PricingCard BrandFont pt-0 ActivePricingCard">
                  <div className="PackageAndPricing">
                     <h4>STANDARD</h4>
                     <strong>40 Interested Leads</strong>
                     <p class="fw-bold h5">
                        USD <DiscountedPrice price="1599"/>
                     </p>
                     <small class="text-light">*Ad Spend $2,000 (not included)</small>
                  </div>
                  <ul className="pricing-list">
                     <h5 className="mb-0 mt-1 fw-bold">Brand Development</h5>
                     <li>Logo Design</li>
                     <li>Brand Story</li>
                     <li>Brand Website</li>
                     <li>Social Media Profiling</li>
                     <li>Social Media Posting</li>
                     <li>Facebook Page Reviews ( 10 )</li>
                     <h5 className="mb-0 fw-bold">Lead Channels</h5>
                     <li>Facebook</li>
                     <li>Instagram</li>
                     <li>Linked In</li>
                     <h5 className="mb-0 fw-bold">Virtual Assistant Services</h5>
                     <li>Lead Connection</li>
                     <li>Lead Verification</li>
                     <li>Lead Nurturing</li>
                     <li>Follow-ups</li>

                  </ul>
                  <GetStarted buttonText='Sign-Up' buttonClass='PricingApplyNowBtn w-100 p-2' />

               </div>
            </div>

         </div>
      </div>
   )
}

export default DMSPricing