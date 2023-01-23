import React from 'react'
import GetStarted from '../Buttons/GetStarted'

const TabLeadGeneration = () => {
  const leadGenerationOTAPricing = [
    {
       type: "BASIC",
       third_party_cost: 500,
       total_cost: 999,
       services: {
          "facebook": ["2 Ad Copies", "Lead Forms", "Messenger Leads", "Campaign Management"]
       },
       number_of_platform: function () {
          return Object.keys(this.services).length
       },
       estimated_leads: 25,
       our_services_cost: function () {
          return this.total_cost - this.third_party_cost
       },
       discounted_price: function () {
          return this.third_party_cost + +(this.our_services_cost() * .6).toFixed(2)
       }
    },
    {
       type: "STANDARD",
       third_party_cost: 1500,
       total_cost: 2499,
       services: {
          "facebook": ["2 Ad Copies", "Lead Forms", "Messenger Leads", "Campaign Management"],
          "linkedin": ["2 Ad Copies", "Lead Forms", "Campaign Management"]
       },
       number_of_platform: function () {
          return Object.keys(this.services).length
       },

       estimated_leads: 75,

       our_services_cost: function () {
          return this.total_cost - this.third_party_cost
       },
       discounted_price: function () {
          return this.third_party_cost + +(this.our_services_cost() * .6).toFixed(2)
       }
    },
    {
       type: "ADVANCE",
       third_party_cost: 2500,
       total_cost: 3499,
       services: {
          "facebook": ["3 Ad Copies", "Lead Forms", "Messenger Leads", "Campaign Management"],
          "linkedin": ["3 Ad Copies", "Lead Forms", "Campaign Management"],
          "google_ppc": ["3 Ad Copies", "Campaign Management"]
       },
       number_of_platform: function () {
          return Object.keys(this.services).length
       },
       estimated_leads: 100,
       our_services_cost: function () {
          return this.total_cost - this.third_party_cost
       },
       discounted_price: function () {
          return this.third_party_cost + +(this.our_services_cost() * .6).toFixed(2)
       }
    },

 ]
  return (
    <div className="mt-5 row">
      {
        React.Children.toArray(
          leadGenerationOTAPricing.map((pricing, idx) => {

            return (
              <div className="text-center col-lg-4 mb-5">
                <div className={`card PricingCard BrandFont pt-0 ${idx === 1 ? "ActivePricingCard" : ""}`}>
                  <div className="PackageAndPricing mb-3">
                    <h4>{pricing.type.toUpperCase()}</h4>
                    <h3>
                      <span>USD - ${pricing.total_cost} </span>
                    </h3>
                  </div>
                  {
                    React.Children.toArray(
                      Object.values(pricing.services).map((service, id) => {
                        return (
                          <>
                            <h6>
                              <span>{Object.keys(pricing.services)[id].replaceAll("_", " ").toUpperCase()}</span>
                            </h6>
                            <ul>
                              {
                                React.Children.toArray(
                                  service.map((s) => <li>{s}</li>)
                                )
                              }
                            </ul>
                          </>
                        )
                      })
                    )
                  }
                  <h6>
                    <span>BUDGET</span>
                  </h6>
                  <ul>
                    <li>${pricing.third_party_cost} ( {pricing.number_of_platform()} Platform )</li>
                  </ul>
                  <h5 className="mb-4">
                    <b>EST. LEADS: {pricing.estimated_leads}</b>
                  </h5>
                  <GetStarted buttonText='Sign-Up' buttonClass='PricingApplyNowBtn w-100 p-2' />

                </div>
              </div>
            )
          })
        )
      }

    </div>
  )
}

export default TabLeadGeneration