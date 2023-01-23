import Link from 'next/link';
import React from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap';
import GetStarted from '../../Components/Buttons/GetStarted';

const Buttons = ({link}) => {
   return (
      <Row>
         <Col lg="3">
            <GetStarted
               buttonClass={`getStarted-btn btn btn-primary`}
               buttonText={"GetStarted"}
            />
         </Col>
         <Col lg={3}>
            <Link href={link}><a className={"getStarted-btn btn btn-primary"}>Read More</a></Link>
         </Col>
      </Row>
   )
}

export default Buttons