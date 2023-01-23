import CryptocurrencyExchangeMarketingServicesFaqs from '@/components/CryptocurrencyExchangeMarketingServicesSections/CryptocurrencyExchangeMarketingServicesFaqs'
import CryptocurrencyExchangeMarketingServicesMainBanner from '@/components/CryptocurrencyExchangeMarketingServicesSections/CryptocurrencyExchangeMarketingServicesMainBanner'
import CryptocurrencyExchangeMarketingServicesMainBannerAllServices from '@/components/CryptocurrencyExchangeMarketingServicesSections/CryptocurrencyExchangeMarketingServicesMainBannerAllServices'
import React from 'react'
import Head from 'next/head'
import { schema } from '../utilities/schema';
const CryptocurrencyExchangeMarketingServices = () => {
  return (
    <div>
      <Head> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema["cryptocurrency-exchange-marketing-services"]) }} /> </Head>

        <CryptocurrencyExchangeMarketingServicesMainBanner />
        <CryptocurrencyExchangeMarketingServicesMainBannerAllServices />
        <CryptocurrencyExchangeMarketingServicesFaqs />
    </div>
  )
}

export default CryptocurrencyExchangeMarketingServices