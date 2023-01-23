import SocialTokenDevelopmentMainBanner from '@/components/SocialTokenDevelopmentAllSections/SocialTokenDevelopmentMainBanner'
import SocialTokensABriefIntroduction from '@/components/SocialTokenDevelopmentAllSections/SocialTokensABriefIntroduction'
import WhyChooseUsToDevelop from '@/components/SocialTokenDevelopmentAllSections/WhyChooseUsToDevelop'
import React from 'react'
import Head from 'next/head'
import { schema } from '../utilities/schema';
const SocialTokenDevelopment = () => {
  return (
    <div>
      <Head> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema["social-token-development"]) }} /> </Head>

        <SocialTokenDevelopmentMainBanner />
        <WhyChooseUsToDevelop />
        <SocialTokensABriefIntroduction />
    </div>
  )
}

export default SocialTokenDevelopment