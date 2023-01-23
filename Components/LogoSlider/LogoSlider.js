import React from 'react'
import Slider from "react-slick";


const LogoSlider = (props) => {
   const sliderLogos = ["Assets/logo/logo-1.png", "Assets/logo/logo-2.png", "Assets/logo/logo-3.png", "Assets/logo/logo-4.png", "Assets/logo/logo-5.png", "Assets/logo/logo-6.png", "Assets/logo/logo-7.png", "Assets/logo/logo-8.png", "Assets/logo/logo-9.png"]
   const altAttributes = ["driving traffic and sales", "Creating robust and scalable apps,'innovative marketing solutions", "the best digital experience", "getting you the results", "mesmerizing designs", "new technological advances", "full-fledged cyber security", "character designs","outsource app development"]
   return (
      <Slider className={props.className} {...props.settings}>
         {
            React.Children.toArray(
               sliderLogos.map((slides, id) => (
                  <div className={`slider${id}`}>
                     <img src={`/${slides}`} alt={altAttributes[id]} loading='lazy' decoding="async"></img>
                  </div>
               ))
            )
         }
      </Slider>
   );
}
export default LogoSlider