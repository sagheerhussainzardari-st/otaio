import React from 'react'
import ContentWritingBetterBusiness from '@/components/ContentWritingBetterBusiness/ContentWritingBetterBusiness';
import OTAWriting from '@/components/OTAWriting/OTAWriting';
import ContentWritingProcess from '@/components/Process/ContentWritingProcess';
import ContentWritingBanner from '@/components/Banners/ContentWritingBanner/ContentWritingBanner';
import ArticleWritingServices from '@/components/ArticleWritingServices/ArticleWritingServices';
import WebPageCopy from '@/components/WebPageCopy/WebPageCopy';
import ContentWritingPlans from '@/components/PricingComponents/ContentWritingPlans';

const ContentWritingServices = () => {
   return (
      <>
         <ContentWritingBanner />
         <ContentWritingBetterBusiness />
         <ContentWritingProcess />
         <OTAWriting />
         <ArticleWritingServices />
         <WebPageCopy />
         <ContentWritingPlans />
      </>

   )
}

export default ContentWritingServices