import ECommerceSolutionsMainBanner from '@/components/Banners/ECommerceSolutionsBanner/ECommerceSolutionsMainBanner'
import Estores from '@/components/Estores/Estores'
import PlatformsWeWorkOn from '@/components/Estores/PlatformsWeWorkOn'
import Services from '@/components/Estores/Services'
import OTAProcess from '@/components/OTAProcess/OTAProcess'
import WatchNow from '@/components/WatchNowBanner/WatchNow'
import React from 'react'

const ECommerceSolutions = () => {
  return (
    <>
      <ECommerceSolutionsMainBanner />
      <Estores />
      <OTAProcess />
      <WatchNow />
      <Services />
      <PlatformsWeWorkOn />
    </>
  )
}

export default ECommerceSolutions