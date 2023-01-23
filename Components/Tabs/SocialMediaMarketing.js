import React from 'react'
import GetStarted from '../Buttons/GetStarted'
import DiscountedPrice from 'UI/DiscountedPrice/DiscountedPrice'

const SocialMediaMarketing = () => {
  return (
    <div className="pt-3 pb-3">
      <div className="mt-5 row">
        <div className="text-center col-lg-4 mb-5">
          <div className="card PricingCard BrandFont pt-0 ">
            <div className="PackageAndPricing">
              <h4>Mini Package</h4>
              <h3>
                <span>USD</span><DiscountedPrice price="150" /> <small>/mo</small>{" "}
              </h3>
              (6 Social Media Posts)
            </div>
            <ul>
              <li>Page Management (2 Platforms)</li>
              <li>Cover & Page UI</li>
              <li>6 Social Media Posts</li>
              <li>1 Animation</li>
              <li>Audience Engagement</li>
              <li>Monthly Reporting</li>
            </ul>
            <GetStarted buttonClass={"PricingApplyNowBtn w-100 p-2"} buttonText={"Sign-Up"} />

          </div>
        </div>
        <div className="text-center col-lg-4 mb-5">
          <div className="card PricingCard BrandFont pt-0 ActivePricingCard">
            <div className="PackageAndPricing">
              <h4>Basic Package</h4>
              <h3>
                <span>USD -</span><DiscountedPrice price="350"/> <small>/mo</small>{" "}
              </h3>
              (12 Social Media Posts)
            </div>
            <ul>
              <li>Page Management (Upto 3 Platforms)</li>
              <li>Cover & Page UI</li>
              <li>12 Social Media Posts</li>
              <li>1 Animation</li>
              <li>Audience Engagement</li>
              <li>Monthly Reporting</li>
            </ul>
            <GetStarted buttonClass={"PricingApplyNowBtn w-100 p-2"} buttonText={"Sign-Up"} />

          </div>
        </div>
        <div className="text-center col-lg-4 mb-5">
          <div className="card PricingCard BrandFont pt-0 ">
            <div className="PackageAndPricing">
              <h4>Extended Package</h4>
              <h3>
                <span>USD -</span>$550 <small>/mo</small>{" "}
              </h3>
              (20 Social Media Posts)
            </div>
            <ul>
              <li>Page Management (Upto 3 Platforms)</li>
              <li>Cover & Page UI</li>
              <li>20 Social Media Posts</li>
              <li>1 Animation</li>
              <li>Audience Engagement</li>
              <li>Community Management</li>
              <li>Reputation Management</li>
              <li>Influencer Management</li>
              <li>Targeted Page Likes</li>
              <li>Monthly Reporting</li>
            </ul>
            <GetStarted buttonClass={"PricingApplyNowBtn w-100 p-2"} buttonText={"Sign-Up"} />

          </div>
        </div>
      </div>
    </div>)
}

export default SocialMediaMarketing