const FirmsWeServed = dynamic(() => import('./FirmsWeServed'))
const Consultation = dynamic(() => import('./Consultation'))
const ClientTestimonials = dynamic(() => import('./ClientTestimonials'))
const Footer = dynamic(() => import('./Footer'))

import dynamic from 'next/dynamic';
import Header from './Header';
// import Footer from './Footer';

import { clientCarousal } from '../utilities/slidersettings'
import Head from 'next/head';
import { useRouter } from 'next/router'
import Loader from '../UI/Loader'
import GoogleTagMangerScript from '../Scripts/GoogleTagMangerScript';
// import  '../Scripts/tawkto.js';
import MetaTagsTitleAndDescription from '../MetaTagTitleAndDescription/MetaTagsTitleAndDescription';
import { schema } from '../utilities/schema';
// import '../utilities/gtag'
import { whatsAppChatOptions } from './WhatsAppScript.js'
import React, { useEffect } from 'react'

const Layout = ({ children }) => {
   const router = useRouter()
   useEffect(() => {
      CreateWhatsappChatWidget ? CreateWhatsappChatWidget(whatsAppChatOptions) : null
   }, [router.pathname])
   return (
      <>
         <MetaTagsTitleAndDescription />
         <Head>
            <link href={`https://www.outsourcetoasia.io/${router.pathname.substring(1) ? router.pathname.substring(1) : ''}`} rel="canonical" />
            <link href={`https://www.outsourcetoasia.io/${router.pathname.substring(1) ? router.pathname.substring(1) : ''}`} hrefLang="en-us" rel="alternative" />
            <link rel="alternate" href={`https://www.outsourcetoasia.io/${router.pathname.substring(1) ? router.pathname.substring(1) : ''}`} hrefLang="x-default" />
            <meta name="robots" content="all" />
            <meta name="google-site-verification" content="xzgOLREZ_ZclrIfB5ZMep7_fdUDAfVmeqGXxnOydXak" />
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{ __html: JSON.stringify(schema[`${router.pathname.substring(1) ? router.pathname.substring(1) : ''}`]) }}
            />
            
            <script src={"https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?75608"} type="text/javascript" deffer>
            </script>

            <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=b0f5daf4-d6f5-4128-82c4-3769415d40e3"> </script>
            {/* <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=b0f5daf4-d6f5-4128-82c4-3769415d40e3"> </script> */}

           
            {/* <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=2fc5ea0d-eb9b-40df-88b4-e9a89e3dfde9"> </script> */}
            
            <script src="https://api.leadconnectorhq.com/js/form_embed.js"></script>
            <meta name="trustpilot-one-time-domain-verification-id" content="8f76b65b-11f6-4d7d-a636-ccf20c2e707c"/>
           
           
            {/* <script>

 
{
  `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/63b4486ac2f1ac1e202b7646/1gls3lol0';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();`
}
</script>  */}



            {/* //  <script type="text/javascript">
            //    { */}
            {/* //       `(function(d, src, c) { var t=d.scripts[d.scripts.length - 1],s=d.createElement('script');s.id='la_x2s6df8d';s.defer=true;s.src=src;s.onload=s.onreadystatechange=function(){var rs=this.readyState;if(rs&&(rs!='complete')&&(rs!='loaded')){return;}c(this);};t.parentElement.insertBefore(s,t.nextSibling);})(document, 'https://outsourcetoasiaio.ladesk.com/scripts/track.js', function(e){ LiveAgent.createButton('qwx5eri9', e); });`} </script> */}
 


      



         </Head>

         <GoogleTagMangerScript />
         <Loader />

         <Header />
         {children}
         <FirmsWeServed />
         <ClientTestimonials testimonialTitle={clientCarousal} />
         <Consultation />
        
         {/* <div className="d-flex align-content-center justify-content-around p-2" >
         <a href='https://www.bark.com/en/us/company/outsource-to-asia/Nepvj/' target='_blank' class='bark-widget' data-type='reviews' data-id='Nepvj' data-image='medium-navy' data-version='3.0'>Outsource to asia</a>
         <script  type='text/javascript' src='https://d3a1eo0ozlzntn.cloudfront.net/assets/js/frontend-v2/widgets-v2.24a197bed6.v2.js' defer></script>
         </div> */}
         {/* <div className="d-flex align-content-center justify-content-around p-2" > */}
            {/* <a href='https://www.bark.com/en/us/company/outsource-to-asia/Nepvj/' target='_blank' class='bark-widget' data-type='reviews' data-id='Nepvj' data-image='medium-navy' data-version='3.0'>Outsource to asia</a><script type='text/javascript' src='https://d3a1eo0ozlzntn.cloudfront.net/assets/js/frontend-v2/widgets-v2.24a197bed6.v2.js' defer></script> */}
            {/* <img src='/Assets/HomeAssets/tust.png' width="200" height="100" /> */}
         {/* </div> */}
         <Footer />
         
         {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JT5M2P"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}
      </>
   )
}

export default Layout