import { Carousel } from "flowbite-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 mb-20">
        <Carousel>
          <img
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg"
            alt="..."
          />
          <img
            src="https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg"
            alt="..."
          />
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
