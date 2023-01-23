import React from 'react'
import SEOPricing from '@/components/PricingComponents/SEOPricing'
import SEOProcess from '@/components/Process/SEOProcess'
import AllAboutSeo from '@/components/SEOServicesComponents/SEOServices/AllAboutSeo'
import SEOSection2 from '@/components/SEOServicesComponents/SEOServices/SEOSection2'
import SEOBanner from '@/components/SEOServicesComponents/SEOBanner';
import Head from 'next/head'
import { schema } from '../utilities/schema';
const SeoServices = () => {
   return (
      <>
      <Head> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema["seo-services"]) }} /> </Head>
          
         <SEOBanner/>
         <SEOSection2 />
         <SEOProcess />
         <AllAboutSeo />
         <SEOPricing />
      </>
   )
}

export default SeoServices