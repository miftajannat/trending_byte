import React, { useEffect, useState } from "react";


const Hero = () => {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:1337/api/homepage?populate[0]=HeroSection&populate[1]=HeroSection.Hero&populate[2]=HeroSection.Hero.HeroImage",
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
        setHero(homepageObj.data.attributes.HeroSection.Hero);
      });
  }, []);

  return (
    <div class="banner">
      <div className="flex justify pt-10">
        {hero.map((about) => (
          <div key={about.id}>
            <div className="flex flex-col md:flex-row">
              <div class="flex flex-col items-start md:flex-row md:items-end">
                <div class="pt-20 md:pt-100 md:w-1/2">
                  <span class="text-5xl font-bold text-blue-400  text-7xl">
                    {about.HeroTitle}
                  </span>
                  <h1 class="mt-10 mb-10 text-gray-50 text-3xl md:text-5xl animate__animated animate__fadeInUp">
                    <span class="typewrite text-linear"></span>
                  </h1>
                  <div class="w-full md:w-9/12">
                    <p class="text-base text-gray-600 animate__animated animate__fadeInUp">
                      {about.HeroDescription}
                    </p>
                  </div>
                  <div class="mt-8 md:mt-16">
                    <form class="flex flex-col">
                      <input
                        class="w-full md:w-64 h-10 input-subscriber p-3"
                        type="text"
                        placeholder="Type your email address"
                      />
                      <button className="bg-blue-400 shadow-lg shadow-blue-500/50 p-2 rounded-lg text-white font-bold w-24 mt-6 ">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="h-96 w-96 pt-16"
                  src={
                    "http://localhost:1337" +
                    about.HeroImage.data.attributes.url
                  }
                 
                  alt={about.HeroDescription}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
