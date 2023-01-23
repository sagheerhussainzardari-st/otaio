import MetaverseNftGameDevelopmentSectionTwo from '@/components/NftMetaverseGameDevelopmentSections/MetaverseNftGameDevelopmentSectionTwo'
import NftMetaverseGameDevelopmentAllServices from '@/components/NftMetaverseGameDevelopmentSections/NftMetaverseGameDevelopmentAllServices'
import NftMetaverseGameDevelopmentMainBanner from '@/components/NftMetaverseGameDevelopmentSections/NftMetaverseGameDevelopmentMainBanner'
import React from 'react'
import Head from 'next/head'
import { schema } from '../utilities/schema';
const NftMetaverseGameDevelopment = () => {
  return (
    <div>
      <Head> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema["nft-metaverse-game-development"]) }} /> </Head>

        <NftMetaverseGameDevelopmentMainBanner />
        <MetaverseNftGameDevelopmentSectionTwo />
        <NftMetaverseGameDevelopmentAllServices />
    </div>
  )
}

export default NftMetaverseGameDevelopment