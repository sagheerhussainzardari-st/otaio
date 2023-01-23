import React from 'react'
import LeadGenerationBanner2 from '@/components/LeadGenerationComponent/LeadGenerationBanner2/LeadGenerationBanner2';
import LeadGenerationProcess from '@/components/Process/LeadGenerationProcess';
import LeadGenServices from '@/components/LeadGenerationComponent/LeadGenServices/LeadGenServices';
import LeadGenerationPricingComponent from '@/components/LeadGenerationPricingComponent/LeadGenerationPricingComponent';
import LGBanner from '@/components/Banners/LGBanner/LGBanner';
import Head from 'next/head'
import { schema } from '../utilities/schema';
const LeadGenerationServices = () => {
   return (
      <>
      <Head> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema["lead-generation-services"]) }} /> </Head>
         <LGBanner/>
         <LeadGenerationBanner2 />
         <LeadGenerationProcess />
         <LeadGenServices />
         <LeadGenerationPricingComponent />
      </>

   )
}

export default LeadGenerationServices