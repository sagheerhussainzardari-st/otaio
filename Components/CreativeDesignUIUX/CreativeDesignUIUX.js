import React from 'react'
import GetStarted from '../Buttons/GetStarted';
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { UIUXDesign } from './../../utilities/CreativeDesignWowCustomers';
import Link from 'next/link'
import ShowMoreContent from '../ShowMoreText/ShowMoreContent';
const CreativeDesignUIUX = () => {
   return (
      <div className="mt-5 pt-5">
         <Container>
            <Row>
               <Col lg={7} className="m-auto">
                  
                     <div className="StartUp pt-5 mt-5">
                        <span className="BgText">{UIUXDesign.heading}</span>
                        <div className="OurServicesHeadingUl">
                           <ul>
                              
                                 <h2>{UIUXDesign.title}</h2>
                              
                              
                                 <p>
                                    Employ the best <strong>UI/UX designers</strong> that concoct distinctive visuals and harmonize graphic identity with your brand in mind. We deliver <strong>
                                       <Link href='/web-development-services' >custom web</Link> and <Link href='/ios-android-app-development'> app designs</Link>
                                    </strong> that are:
                                    <ShowMoreContent>
                                       You can choose from an array of affordable logo designs, whichever suits your business the best. Our team of graphical prodigies put in their best effort to drive your perception into a live graphical representation with our easy-on-the-pocket web design and logo packages.
                                    </ShowMoreContent>
                                 </p>
                                 <Row>
                                    {UIUXDesign.list.map((li, id) => {
                                       if (id < 4) {
                                          return (
                                             <Col lg={6}>
                                                <li>
                                                   <b>{li}</b>
                                                </li>
                                             </Col>
                                          );
                                       }
                                       return (
                                          <Col lg={6}>
                                             <li>
                                                <b>{li}</b>
                                             </li>
                                          </Col>
                                       );
                                    })}
                                 </Row>
                              
                              <Col lg="3">
                                 <GetStarted buttonClass={`${UIUXDesign.button[1]}`} buttonText={UIUXDesign.button[0]}
                                 ></GetStarted>
                              </Col>
                           </ul>
                        </div>
                     </div>
                  
               </Col>
               <Col lg={5} className="m-auto">
                  
                     <img
                        className="w-100"
                        src={UIUXDesign.UIUXDesignImagePath}
                        alt="design packages"
                     ></img>
                  
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default CreativeDesignUIUX