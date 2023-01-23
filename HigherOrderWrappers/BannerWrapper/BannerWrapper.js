import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import AboutUsForm from '../../Components/AboutUsForm/AboutUsForm';
import SocialMediaContact from '../../Components/Banners/homePageBanner/SocialMediaContact';

const BannerWrapper = ({ children, mainClass, subClass }) => {
   return (
      <div>
         <div className={mainClass}>
            <div className={subClass}>
               <Container>
                  <Row>
                     {children}
                     <Col lg={6} className="pt-5">
                        <AboutUsForm />
                     </Col>
                  </Row>
               </Container>
            </div>
            <SocialMediaContact />
         </div>
      </div>
   )
}

export default BannerWrapper