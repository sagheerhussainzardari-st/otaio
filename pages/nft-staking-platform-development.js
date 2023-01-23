import NFTStakingPlatformDevelopmentBanner from '@/components/Banners/NFTStakingPlatformDevelopmentBanner/NFTStakingPlatformDevelopmentBanner'
import BusinessOpportunities from '@/components/NFTStakingPlatformDevelopmentServices/BusinessOpportunities'
import DeFiLgnitionNftStaking from '@/components/NFTStakingPlatformDevelopmentServices/DeFiLgnitionNftStaking'
import NftStakingMarket from '@/components/NFTStakingPlatformDevelopmentServices/NftStakingMarket'
import NftStakingPlatformDevelopmentAspects from '@/components/NFTStakingPlatformDevelopmentServices/NftStakingPlatformDevelopmentAspects'
import NftStakingPlatformSolutions from '@/components/NFTStakingPlatformDevelopmentServices/NftStakingPlatformSolutions'
import WhatIsNftStaking from '@/components/WhatIsNftStaking/WhatIsNftStaking'
import React from 'react'
import Head from 'next/head'
import { schema } from '../utilities/schema';

const NFTStakingPlatformDevelopment = () => {
    return (
        <>
            <Head> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema["nft-staking-platform-development"]) }} /> </Head>
            <NFTStakingPlatformDevelopmentBanner />
            <WhatIsNftStaking />
            <NftStakingMarket />
            <BusinessOpportunities />
            <DeFiLgnitionNftStaking />
            <NftStakingPlatformDevelopmentAspects />
            <NftStakingPlatformSolutions />
        </>
    )
}

export default NFTStakingPlatformDevelopment 