import React from 'react'
import Link from 'next/link';
import { useEffect } from "react";
import { useRouter } from "next/router";
const PageNotFound = () => {
   const router = useRouter();

   useEffect(() => {
      console.log("here we are in 404.html and redirecting");
     router.push("/");
   }, []);

   return null;
   return (
      <div className='fou-o-four h-100'>
         <div id="notfound">
            <div className="notfound">
               <div className="notfound-404">
                  <h3>Oops! Page not found</h3>
                  <h1><span>4</span><span>0</span><span>4</span></h1>
               </div>
               <h2>we are sorry, but the page you requested was not found</h2>
               <div className="col-lg-4 m-auto col-sm-9 col-md-6">
                  <Link href="/">
                     <a className={`getStarted-btn`}>
                        Go To Home Page
                     </a>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PageNotFound

PageNotFound.noLayout = function (page) {
   
   return (
      <>
         {page}
      </>
   )
}