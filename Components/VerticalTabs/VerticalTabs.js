import React,{ useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { verticalTabsUtilities } from './../../utilities/VerticalTabdetails';


const VerticalTabs = () => {
   const [showMessage, setShowMessage] = useState(false);

   // const showMessage = () =>{
   //    alert("here we are");
   // }
   return (
      <>
         <div className="VerticalTabsWidth">
           
            <p  className={showMessage ? `imageClassHideen` : 'd-none'} >Price is shown below please scroll after clicking </p>
            <Tabs>
               <TabList>
                  {React.Children.toArray(
                     verticalTabsUtilities.map(({ tab }) => {
                        return (
                           <>
                              <Tab onClick={() => setShowMessage(true)} >
                                 <p>{tab}</p>
                              </Tab>
                           </>
                        );
                     })
                  )}
               </TabList>

               {React.Children.toArray(
                  verticalTabsUtilities.map(({ panel }) => {
                     return <TabPanel>{panel}</TabPanel>;
                  })
               )}
            </Tabs>
         </div>
      </>
   )
}

export default VerticalTabs