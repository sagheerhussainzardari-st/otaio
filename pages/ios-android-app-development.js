import React from 'react'
import AppDevelopmentFacebook from '@/components/AppDevelopmentFacebook/AppDevelopmentFacebook';
import AppDevelopmentIOSApp from '@/components/AppDevelopmentIOSApp/AppDevelopmentIOSApp';
import AppDevelopmentOtaExclusive from '@/components/AppDevelopmentOtaExclusive/AppDevelopmentOtaExclusive';
import AppDevelopmentPlansPricing from '@/components/PricingComponents/AppDevelopmentPlansPricing';
import AppDevelopmentBanner from '@/components/Banners/AppDevelopmentBanner/AppDevelopmentBanner';
import DevelopedCustomApp from '@/components/DevelopedCustomApp/DevelopedCustomApp';
import AppDevelopmentProcess from '@/components/Process/AppDevelopmentProcess';

const AppDevelopment = () => {
   return (
      <>
         <AppDevelopmentBanner />
         <DevelopedCustomApp />
         <AppDevelopmentProcess />
         <AppDevelopmentOtaExclusive />
         <AppDevelopmentIOSApp />
         <AppDevelopmentFacebook />
         <AppDevelopmentPlansPricing />

      </>
   )

}

export default AppDevelopment