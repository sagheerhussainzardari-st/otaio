import React from 'react'
import Head from 'next/head';
const GoogleTagMangerScript = () => {
  return (
    <>
      <Head>
        
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-216338374-1"
        ></script>
        <script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());

              gtag("config", "UA-216338374-1")
          `}
        </script>
        <script>

          {
            `
              (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                var f = d.getElementsByTagName(s)[0],
                   j = d.createElement(s),
                   dl = l != "dataLayer" ? "&l=" + l : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                f.parentNode.insertBefore(j, f);
             })(window, document, "script", "dataLayer", "GTM-5JT5M2P")
              `
          }
        </script>

        {/* <script type="text/javascript">
          {
            `(function(d, src, c) { var t=d.scripts[d.scripts.length - 1],s=d.createElement('script');s.id='la_x2s6df8d';s.defer=true;s.src=src;s.onload=s.onreadystatechange=function(){var rs=this.readyState;if(rs&&(rs!='complete')&&(rs!='loaded')){return;}c(this);};t.parentElement.insertBefore(s,t.nextSibling);})(document, 'https://outsourcetoasiaio.ladesk.com/scripts/track.js', function(e){LiveAgent.createButton('qwx5eri9', e); });`} </script> */}





      </Head>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JT5M2P"
        height="0" width="0" ></iframe></noscript>


      {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JT5M2P"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}
    </>
  )
}

export default GoogleTagMangerScript