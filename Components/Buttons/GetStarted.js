import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const GetInTouchWithUs = dynamic(() => import('@/components/ApplyNowModal/ApplyNowModal'))

const GetStarted = ({ buttonClass, buttonText, isScheduleCall }) => {
   const [show, setShowModal] = useState(false)
   const router = useRouter()

   const showModal = () => {
      setShowModal(true)
   }
   useEffect(() => {
      setShowModal(false)
   }, [router.pathname])
   return (
      <>
         <Button className={buttonClass} onClick={showModal}>{buttonText}</Button>
         <GetInTouchWithUs show={show} handleClose={() => setShowModal(false)} isScheduleCall={isScheduleCall} />
      </>
   )
}

export default GetStarted