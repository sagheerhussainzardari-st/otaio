import Router from 'next/router'
import {  useState } from 'react';
import LoadingGif from './favicon.ico'
const Loader = () => {
   const [loading, setLoading] = useState(false)
   Router.events.on("routeChangeStart", () => {
      setLoading(true)
   })
   Router.events.on("routeChangeComplete", () => {
      setLoading(false)
   })
   if (loading) {
      return (
         <div className="ota-route-loader position-fixed bg-dark d-flex justify-content-center align-items-center">
            <img src={LoadingGif.src} alt="outsourse to asia preloader" />
         </div>
      )
   }
   return <>
   </>
}

export default Loader