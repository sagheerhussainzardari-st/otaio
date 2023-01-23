import NftConsultingServicesMainBanner from '@/components/NftConsultingServicesSections/NftConsultingServicesMainBanner'
import WhyIsNftConsulting from '@/components/NftConsultingServicesSections/WhyIsNftConsulting'
import WhyIsNftConsultingAllServices from '@/components/NftConsultingServicesSections/WhyIsNftConsultingAllServices'
import React from 'react'
import Head from 'next/head'
import { schema } from '../utilities/schema';
const NftConsultingServices = () => {
  return (
    <div>
      <Head> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema["nft-consulting-services"]) }} /> </Head>

        <NftConsultingServicesMainBanner />
        <WhyIsNftConsulting />
        <WhyIsNftConsultingAllServices />
    </div>
  )
}

export default NftConsultingServices