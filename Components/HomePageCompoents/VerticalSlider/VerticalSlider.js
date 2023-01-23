import React from 'react'
import Slider from "react-slick";
import { homeSlidesData } from '../../../utilities/home';
import { verticalSliderSettings } from '../../../utilities/slidersettings';
import VerticalInnerSlides from '../../VerticalInnerSlides/VerticalInnerSlides';

const VerticalSlider = () => {
   return (
      <div>
         <div className="sliderbg1" >
            <div>
               <Slider className="verticalSettings" {...verticalSliderSettings}>
                  {React.Children.toArray(
                     homeSlidesData.map((data) => {
                        return (
                           <VerticalInnerSlides {...data} />
                        )
                     })
                  )}

               </Slider>
            </div>
         </div>
      </div>
   )
}

export default VerticalSlider