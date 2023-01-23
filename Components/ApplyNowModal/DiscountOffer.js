import React from 'react'
import {
   Modal
} from "react-bootstrap";
const DiscountOfferModal = ({ show, handleClose }) => {
   return (
      <div classNAme="ota-offer-modal">
         <Modal className="mt-5 pt-5 " show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
            <Modal.Body>
               <img src="/Assets/Modal/outsourse-discount-offer.jpg" className="w-100 border border-3 border-primary rounded" alt="outsourse discount" decoding="async" />
            </Modal.Body>
         </Modal>
      </div>
   )
}

export default DiscountOfferModal