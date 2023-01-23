import ServiceTest from './../Components/InternalLinking/ServiceTest';
import AppDevelopmentServiceLink from './../Components/InternalLinking/AppDevelopmentServiceLink';
import CyberSecurityServiceLink from './../Components/InternalLinking/CyberSecurityServiceLink';
import VSlideAdditionalData1 from './AdditionalSlidesData/Slide1';
import VSlideAdditionalData2 from './AdditionalSlidesData/Slide2';
import VSlideAdditionalData3 from './AdditionalSlidesData/Slide3';
import VSlideAdditionalData4 from './AdditionalSlidesData/Slide4';
import Link from 'next/link'
const VideAnimationService = () => {
   return (
      <>
         Dive right into the sea of imagination, creativity, innovation, and brilliance with both <Link href="/corporate-video-production">2D & 3D animation</Link> involving explainer videos, product demos, and character designs.
      </>
   )
}
const homeSlidesData = [
   {
      context1: 'Looking for a',
      context2: 'better solution',
      context3: 'Solutions',
      text: "Stop staring at the problem; outsource it to us. Outsource to Asia™ is your ticket to survive in the ruthless world of digital marketing. We assist customers in designing and developing future-proof, substantial, and secure digital products based on users' requirements and meet their business objectives.",
      sideImage: '/Assets/HomeAssets/slider/BetterSolutionImg1.png',
      additionalText: <VSlideAdditionalData1 />,
      altAttribute: 'digital marketing'
   },
   {
      context1: 'Save Time, Money,',
      context2: 'And Resources',
      context3: 'Resources',
      text: "We are honest and forthright upfront, always offering a comprehensive breakdown of the time necessary to finish a project and how much it will cost when preparing a proposal for a potential customer. Letting us handle your digital needs relinquish your resources so that you can focus on more pressing matters.",
      sideImage: '/Assets/HomeAssets/slider/Resources.png',
      additionalText: <VSlideAdditionalData2 />,
      altAttribute: 'handle your digital needs'
   },

   {
      context1: 'Customer-Centric',
      context2: 'And Resources',
      context3: 'Approach',
      text: "Having helped brands generate better businesses, we have created several success stories. We will not unnecessarily pitch you stuff you don’t require. We have made excellent relations with our clients through our endeavor of providing effective services and solutions. Our digital marketing services ensure that every cent spent is an investment for the future.",
      sideImage: '/Assets/HomeAssets/slider/Approach.png',
      additionalText: 'We are a flexible full-service bpo outsourcing company centered on providing solutions that reflect your brand image and set of values. Our brand captains/heroes look forward to making your product shine among the rest. Your competitors will observe a noticeable difference in your new re-emerged brand identity. Come excel with us.',
      altAttribute: "bpo outsourcing company"
   },
   {
      context1: 'Unmatched Customer',
      context2: 'Retention Rate',
      context3: 'Retention',
      text: <VSlideAdditionalData3 />,
      sideImage: '/Assets/HomeAssets/slider/Retention.png',
      additionalText: 'You will feel a clear difference working with us as compared to the other digital agencies in the market, we are bound and determined to make your brand stand out among other rival companies. It’s because we believe in nothing but the best. When you come on board with us, we make it a priority to make your brand among the top-tier names in the market.',
      altAttribute:'digital agencies in the market'
   },
   {
      context1: 'What Are You',
      context2: 'Waiting For ?',
      context3: 'Together',
      text: "Drop your Projects in the Pipeline Today! Signup Now and start outsourcing your projects to your geeky friends from Asia.",
      sideImage: '/Assets/HomeAssets/slider/Together.png',
      additionalText: <VSlideAdditionalData4 />,
      altAttribute:'start outsourcing your projects'
   },

];

const servicesCardsContent = [
   {
      icon: "/Assets/HomeAssets/icon.png",
      title: "Creative & Design",
      details:
         "Make a statement in the market with the aid of innovative and high-quality, immersive, and mesmerizing designs.",
      href: "/creative-design-packages",
   },
   {
      icon: "/Assets/HomeAssets/icon2.png",
      title: "Web Development",
      details:
         "Building websites that provide a digital pathway to clients-driving traffic and sales alike, getting you the results you are after.",
      href: "/web-development-services",
   },
   {
      icon: "/Assets/HomeAssets/icon3.png",
      title: "Digital Marketing",
      details:
         "Elevate your brand through innovative marketing solutions, custom strategies, market insights, and immaculate execution.",
      href: "/digital-marketing-services",
   },
   {
      icon: "/Assets/HomeAssets/icon4.png",
      title: "Content Writing",
      details: <ServiceTest />,
      href: "/content-writing-services",
   },
   {
      icon: "/Assets/HomeAssets/icon5.png",
      title: "App Development",
      details: <AppDevelopmentServiceLink />,
      href: "/ios-android-app-development",
   },
   {
      icon: "/Assets/HomeAssets/icon6.png",
      title: "Video Animation",
      details: <VideAnimationService />,
      href: "/corporate-video-production",
   },
   {
      icon: "/Assets/HomeAssets/icon7.png",
      title: "Cyber Security",
      details: <CyberSecurityServiceLink />,
      href: '/cyber-security-services'
   },
   {
      icon: "/Assets/HomeAssets/icon8.png",
      title: "Ecommerce",
      details:
         "An appealing E-Commerce web development is the essence of your business. An exceptional website is more than just a beautiful store. It takes the data and delivers you the information, provides user comfort and builds your brand stronger than ever.",
      href: "/web-development-services"
   },
];
export { homeSlidesData, servicesCardsContent }