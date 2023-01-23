import React from 'react'
import { discountedPrice } from './../../utilities/helper';

const DiscountedPrice = ({ price }) => {
   return (
      <span>
         &nbsp;- ${price} 
      </span>
   )
}

export default DiscountedPrice