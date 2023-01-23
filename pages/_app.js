import '../styles/global.scss'
import '../styles/header.css'
import Layout from '@/layout/Layout';
import "@fortawesome/fontawesome-free/css/all.min.css";
import FacebookPixels from '../Scripts/FacebookPixels';
import ApplyNowModal from '@/components/ApplyNowModal/ApplyNowModal'
import { useState, useEffect } from 'react'
import DiscountOfferModal from '@/components/ApplyNowModal/DiscountOffer';
const bootstrap = ({ Component, pageProps }) => {

  const [offerModal, setDiscountOffer] = useState(false)
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setDiscountOffer(true)
    }, 500)
  }, [])
  useEffect(() => {
    if (!offerModal) {
      const now = new Date();
      let time = now.getTime();
      const hourImMs = 60 * 60 * 1000
      const checkTimer = +localStorage.getItem('contact-ota') + hourImMs
      const estimatedTimeToShowPopup = now > checkTimer
      if (!localStorage.getItem("contact-ota") || estimatedTimeToShowPopup) {
        setTimeout(() => {
          localStorage.setItem("contact-ota", time);
          setDiscountOffer(false)
          setShow(true);
        }, 31000);
      }
    }
  }, [offerModal])
  if (Component.noLayout) {
    return (
      <>
        <FacebookPixels />
        <Component {...pageProps} />
      </>
    )
  }
  return (
    <>
      <ApplyNowModal show={show} handleClose={() => { setShow(false) }} />
      {/* <DiscountOfferModal show={offerModal} handleClose={() => setDiscountOffer(false)} /> */}
      <Layout>
        <FacebookPixels />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default bootstrap