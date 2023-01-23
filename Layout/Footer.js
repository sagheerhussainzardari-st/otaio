import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link'
import { OTAContactDetails } from '../utilities/ContactDetails';
import { useState, useEffect } from 'react';
import Head from 'next/head';
const Footer = () => {
  const [mail, setMail] = useState(false)
  const [userMail, setUserEmail] = useState("loading ...")
  useEffect(() => {
    setTimeout(() => {
      setUserEmail("info@outsourcetoasia.co")
    }, 200)
  }, [])
  return (
    <div>
   
      <div className="footer">
        <Container>
          <Row>
            
            <Col lg={3} className="pr-4 pl-4">
            
              <div className="logo mb-3">
                <img loading='lazy' className="w-100" width="" src={'/Assets/logo/logo.png'} alt="outsource to asia"></img>
              </div>
              <p>
                Pioneering innovative digital experiences that fuel startups, scale-up enterprises, and help family businesses embrace digital transformation.
              </p>
              
              
              <br />

              <a href='https://www.bark.com/en/us/company/outsource-to-asia/Nepvj/' className='logoFooterBark' target='_blank' >
              <img src='/Assets/HomeAssets/bark-review.png' width="120" height="60" />
              </a>
              <a href='https://www.trustpilot.com/review/outsourcetoasia.io' target='_blank' >
              <img src='/Assets/HomeAssets/trust.png' width="120" height="60" />
              </a>
              {/* <a href='https://www.bark.com/en/us/company/outsource-to-asia/Nepvj/' target='_blank' class='bark-widget' data-type='reviews' data-id='Nepvj' data-image='medium-navy' data-version='3.0'>Outsource to asia</a> */}
       
            </Col>
            <Col lg={2} className="ps-5">
              <h6 className="mb-4">Quick Links</h6>
              <div className="footerUl">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} className="ps-5">
              <h6 className="mb-4">Outsourcing Plans </h6>
              <div className="footerUl">
                <ul>
                  <li>
                    <Link href="/white-label-agency">White Labelling</Link>
                  </li>
                  <li>
                    <Link href="/digital-startup">Digital Startup</Link>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/refund-policy">Refund Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} className="ps-5">
              <h6 className="mb-4">Services </h6>
              <div className="footerUl">
                <ul>
                  <li>
                    <Link href="/creative-design-packages">Creative & Design</Link>
                  </li>
                  <li>
                    <Link href="/web-development-services">Web Development</Link>
                  </li>
                  <li>
                    <Link href="/seo-services">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link href="/ios-android-app-development">App Development</Link>
                  </li>
                  <li>
                    <Link href="/corporate-video-production">Video Animation</Link>
                  </li>
                  <li>
                    <Link href="/content-writing-services">Content Writing</Link>
                  </li>
                  <li>
                    <Link href="/cyber-security-services">Cyber Security</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} className="ps-5">
              <h6 className="mb-4">Contact </h6>
              <div className="footerUl footerContact position-relative">
                <ul>
                  <li>
                    <Row>
                      <Col lg={12}>
                        <p
                          onClick={() =>
                            window.open(
                              "https://www.google.com/maps/place/30+N+Gould+St+ste+r,+Sheridan,+WY+82801,+USA/@44.7977689,-106.9570921,17z/data=!3m1!4b1!4m5!3m4!1s0x5335fabc2a6d206b:0xd7c55bd374d4b750!8m2!3d44.7977689!4d-106.9549034"
                            )
                          }
                        >
                          30 N Gould St Ste R Sheridan, WY 82801
                        </p>
                        <p>
                          <a onClick={() => {
                            setMail(true)
                            setTimeout(() => {
                              setMail(false)
                            }, 200)
                          }} href={mail ? OTAContactDetails.ioEmailAddress.plainText : ""}>
                            {userMail}
                          </a>
                        </p>
                        <p>
                          <a href='tel:+18885643297'>
                            +1 (888) 564-3297
                          </a>
                        </p>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col lg={12}>
                        <p
                          onClick={() =>
                            window.open(
                              "https://www.google.com/maps/search/Suite+%23+603,+6th+Floor,+Business+Avenue,+Block+6,+PECHS,+Karachi,+Pakistan+/@24.8621898,67.0696829,17z/data=!3m1!4b1"
                            )
                          }
                        >
                          Suite # 603, 6th Floor, Business Avenue, Block 6,
                          PECHS, Karachi, Pakistan
                        </p>
                        <p>
                          <a onClick={() => {
                            setMail(true)
                            setTimeout(() => {
                              setMail(false)
                            }, 200)
                          }} href={mail ? OTAContactDetails.ioEmailAddress.plainText : ""}>
                            {userMail}
                          </a>
                        </p>
                        <p>
                          <a href={OTAContactDetails.pkPhoneNumber.plainText}>
                            {OTAContactDetails.pkPhoneNumber.textToShow}
                          </a>
                        </p>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <hr></hr>
        <Container>
          <Row className="pt-4 ">
            <Col lg={8}>
              <p>
                © Copyright 2022 by{" "}
                <Link href="/">
                  <a className="text-light">
                    <strong>Outsource to Asia</strong>
                  </a>
                </Link>
                , All Rights Reserved.
              </p>
            </Col>
            <Col lg={4}>
              <div className="footerSocialLink text-center">
                <a
                  target="blank"
                  href="https://www.facebook.com/outsourcetoasiallc/"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  target="blank"
                  href="https://www.instagram.com/outsourcetoasia/?utm_medium=copy_link"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/company/outsource-to-asia"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  target="blank"
                  href="https://www.youtube.com/channel/UCu5Sl1qH8Jr3yaia0c2lTzw"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
    </div>
  )
}

export default Footer