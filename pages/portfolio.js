import React from 'react'
import OurPortfolio from '@/components/OurPortfolio/OurPortfolio';
import PortfolioBanner from '@/components/Banners/PortfolioBanner/PortfolioBanner'
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import AboutPortfolio from '@/components/AboutPortfolio/AboutPortfolio';

const Portfolio = () => {
   return (
      <>
         <PortfolioBanner />
         <AboutPortfolio />
         <OurPortfolio />
         <WhyChooseUs />
      </>
   )
}

export default Portfolio