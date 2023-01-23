import React from 'react'
import { Modal } from "react-bootstrap";
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import AboutUsForm from '../../Components/AboutUsForm/AboutUsForm';

const ApplyNowModal = ({ show, handleClose, isScheduleCall }) => {
   return (
      <div>
         <Modal
            show={show}
            onHide={handleClose}
            centered={true}
            size="xl"
            className="ota-modal"
            >
               <Modal.Header>
               <i className="fas fa-times font-size-24" onClick={handleClose}></i>

               </Modal.Header>
            {/* 
               <div className="d-block text-start">
                  <h5><b>Get A Free Consultation</b></h5>
                  <h6>Let's Talk!</h6>
               </div>
               <i className="fas fa-times font-size-24" onClick={handleClose}></i>
            </Modal.Header> */}
            {/* <Modal.Body> */}
               {/* <Iframe
                  src="https://api.leadconnectorhq.com/widget/form/5NOcTQn4xKTSvpnICCcj"
                  style="border:none;width:100%;"
                  scrolling="no"
                  id="5NOcTQn4xKTSvpnICCcj"
               /> */}
               <AboutUsForm />
            {/* </Modal.Body> */}
         </Modal>
      </div>
   )
}

ApplyNowModal.propTypes = {
   show: PropTypes.bool,
   isScheduleCall: PropTypes.bool,
   handleClose: PropTypes.func,
}
export default ApplyNowModal
