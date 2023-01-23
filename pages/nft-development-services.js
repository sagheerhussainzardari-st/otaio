import BriefInsightIntoWhatIsNft from '@/components/NftDevelopmentServices/BriefInsightIntoWhatIsNft'
import NftDevelopmentServicesMainBanner from '@/components/NftDevelopmentServices/NftDevelopmentServicesMainBanner'
import React from 'react'
import Head from 'next/head'
import { schema } from '../utilities/schema';
const NftDevelopmentServices = () => {
    return (
        <div>
      <Head> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema["nft-development-services"]) }} /> </Head>

            <NftDevelopmentServicesMainBanner />
            <BriefInsightIntoWhatIsNft />
        </div>
    )
}

export default NftDevelopmentServices