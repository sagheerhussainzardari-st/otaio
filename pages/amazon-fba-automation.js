import FbaPageMainBanner from "../Components/FbaAutomation/MainBanner";
import FBASlider from "../Components/FbaAutomation/FBASlider";
import FBASection2 from "../Components/FbaAutomation/FBAsection2";
import FBAServices from "../Components/FbaAutomation/FBAServices";
import FBAProcess from "../Components/FbaAutomation/FBAProcess";
import ResidualPartner from "../Components/FbaAutomation/ResidualPartner";
import React from "react";
import dynamic from "next/dynamic";
import VerticalSlider from "@/components/HomePageCompoents/VerticalSlider/VerticalSlider";
// const VerticalSlider = dynamic(() => import('@/components/HomePageCompoents/VerticalSlider/VerticalSlider'), {
//   ssr: false,
//   loading: () => "Loading..."
// });

const Home = () => {
  return (
    <>
      <FbaPageMainBanner />
      <FBASection2 />
      <FBASlider />
      <FBAServices />
      <FBAProcess />
      <ResidualPartner />
    </>
  );
};
export default Home;
