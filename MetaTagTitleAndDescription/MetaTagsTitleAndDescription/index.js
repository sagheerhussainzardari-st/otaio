import React from 'react'
import Head from 'next/head'
import { metaDetails } from '../metadetails'
import { useRouter } from 'next/router';
const MetaTagsTitleAndDescription = () => {
   const router = useRouter()

   return (
      <Head>
         <title>{metaDetails[`${router.pathname.replaceAll('/', '') ? router.pathname.replaceAll('/', '') : 'home'}`]?.title}</title>
         <meta name="description" content={metaDetails[`${router.pathname.replaceAll('/', '') ? router.pathname.replaceAll('/', '') : 'home'}`]?.description} />
         <meta property="og:title" content={metaDetails[`${router.pathname.replaceAll('/', '') ? router.pathname.replaceAll('/', '') : 'home'}`]?.title} />
         <meta property="og:description" content={metaDetails[`${router.pathname.replaceAll('/', '') ? router.pathname.replaceAll('/', '') : 'home'}`]?.description} />
         <meta property="og:image" content={metaDetails[`${router.pathname.replaceAll('/', '') ? router.pathname.replaceAll('/', '') : 'home'}`]?.image} />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:site" content="@ota" />
         <meta name="twitter:title" content={metaDetails[`${router.pathname.replaceAll('/', '') ? router.pathname.replaceAll('/', '') : 'home'}`]?.title} />
         <meta name="twitter:description" content={metaDetails[`${router.pathname.replaceAll('/', '') ? router.pathname.replaceAll('/', '') : 'home'}`]?.description} />
         <meta name="twitter:image" content={metaDetails[`${router.pathname.replaceAll('/', '') ? router.pathname.replaceAll('/', '') : 'home'}`]?.image} />
      </Head>
   )
}

export default MetaTagsTitleAndDescription
export async function getStaticPaths() {
   return {
      paths: [
         {
            params: {

            }
         }
      ],
      fallback: true,
   };
}