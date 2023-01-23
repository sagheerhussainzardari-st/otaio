const clientsTestimonialsSlider = {
   className: "center",
   centerMode: true,
   dots: true,
   infinite: false,
   slidesToShow: 3,
   centerPadding: '0px',
   autoplay: true,
   speed: 0,
   autoplaySpeed: 2000,
   focusOnSelect: true,
   slidesToScroll: true,
   adaptiveHeight: true,
   dontAnimate: true,

   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 2,
            initialSlide: 2,
            centerPadding: '0px'
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            initialSlide: 1,
            centerPadding: '0px'
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            centerPadding: '0px'
         }
      }
   ]
};
const verticalSliderSettings = {
   dots: true,
   // infinite: true,
   slidesToShow: 1,
   vertical: true,
   verticalSwiping: true,
   autoplay: false,
   autoplaySpeed: 2000,
   pauseOnHover: false,
   dontAnimate:true,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 1,
            // infinite: true,
            dots: false
         },
         dontAnimate:true,

      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 1,
            initialSlide: 1,
            autoplay: false,
         },
        dontAnimate:true,

      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            autoplay: false,
         },
         dontAnimate:true,

      }
   ]
}
var logoSliderSettings = {
   dots: false,
   // infinite: true,
   arrows: false,
   slidesToShow: 4,
   autoplay: true,
   speed: 3000,
   autoplaySpeed: 3000,
   pauseOnHover: true,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 2,
            // infinite: true,
            dots: false
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,

            initialSlide: 2
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
         }
      }
   ]
};
const ourMobileAppDevelopmentPortfolioCarousal = {
   className: "center",
   // infinite: true,
   centerMode: true,
   centerPadding: "0px",
   slidesToShow: 3,
   arrows: false,
   speed: 500,
   dots: false,
   autoplay: true,
   autoplaySpeed: 3000,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
            centerPadding: "0px",
            // infinite: true,
            dots: false
         },
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            centerPadding: "0px",
            initialSlide: 2
         },
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "0px",
         },
      },
   ],
};
const whiteLabelAgencyCarousalSetting = {
   className: "WhiteLabliblingSlider",
   centerMode: false,
   arrows: false,
   dots: true,
   // infinite: true,
   slidesToShow: 3,
   centerPadding: '0px',
   autoplay: true,
   speed: 3000,
   autoplaySpeed: 3000,
   focusOnSelect: false,
   appendDots: (dots) => (
      <div className="bg-primary">
         <ul> {dots} </ul>
      </div>
   ),
   customPaging: (i) => <div className="video-pagination-dots">{""}</div>,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 2,
            initialSlide: 2,
            centerPadding: '0px'
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            initialSlide: 1,
            centerPadding: '0px'
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            centerPadding: '0px'
         }
      }
   ]
};

const PlatformsWeWorkOnSlider = {
   className: "WhiteLabliblingSlider",
   centerMode: false,
   arrows: false,
   dots: false,
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   centerPadding: '0px',
   autoplay: true,
   speed: 2000,
   autoplaySpeed: 2000,
   focusOnSelect: false,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 2,
            initialSlide: 2,
            centerPadding: '0px'
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            initialSlide: 1,
            centerPadding: '0px'
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            centerPadding: '0px'
         }
      }
   ]
};

const popularBlogsSlider = {
   dots: true,
   // infinite: false,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 2,
   initialSlide: 0,
   arrows: false,
   className: "popular-posts-slider",
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            // infinite: true,
            dots: true
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
};
const clientCarousal = {
   Paragraph1:
      "Beyondant has been pleased to have entered into a joint venture with Outsource To Asia. The JV provides offshore resources as an augmentation to our US back office departments. OTA's CEO Usman Naveed has the focus and acumen needed in today's business climate to help organizations grow to new heights. ",
   Client1: "Marc Rubin",
   ClientDesignation1: "CEO of Beyondant",
   Paragraph2:
      "My digital marketing business as grown faster than expected causing me troubles finding quality employees supporting our growth. When I found out about OTA I had to give them a shot in supporting my team. They have met every expectation and been there every step of the way. Quality work and Quality service 24/7!",
   Client2: "William Harris",
   ClientDesignation2: "Founder of The Hustle Marketing And Design",
   Paragraph3:
      "Our Journey started with small projects and after seeing their skills and dedication, I felt I can  do more work with them. They have a great team and provide amazing work on time. Their Project Managers are always very concerned about delivery and quality of work, and they are easy to reach and communicate with. It feels as though they are sitting next to me. I highly recommend their services to anyone looking to outsource and scale their business. I have also provided a Video Testimony to them.",
   Client3: " Jensen ",
   ClientDesignation3: " Founder of Adzum, LLC. ",
   Paragraph4:
      "I was struggling to get a website done for my business “Millenial Business Services” and then I came across “Outsource to Asia” on Instagram. After contacting them and discussing what I needed, they quickly provided a mock up for my site that literally needed little revision. They worked fast to get it completed, and their rates were very affordable for the quality of work they provided. The customer service experience was exceptional, and they never said no to any request which is amazing! They get the job done no matter how small, large, or challenging. I will always recommend their services to others.",
   Client4: "Maylela Moran",
   ClientDesignation4: " Founder of Millenial Business Services ",
   Paragraph5:
      " “I searched for more than just help with my website and scaling my business.I searched for and found a partner in growth and success.After interviewing other candidates it became obvious that Outsource To Asia was the perfect fit.” They are a one stop solution for multiple dimensions of online success.",
   Client5: "Rick Lamanna",
   ClientDesignation5: " Founder of Proform 360 ",
   Paragraph6:
      " They did a great job with my logo. They are creative and hard working. Would definitely recommend.",
   Client6: "Stanley Julien",
   ClientDesignation6: " Founder of Fitness Core Shop ",

}
export { verticalSliderSettings, clientsTestimonialsSlider, logoSliderSettings, clientCarousal, ourMobileAppDevelopmentPortfolioCarousal, whiteLabelAgencyCarousalSetting, popularBlogsSlider, PlatformsWeWorkOnSlider }