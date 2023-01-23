import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { OTAContactDetails } from './../../../utilities/ContactDetails';
const SocialMediaContact = () => {
  const [mail, setMail] = useState(false)
  const [userMail, setUserEmail] = useState("loading ...")
  useEffect(() => {
    setTimeout(() => {
      setUserEmail("info@outsourcetoasia.co")
    }, 100)
  }, [])
  return (
    <div>
      <Container fluid>
        <div className="mainBannerSocialMediaIcons">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/outsourcetoasiallc/"
                target="blank"
                rel="nofollow"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/outsource-to-asia"
                target="blank"
                rel="nofollow"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/outsourcetoasia/?utm_medium=copy_link"
                target="blank"
                rel="nofollow"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCu5Sl1qH8Jr3yaia0c2lTzw" target="blank" rel="nofollow">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="mainBannerContact">
          <ul>
            <li>
              <a href={OTAContactDetails.usPhoneNumber.plainText}>
                <i className="fas fa-phone-alt"></i> {OTAContactDetails.usPhoneNumber.textToShow}
              </a>
            </li>

            <li
              onClick={() => {
                setMail(true)
                setTimeout(() => {
                  setMail(false)
                }, 200)
              }}
            >
              <a
                href={mail ? "mailto:info@outsourcetoasia.co" : ''}
              >
                <i className="fas fa-envelope-open"></i> {userMail}
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default SocialMediaContact