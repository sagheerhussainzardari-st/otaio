import React from 'react'
import {Card} from 'react-bootstrap'
import Link from 'next/link'

const ServicesCard = (props) => {
   return (
      <div>
         <Card className="ourServicesCards">
            <div className="iconBg">
               <img src={props.image} alt={props.alt} />
            </div>
            <div className="cardContent">
               <h6>{props.title}</h6>
               <p>{props.details}</p>
               <div className="readMore">
                  <Link href={props.href}>
                     <a className="btn">
                        <svg viewBox="0 0 180 60" className="">
                        <polyline
                           points="179,1 179,59 1,59 1,1 179,1"
                           className="bg-line"
                        />
                        <polyline
                           points="179,1 179,59 1,59 1,1 179,1"
                           className="hl-line"
                        />
                     </svg>
                     <span>Read More</span>
                     </a>
                  </Link>
               </div>
            </div>
         </Card>
      </div>
   )
}

export default ServicesCard