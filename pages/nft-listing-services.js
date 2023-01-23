import NftListingAllServices from '@/components/NftListingServicesSections/NftListingAllServices'
import NftListingServicesMainBanner from '@/components/NftListingServicesSections/NftListingServices'
import NftListingServicesSection from '@/components/NftListingServicesSections/NftListingServicesSection'

import React from 'react'
import Head from 'next/head'
import { schema } from '../utilities/schema';
const NftListingServices = () => {
  return (
    <div>
      <Head> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema["nft-listing-services"]) }} /> </Head>

      <NftListingServicesMainBanner />
      <NftListingServicesSection />
      <NftListingAllServices />
    </div>
  )
}

export default NftListingServices