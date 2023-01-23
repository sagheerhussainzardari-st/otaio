import React from 'react'
import Slider from 'react-slick';
import { ourMobileAppDevelopmentPortfolioCarousal } from '../utilities/slidersettings';
import { mobileAppDevelopmentCarousalPortfolioImages } from '../utilities/portfolioimages'
const MobileAppDevelopmentCarousal = ({ handleImageLoaded, loaded, loader, ref }) => {
   return (
      <div>
         <div className="mobile-app-development-category">
            <Slider {...ourMobileAppDevelopmentPortfolioCarousal}>
               {mobileAppDevelopmentCarousalPortfolioImages.map((image) => {
                  return (
                     <div>
                        <img
                           ref={ref}
                           loading='lazy'
                           src={loaded ? loader.src : image}
                           alt="Image1"
                           onLoad={handleImageLoaded}

                        />
                     </div>
                  )
               })}
            </Slider>
         </div>
      </div>
   )
}

export default MobileAppDevelopmentCarousal