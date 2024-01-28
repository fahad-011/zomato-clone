import React from "react";

import zomatoLogo from "../assets/logo.png";

import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import item4 from "../assets/item4.png";
import mobileBanner from "../assets/mobileBanner.png";
import appleStore from "../assets/appleStore.png";
import playStore from "../assets/playStore.png";

import Footer from "../components/Home/Footer";
import HeroSection from "../components/Home/HeroSection";
import WeOffer from "../components/Home/WeOffer";
import GetTheApp from "../components/Home/GetTheApp";
import Collections from "../components/Home/Collections";

function Home() {
  return (
    <div>
      {/* Meta tags for SEO and responsive design */}
      {/* <Head> */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Add other meta tags as needed */}
      {/* </Head> */}

      {/* External styles and fonts */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />

      {/* Main application components */}
      <HeroSection />
      <WeOffer
        items={[
          {
            image: item1,
            title: "Order Online",
            description: "Stay home and order to your doorstep",
          },
          {
            image: item2,
            title: "Dining",
            description: "View the citys favourite dining venue",
          },
          {
            image: item3,
            title: "Nightlife and clubs",
            description: "Explore the citys top nightlife outlets",
          },
          {
            image: item4,
            title: "Order Online",
            description: "Stay home and order to your doorstep",
          },
        ]}
      />
      <Collections />
      <GetTheApp
        mobileBanner={mobileBanner}
        appleStore={appleStore}
        playStore={playStore}
      />
      <Footer
        zomatoLogo={zomatoLogo}
        appleStore={appleStore}
        playStore={playStore}
      />
    </div>
  );
}

export default Home;
