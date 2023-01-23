import React from 'react'
import DigitalMarketingLeadGeneration from '@/components/DigitalMarketingComponents/DigitalMarketingLeadGeneration.js/DigitalMarketingLeadGeneration';
import DigitalMarketingOnline from '@/components/DigitalMarketingComponents/DigitalMarketingOnline/DigitalMarketingOnline';
import DigitalMarketingPricing from '@/components/PricingComponents/DigitalMarketingPricing';
import DigitalMarketingProcess from '@/components/Process/DigitalMarketingProcess';
import DigitalMarketingSeo from '@/components/DigitalMarketingComponents/DigitalMarketingSeo/DigitalMarketingSeo';
import DigitalMarketingSocialMediaMarketing from '@/components/DigitalMarketingComponents/DigitalMarketingSocialMediaMarketing/DigitalMarketingSocialMediaMarketing';
import SocialMediaManagement from '@/components/DigitalMarketingComponents/SocialMediaManagement/SocialMediaManagement';
import SeoDMBanner from '@/components/Banners/SeoDMBanner/SeoDMBanner';
const SeoDigitalMarketing = () => {
   return (
      <>
       
         <SeoDMBanner />
         <DigitalMarketingOnline />
         <DigitalMarketingProcess />
         <DigitalMarketingSeo />
         <DigitalMarketingSocialMediaMarketing />
         <SocialMediaManagement />
         <DigitalMarketingLeadGeneration />
         <DigitalMarketingPricing />

      </>
   )
}

export default SeoDigitalMarketing