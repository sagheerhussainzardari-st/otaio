import { apiEndPoint } from 'constants/apiEndPoint'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import axios from 'axios';
const AboutUsForm = () => {
   const [error, setError] = useState('')
   const history = useRouter()
   const submitFreeTrainingForm = (event) => {
      event.preventDefault();
      // let res = fetch("https://www.outsourcetoasia.io/send_email.php").then(res=> res.json()).then(json =>{
      //    console.log(res);
      // })
      const formData = new FormData(event.target);
      formData.append('type', 'banner-form')
      let obj = {};
      for (var pair of formData.entries()) {
         obj[pair[0]] = pair[1];
      }

   //    { key: "Access-Control-Allow-Credentials", value: "true" },
   //   { key: "Access-Control-Allow-Origin", value: "*" },
   //   { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
   //   { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
      // const headers = {
      //    'Access-Control-Allow-Credentials': true,
      //    'Access-Control-Allow-Origin': '*',
      //    'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
      //    'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
      //  }

      //  let axiosConfig = {
      //    headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       "Access-Control-Allow-Credentials":"true",
      //       // "Access-Control-Allow-Methods": "PUT, GET, HEAD, POST, DELETE, OPTIONS",
      //       "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
      //    }
      //  };
      axios
         .post(
            apiEndPoint,
            formData
            // axiosConfig
         )
         .then((response) => {
            if (!response.data.success) {
               setError(true);
               setTimeout(() => {
                  setError(false)
               }, 8000);
               return
            }
            history.push("/thank-you");
         })
         .catch((error) => {
            setError(true);
         });
   };
   return (
      <div>
         <div className="applyNow pt-5">
            <div className="card">
               <h3>Connect With</h3>
               <h2 className='mb-3'>
                  
                     <span> The Right People</span>
                  {/* {" "} */}
               </h2>
               {/* <h3>Team Today!</h3> */}
               <Form className="" onSubmit={submitFreeTrainingForm}>
                  
                  <InputGroup className="mb-3">
                     <InputGroup.Text id="Name">
                        <i className="fas fa-user"></i>
                     </InputGroup.Text>
                     <FormControl
                        required
                        placeholder="Enter Your Name"
                        aria-label="Name"
                        // onFocus={
                        //    document.querySelector(selector).scrollIntoView();
                        // }
                        aria-describedby="Name"
                        name="user_name"
                     />
                  </InputGroup>
                  <InputGroup className="mb-3">
                     <InputGroup.Text id="Email">
                        <i className="fas fa-envelope-open"></i>
                     </InputGroup.Text>
                     <FormControl
                        required
                        placeholder="Enter Your Email Address"
                        aria-label="Email"
                        aria-describedby="Email"
                        type="email"
                        name="email"
                     />
                  </InputGroup>
                  <InputGroup className="mb-3">
                     <InputGroup.Text id="number">
                        <i className="fas fa-phone-volume"></i>
                     </InputGroup.Text>
                     <FormControl
                        required
                        placeholder="Enter Your Phone Number"
                        aria-label="number"
                        aria-describedby="number"
                        minLength="10"
                        name="phone"
                     />
                  </InputGroup>
                  {error && (
                     <div className="alert alert-danger" role="alert">
                        
                           There is an error in the form. Please fill the form correctly.
                        
                     </div>
                  )}
                  <Button className="my-4 get-started-form" type="submit">
                     Apply Now
                  </Button>
               </Form>
               <div className="d-flex justify-content-center getstarted-text"></div>
            </div>
         </div>
      </div>
   )
}

export default AboutUsForm