import HomePageSection2 from '@/components/HomePageCompoents/HomePageSection2/HomePageSection2';
import OTAProcess from '@/components/OTAProcess/OTAProcess';
import OurServices from '@/components//OurServices/OurServices';
import HomePageMainBanner from '../Components/Banners/homePageBanner/banner'
import React from "react";
import dynamic from 'next/dynamic';
import VerticalSlider from '@/components/HomePageCompoents/VerticalSlider/VerticalSlider';
// const VerticalSlider = dynamic(() => import('@/components/HomePageCompoents/VerticalSlider/VerticalSlider'), {
//   ssr: false,
//   loading: () => "Loading..."
// });

const Home = () => {

 
  return (
    <>
      <HomePageMainBanner />
      <HomePageSection2 />
      <VerticalSlider />
      <OTAProcess />
      <OurServices />
      
    </>

  )
}
export default Home