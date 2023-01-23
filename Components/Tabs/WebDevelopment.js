import React from 'react'
import DiscountedPrice from 'UI/DiscountedPrice/DiscountedPrice'
import GetStarted from '../Buttons/GetStarted'

const WebDevelopment = () => {
  return (
    <div>
      <div className="pt-3 pb-3">
        <div className="mt-5 row">
          <div className="text-center col-lg-4 mb-5">
            <div className="card PricingCard BrandFont pt-0 ">
              <div className="PackageAndPricing">
                <h4>Landing Page Development</h4>
                <h3>
                  <span>USD</span><DiscountedPrice price="179" />            </h3>
              </div>
              <ul>
                <li>1 Page Website</li>
                <li>2 Stock Images</li>
                <li>Sliding Banner</li>
                <li>Custom Design</li>
                <li>2 Revisions</li>
                <li>CMS (WordPress)</li>
                <li>Mobile Responsive</li>
                <li>After Sales Support</li>
              </ul>
              <GetStarted buttonClass={"PricingApplyNowBtn w-100 p-2"} buttonText={"Sign-Up"} />

            </div>
          </div>
          <div className="text-center col-lg-4 mb-5">
            <div className="card PricingCard BrandFont pt-0 ActivePricingCard">
              <div className="PackageAndPricing">
                <h4>Basic Website Development</h4>
                <h3>
                  <span>USD</span><DiscountedPrice price="349" />                </h3>
              </div>
              <ul>
                <li>Up to 10 Page Website</li>
                <li>5 Stock Images</li>
                <li>Sliding Banner</li>
                <li>Custom Design</li>
                <li>Unlimited Revisions</li>
                <li>CMS (WordPress)</li>
                <li>Mobile Responsive</li>
                <li>After Sales Support</li>
              </ul>
              <GetStarted buttonClass={"PricingApplyNowBtn w-100 p-2"} buttonText={"Sign-Up"} />

            </div>
          </div>
          <div className="text-center col-lg-4 mb-5">
            <div className="card PricingCard BrandFont pt-0 ">
              <div className="PackageAndPricing">
                <h4>Ecommerce Website</h4>
                <h3>
                  <span>USD</span><DiscountedPrice price="699" />                </h3>
              </div>
              <ul>
                <li>Up to 20 Page Website</li>
                <li>10 Stock Images</li>
                <li>Sliding Banner</li>
                <li>Custom Design</li>
                <li>Unlimited Revisions</li>
                <li>(Woo Commerce/Shopify/ PrestaShop/SquareSpace)</li>
                <li>Mobile Responsive</li>
                <li>After Sales Support</li>
              </ul>
              <GetStarted buttonClass={"PricingApplyNowBtn w-100 p-2"} buttonText={"Sign-Up"} />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebDevelopment