import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const FacebookPixels = () => {
   const router = useRouter()


   const [fbScriptFunction, setPixelFunctions] = useState('')
   useEffect(() => {
      setPixelFunctions(`!(function (f, b, e, v, n, t, s) {n = f.fbq = function () {n.callMethod? n.callMethod.apply(n, arguments): n.queue.push(arguments);};if (!f._fbq) f._fbq = n;n.push = n;n.loaded = !0;n.version = "2.0";n.queue = [];t = b.createElement(e);t.async = !0; t.src = v;s = b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t, s);})(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init", "897719781144027");fbq("track", "PageView");`)

   }, [router.pathname])
   return (
      <>
         <script>
            {fbScriptFunction}
         </script>
         <noscript
         ><img 
               className="d-none"
               src="https://www.facebook.com/tr?id=897719781144027&ev=PageView&noscript=1"
            /></noscript>
      </>
   )
}

export default FacebookPixels