import NftMarketplace from '@/components/NftMarketplaceOnEthereumSection/NftMarketplace'
import NftMarketplaceOnEthereumMainBanner from '@/components/NftMarketplaceOnEthereumSection/NftMarketplaceOnEthereumMainBanner'
import WhatIsEthereum from '@/components/NFTStakingPlatformDevelopmentServices/WhatIsEthereum'
import React from 'react'
import Head from 'next/head'
import { schema } from '../utilities/schema';

const NftMarketplaceOnEthereum = () => {
  return (
    <div>
      <Head> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema["nft-marketplace-on-ethereum"]) }} /> </Head>
      <NftMarketplaceOnEthereumMainBanner />
      <NftMarketplace />
      <WhatIsEthereum />
    </div>
  )
}

export default NftMarketplaceOnEthereum