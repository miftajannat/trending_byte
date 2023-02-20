import React from "react";
import Image from "next/image";
import img from "../public/media/trendingbyte.jpg";


const Hero = () => {
  return (
<div class="banner">
    <div className="flex justify pt-10">
  <div class="flex flex-col items-start md:flex-row md:items-end">
    <div class="pt-20 md:pt-100 md:w-1/2">
      <span class="text-sm font-bold text-blue-400  text-7xl">
        Hello Everyone!
      </span>
      <h1 class="mt-10 mb-10 text-gray-50 text-3xl md:text-5xl animate__animated animate__fadeInUp">
        <span class="typewrite text-linear"></span>
      </h1>
      <div class="w-full md:w-9/12">
        <p class="text-base text-gray-600 animate__animated animate__fadeInUp">
          I use animation as a third dimension by which to simplify experiences and guiding through each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
        </p>
      </div>
      <div class="mt-8 md:mt-16">
        <form class="flex flex-col md:flex-row" action="#">
          <input
            class="w-full md:w-64 input-subscriber"
            type="text"
            placeholder="Type your email address"
          />
          <button class="mt-4 md:mt-0 ml-0 md:ml-4 btn btn-linear btn-arrow-right">
            Subscribe
            <i class="fi-rr-arrow-small-right"></i>
          </button>
        </form>
      </div>
      
    </div>
  </div>
 
            <Image src={img}
           
            alt="TrendingByte"
            
            />
        
         
          </div>
</div>

  );
};

export default Hero;
