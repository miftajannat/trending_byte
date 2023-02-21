import Image from "next/image";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imag from "../public/media/project7.jpeg";
import img2 from "../public/media/project8.jpeg";
import { useState, useEffect } from "react";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost:1337/api/homepage?populate[0]=OurTestimonials&populate[1]=OurTestimonials.Testimonial&populate[2]=OurTestimonials.Testimonial.TestimonialImage",
      {
        headers: {
          accept: "application/json",
        },
        method: "GET",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((homepageObj) => {
        console.log(homepageObj);
        setTestimonials(
          homepageObj.data.attributes.OurTestimonials.Testimonial
        );
      });
  }, []);

  SwiperCore.use([Autoplay]);

  function Slide() {
    return (
      <div className="flex gap-8">
        {testimonials.map((testimonial) => (
          <>
            <div key={testimonial.id}>
              <div>
                <div className="bg-gray-800 box-border border-2 border-gray-700 rounded-lg w-[320px] ">
                  <div>
                    <div className="flex">
                      <p className="px-4 py-5">
                        <img
                          src={
                            "http://localhost:1337" +
                            testimonial.TestimonialImage.data.attributes.url
                          }
                          alt=""
                          className="w-10 h-10 rounded-full"
                          width={50}
                          height={50}
                        />
                      </p>
                      <div className="pt-4">
                        <p className="text-xl font-bold text-gray-600">
                          {testimonial.TestimonialTitle}
                        </p>
                        <p className="text-gray-600">
                          {testimonial.TestimonialSubtitle}
                        </p>
                      </div>
                    </div>
                    <p className="p-4 text-gray-400">
                      {testimonial.TestimonialDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto">
      <div class="md:max-w-lg mx-auto text-center mb-8">
          <h2 class="mb-4 font-heading font-semibold text-blue-500 text-6xl ">
            Testimonial
          </h2>
          </div>

        <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 2000 }}>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonial;
