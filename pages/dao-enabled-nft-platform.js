import DaoEnabledNftMarketplacePlatformDevelopment from '@/components/DaoEnabledNftPlatformSection/DaoEnabledNftMarketplacePlatformDevelopment'
import DaoEnabledNftPlatformMainBanner from '@/components/DaoEnabledNftPlatformSection/DaoEnabledNftPlatformMainBanner'
import DaoEnabledNftPlatformServices from '@/components/DaoEnabledNftPlatformSection/DaoEnabledNftPlatformServices'
import ReachOut from '@/components/DaoEnabledNftPlatformSection/ReachOut'
import WhatIsDao from '@/components/DaoEnabledNftPlatformSection/WhatIsDao'
import React from 'react'
import Head from 'next/head'
import { schema } from '../utilities/schema';
const DaoEnabledNftPlatform = () => {
  return (
    <div>
      <Head> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema["dao-enabled-nft-platform"]) }} /> </Head>

        <DaoEnabledNftPlatformMainBanner />
        <WhatIsDao />
        <DaoEnabledNftMarketplacePlatformDevelopment />
        <DaoEnabledNftPlatformServices />
        <ReachOut />
    </div>
  )
}

export default DaoEnabledNftPlatform