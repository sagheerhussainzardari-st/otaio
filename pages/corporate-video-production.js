import React from 'react'
import VideoDevelopmentProcess from '@/components/Process/VideoDevelopmentProcess'
import VideoDevelopmentBanner from '@/components/Banners/VideoDevelopmentBanner/VideoDevelopmentBanner'
import VideoDevelopmentCharacterAnimation from '@/components/VideoDevelopmentCharacterAnimation/VideoDevelopmentCharacterAnimation'
import VideoDevelopmentMotionGraphics from '@/components/VideoDevelopmentMotionGraphics/VideoDevelopmentMotionGraphics'
import VideoDevelopmentOnline from '@/components/VideoDevelopmentOnline/VideoDevelopmentOnline'
import VideoDevelopmentScreenCast from '@/components/VideoDevelopmentScreenCast/VideoDevelopmentScreenCast'
import VideoDevelopmentPlans from '@/components/PricingComponents/VideoDevelopmentPlans';

const CorporateVideoProduction = () => {
   return (
      <>
       
         <VideoDevelopmentBanner />
         <VideoDevelopmentOnline />
         <VideoDevelopmentProcess />
         <VideoDevelopmentMotionGraphics />
         <VideoDevelopmentCharacterAnimation />
         <VideoDevelopmentScreenCast />
         <VideoDevelopmentPlans />

      </>
   )
}

export default CorporateVideoProduction