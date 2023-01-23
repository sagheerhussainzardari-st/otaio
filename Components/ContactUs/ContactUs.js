import React, { useState, useEffect } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { ContactUsInformation } from '../../utilities/Contactus'
import OurVideo from '../OurVideo/OurVideo';
import axios from 'axios';
import { useRouter } from 'next/router'
import Wrapper from '@/hor/Wrapper/Wrapper';
import { apiEndPoint } from 'constants/apiEndPoint';

const ContactUs = () => {
   const [error, setErrors] = useState({})
   const [userMail, setUserEmail] = useState("loading ...")

   const history = useRouter()

   const changeInputFields = () => {

   }
   const focusInputFields = () => {

   }
   const inputProps = {
      className:
         "form-control bg-transparent border-0 border-bottom rounded-0 text-light",
      onChange: changeInputFields,
      onFocus: focusInputFields,
      required: true,
   };
   useEffect(() => {
      setTimeout(() => {
         setUserEmail("info@outsourcetoasia.co")
      }, 200)
   }, [])
   const submitContactForm = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      formData.append("type", 'contact-us')

      if (Object.values(error).filter(Boolean).length === 0) {
         e.target.reset();
         axios
            .post(
               apiEndPoint,
               formData
            )
            .then((response) => {
               history.push("/thank-you");
            })
            .catch((error) => {
               setErrors(true);
            });
      }
   };
   return (
      <Wrapper>
         <Container>
            <Row className="contact-with-us">
               <Col sm={12} lg={7}>
                  <div className="smartWork">
                     <svg width="100%">
                        <defs>
                           <linearGradient id="gradient" y1="0" y2="1">
                              <stop stopColor="#054084" offset="0" />
                              <stop stopColor="#054084" offset="1" />
                           </linearGradient>
                        </defs>
                        <g>
                           <text
                              id="text"
                              y="103"
                              strokeWidth="1"
                              stroke="url(#gradient)"
                              fill="rgb(0, 0, 0,0.2)"
                           >
                              With Us
                           </text>
                        </g>
                     </svg>
                     <h1>Get In Touch</h1>
                     <p>
                        Whether you’re on the east coast or the west coast, we’ve got
                        you covered.
                     </p>
                  </div>
                  <div>
                     <Form onSubmit={submitContactForm}>
                        <Row className="my-5">
                           <Col lg={6} sm={12}>
                              <div className="form-floating mb-3">
                                 <input
                                    {...inputProps}
                                    type="text"
                                    id="floatingInput"
                                    placeholder="Enter Your Name"
                                    name="user_name"
                                 />
                                 <label for="floatingInput" className="text-light">
                                    Enter Your Name
                                 </label>
                                 <p className="text-danger">{error?.name}</p>
                              </div>
                           </Col>
                           <Col lg={6} sm={12}>
                              <div className="form-floating mb-3">
                                 <input
                                    {...inputProps}
                                    type="email"
                                    name="email"
                                    id="floatingInput"
                                    placeholder="Enter Your Email Address"
                                 />
                                 <label for="floatingInput" className="text-light">
                                    Enter Your Email Address
                                 </label>
                                 <p className="text-danger">{error?.email}</p>
                              </div>
                           </Col>
                        </Row>
                        <Row className="my-5">
                           <Col lg={6} sm={12}>
                              <div className="form-floating mb-3">
                                 <input
                                    {...inputProps}
                                    name="user_company"
                                    type="text"
                                    id="floatingInput"
                                    placeholder="Enter Your Company Name"
                                 />
                                 <label for="floatingInput" className="text-light">
                                    Enter Your Company Name
                                 </label>
                                 <p className="text-danger">{error?.company_name}</p>
                              </div>
                           </Col>
                           <Col lg={6} sm={12}>
                              <div className="form-floating mb-3">
                                 <input
                                    {...inputProps}
                                    name="phone"
                                    type="number"
                                    id="floatingInput"
                                    minLength="11"
                                    placeholder="Enter Your Phone Number"
                                 />
                                 <label for="floatingInput" className="text-light">
                                    Enter Your Phone Number
                                 </label>
                                 <p className="text-danger">{error?.your_phone_number}</p>
                              </div>
                           </Col>
                        </Row>
                        <Row>
                           <Col lg={12} sm={12}>
                              <div className="form-floating">
                                 <textarea
                                    {...inputProps}
                                    name="message"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea2"
                                    maxlength="500"
                                    className="contact-text-area form-control bg-transparent border-0 border-bottom rounded-0 text-light"
                                 ></textarea>
                                 <label for="floatingTextarea2" className="text-light">
                                    Type Message Here
                                 </label>
                                 <p className="text-danger">{error?.your_comment}</p>
                              </div>
                           </Col>
                        </Row>
                        <Row className="d-flex justify-content-end mt-4">
                           <div className="col-lg-4">
                              <Button type="submit" className="getStarted-btn">
                                 Get Started
                              </Button>
                           </div>
                        </Row>
                     </Form>
                  </div>
               </Col>
               <Col sm={12} lg={5}>
                  <div className="d-flex justify-content-center align-items-start flex-column text-light mx-2 contact-use-info">
                     <img src={"/Assets/Contact-Us/contact-us-demo-template.png"} alt='ContactUSDemo' className='shadow-lg' />
                     <h2 className="fw-bold mx-3">Contact Info! </h2>

                     <div className={"d-flex align-items-start my-3"}>
                        <i className={"far fa-envelope-open text-secondary mx-3 my-1"}></i>
                        <span className="mx-1">
                           {<a className="text-decoration-none text-light" href={`mailto:${userMail}`}>{userMail}</a>}
                        </span>
                     </div>
                     {React.Children.toArray(
                        ContactUsInformation.map(
                           ({ text, heading, className, containerClasses, type, href }) => {
                              return (
                                 <div className={containerClasses}>
                                    <i className={className}></i>
                                    <span className="mx-1">
                                       <h5 className="fw-bold">{heading}</h5>
                                       {type === "anchor" ? <a className="text-decoration-none text-light" href={`tel:${href}`}>{text}</a> : <p>{text}</p>}
                                    </span>
                                 </div>
                              );
                           }
                        )
                     )}
                  </div>
               </Col>
            </Row>
         </Container>

         <Container className="mt-5 pt-5">
            <Row>
               <Col lg={4}></Col>
               <Col lg={6} className="m-auto">
                  <div className="watch">
                     <svg width="100%">
                        <defs>
                           <linearGradient id="gradient" y1="0" y2="1">
                              <stop stopColor="#054084" offset="0" />
                              <stop stopColor="#054084" offset="1" />
                           </linearGradient>
                        </defs>
                        <g>
                           <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Watch</text>
                        </g>
                     </svg>
                  </div>
               </Col>
            </Row>
            <OurVideo />
         </Container>
      </Wrapper>
   )
}

export default ContactUs