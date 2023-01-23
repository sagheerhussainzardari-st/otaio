import React from 'react'
import SocialMediaMarketingProcess from '@/components/Process/SocialMediaMarketingProcess';
import SMMServices from '@/components/SocialMediaMarketingComponents/SMMServices/SMMServices';
import SMMService2 from '@/components/SocialMediaMarketingComponents/SMMService2/SMMService2';
import SocialMediaMarketingBanner from '@/components/SocialMediaMarketingComponents/SocialMediaMarketingBanner/SocialMediaMarketingBanner';
import Head from 'next/head'
import { schema } from '../utilities/schema';
const SocialMediaMarketing = () => {
   return (
      <>
      <Head> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema["social-media-management"]) }} /> </Head>
         
         <SocialMediaMarketingBanner />
         <SMMService2 />
         <SocialMediaMarketingProcess />
         <SMMServices />
      </>
   )
}
export default SocialMediaMarketing