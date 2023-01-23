import React, { useState } from "react";

const ShowMoreContent = ({ children }) => {
   const [showMore, setShowMore] = useState(false);

   return (
      <>
         <span className="mx-1 rounded text-primary cursor-pointer" onClick={() => setShowMore(!showMore)}>{!showMore ? '▼' : "▲"}</span>
         <div className={showMore ? `pt-2 additional-content` : 'd-none'}>
            {children}
         </div>
      </>
   )
};

export default ShowMoreContent;
