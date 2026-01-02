import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Crousel = () => {
  return (
    <div className="w-full p-3 max-w-screen mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}      // slide duration
        transitionTime={800} // animation speed
        showThumbs={false}   // hide thumbnails
        showStatus={false}     // hide status text
        showArrows={false}     // hide arrows
        stopOnHover={false}    // keeps autoplay on hover
        swipeable={true}
        emulateTouch={true}
      >

        <div>
          <img
            src="/images/pexels-ash-craig-122861-376464.jpg"
            className="object-cover h-64 md:h-96 w-full"
          />
        </div>
        <div>
          <img
            src="/images/pexels-chanwalrus-958545.jpg"
            className="object-cover h-64 md:h-96 w-full"
          />
        </div>
        <div>
          <img
            src="/images/pexels-elevate-1267320.jpg"
            className="object-cover h-64 md:h-96 w-full"
          />
        </div>
        <div>
          <img
            src="/images/pexels-ella-olsson-572949-1640777.jpg"
            className="object-cover h-64 md:h-96 w-full"
          />
        </div>
        <div>
          <img
            src="/images/pexels-fotios-photos-1279330.jpg"
            className="object-cover h-64 md:h-96 w-full"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Crousel;
