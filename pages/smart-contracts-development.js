import NftAboutUs from "@/components/Banners/NftAboutUs/NftAboutUs"
import NftMarketingBanner from "@/components/Banners/NftMarketingBanner/NftMarketingBanner"
import NftEthereumBlockchain from "@/components/NftEthereumBlockchain/NftEthereumBlockchain"
import NftPageCardNotableBenefits from "@/components/NftPageCards/NftPageCardNotableBenefits"
import NftProcess from "@/components/NftProcess.js/NftProcess"
import NftTabs from "@/components/NftTabs/NftTabs"
import Head from 'next/head'

import Layout from '@/layout/Layout';
import { schema } from '../utilities/schema';


const nftMarketing = () => {
   return (
      <>
         <Head>
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{ __html: JSON.stringify(schema["smart-contracts-development"]) }}
            />
         </Head>
         <NftMarketingBanner />
         <NftAboutUs />
         <NftEthereumBlockchain />
         <NftProcess />
         <NftTabs />
         <NftPageCardNotableBenefits />
      </>
   )
}

export default nftMarketing