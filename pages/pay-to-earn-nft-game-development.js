import PayToExistNftGameDevelopmentAllServices from '@/components/PayToExistNftGameDevelopmentServices/PayToExistNftGameDevelopmentAllServices'
import PayToExistNftGameDevelopmentMainBanner from '@/components/PayToExistNftGameDevelopmentServices/PayToExistNftGameDevelopmentMainBanner'
import React from 'react'
import Head from 'next/head'
import { schema } from '../utilities/schema';
const PayToExistNftGameDevelopment = () => {
  return (
    <div>
      <Head> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema["pay-to-earn-nft-game-development"]) }} /> </Head>

      <PayToExistNftGameDevelopmentMainBanner />
      <PayToExistNftGameDevelopmentAllServices />
    </div>
  )
}

export default PayToExistNftGameDevelopment