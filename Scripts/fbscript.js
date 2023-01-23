import React, { useState } from 'react'

const ThankYouPageScript = () => {
  const [scriptFunction] = useState(`
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
  fbq("init", "897719781144027");
  fbq("track", "PageView");
  `)
  return (
    <>
      <div className="d-none">
        {scriptFunction}
      </div>
      <noscript>
        <img
          height="1"
          width="1"
          className="d-none"
          src="https://www.facebook.com/tr?id=897719781144027&ev=PageView&noscript=1"
        />
      </noscript>
      {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JT5M2P"
height="0" width="0" ></iframe></noscript> */}
      
    </>
  )
}

export default ThankYouPageScript