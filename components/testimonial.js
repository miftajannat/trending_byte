import Image from "next/image";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imag from "../public/media/project7.jpeg";
import img2 from "../public/media/project8.jpeg";

export default function section1() {
  SwiperCore.use([Autoplay]);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 2000 }}>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-3 gap-3">
      <div className="bg-gray-800 box-border border-2 border-gray-700 rounded-lg w-[320px]">
        <div>
          <div className="flex">
            <img src={img2} alt="" className="w-8 h-8 rounded-full p-3" />
            <div className="pt-4">
              <p className="text-xl font-bold text-gray-600">Title1</p>
              <p className="text-gray-600">Title2</p>
            </div>
          </div>
          <p className="p-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 box-border border-2 border-gray-700 rounded-lg w-[320px]">
        <div>
          <div className="flex">
            <img src={img2} alt="" className="w-8 h-8 rounded-full p-3" />
            <div className="pt-4">
              <p className="text-xl font-bold text-gray-600">Title1</p>
              <p className="text-gray-600">Title2</p>
            </div>
          </div>
          <p className="p-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 box-border border-2 border-gray-700 rounded-lg w-[320px]">
        <div>
          <div className="flex">
            <img src={img2} alt="" className="w-8 h-8 rounded-full p-3" />
            <div className="pt-4">
              <p className="text-xl font-bold text-gray-600">Title1</p>
              <p className="text-gray-600">Title2</p>
            </div>
          </div>
          <p className="p-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
