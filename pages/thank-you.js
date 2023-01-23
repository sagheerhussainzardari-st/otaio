import React, { useEffect } from 'react'
import Heading from './../Components/MainHeading/Heading';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThankYouPageScript from '../Scripts/fbscript'
import GoogleTagMangerScript from '../Scripts/GoogleTagMangerScript';

// import "../Scripts/thankyou"
import Head from 'next/head';
import Script from 'next/script'
const ThankYou = () => {
   const history = useRouter()
   useEffect(() => {
      // setTimeout(() => {
      //    window.location.href = 'https://outsourcetoasia.io';
      // }, 5000);
   }, [])

   return (
      <>
       
         <ThankYouPageScript />
         <GoogleTagMangerScript />
         <div>
            <div className="text-primary HomePageBannerFour d-flex justify-content-center align-items-center vh-100">
               <div>
                  <Heading Heading="Thankyou for contacting us. We'll get back to you." />
                  <div className="col-lg-4 m-auto col-sm-9 col-md-6">
                     <Link href="/">
                        <a className={`getStarted-btn`}>
                           Go To Home Page
                        </a>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JT5M2P"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}
      </>
   )
}

export default ThankYou


ThankYou.noLayout = function (page) {
   return (
      <>
         {page}
      </>
   )
}