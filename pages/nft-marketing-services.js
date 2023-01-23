import NftMarketingAllServices from '@/components/NftMarketingServices/NftMarketingAllServices'
import NftMarketingServicesMainBanner from '@/components/NftMarketingServices/NftMarketingServicesMainBanner'
import Web3MarketingNftVentures from '@/components/NftMarketingServices/Web3MarketingNftVentures'
import React from 'react'
import Head from 'next/head'
import { schema } from '../utilities/schema';
const NftMarketingServices = () => {
  return (
    <div>
      <Head> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema["nft-marketing-services"]) }} /> </Head>

        <NftMarketingServicesMainBanner />
        <Web3MarketingNftVentures />
        <NftMarketingAllServices />
    </div>
  )
}

export default NftMarketingServices