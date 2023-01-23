import Head from 'next/head'
import React from 'react'
import BlogBanner from '@/components/Banners/BlogBanner/BlogBanner'
import BlogSlider from '@/components/BlogSlider/BlogSlider';
import AllBlogs from '@/components/AllBlogs.js/AllBlogs';
import { schema } from '../../utilities/schema';

const Blog = () => {
   return (
      <>
         <Head>
            <title>Blog - Stay Tuned With The Latest Tech News Around The World</title>
            <meta name="description" content="Covering Latest Trends and Tips regarding Creative Designing, Web & App Development, Digital Marketing, Content Writing, Cyber Security, and more." />
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.blog) }}
            />
         </Head>
         <BlogBanner />
         <BlogSlider />
         <AllBlogs />
      </>
   )
}

export default Blog