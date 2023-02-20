import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Pricing = () => {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:1337/api/homepage?populate[0]=OurPricing&populate[1]=OurPricing.Pricing&populate[2]=OurPricing.Pricing",
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
        setPricing(homepageObj.data.attributes.OurPricing.Pricing);
      });
  }, []);

  return (
    <section class="pt-20 overflow-hidden">
  <div class="container mx-auto">
    <div class="md:max-w-lg mx-auto text-center mb-8">
      <h2 class="mb-4 font-heading font-semibold text-blue-500 text-6xl sm:text-7xl">Our Pricing</h2>
      <p class="text-lg text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
    </div>
 


    <div className="grid grid-cols-3 gap-4 ">
      {/* map */}
      {pricing.map((price) => (
        <div>
          <div key={price.id}>
            <div className="box-border border-1 border-gray-600 rounded-xl bg-gray-800 sm:mx-6 md:">
              <div className="p-5">
                <div className="flex flex-col">
                  <p className="justify justify-between flex">
                  <h1 className="text-2xl font-bold text-white">
                    {price.PricingType} 
                  </h1>
                  {/* <button className="bg-green-600 rounded-full px-2">Premium</button> */}
                  </p>
                  <p className="text-xl text-gray-400 py-5">
                    {price.PricingDescription1}
                  </p>
                  <p className="text-gray-400">{price.PricingDescription1}</p>
                  <div className="py-4 ">
                    <button className="rounded-full box-border border-2 px-4 border-blue-500 text-white text-bold p-1 hover:bg-blue-500">
                      Get Started
                    </button>
                    <a href="#" className="pl-10 underline text-gray-500">
                      Learn More
                    </a>
                  </div>
                  <hr className=" border-gray-600 py-4 border-solid" />
                  <div className="flex flex-col">
                    <h1 className="text-white pb-4">What you get:</h1>
                    <div className="flex flex-col">
                      <ul className="pl-8">
                        <li className="flex ">
                          <Image
                            src={"/media/checked.159bc56f.svg"}
                            width={20}
                            height={20}
                            alt="check"
                          />
                          <p className="pl-2 text-gray-500">{price.Feature1}</p>
                        </li>
                        <li className="flex pt-2">
                          <Image
                            src={"/media/checked.159bc56f.svg"}
                            width={20}
                            height={20}
                            alt="check"
                          />
                          <p className="pl-2 text-gray-500">{price.Feature2}</p>
                        </li>
                        <li className="flex pt-2">
                          <Image
                            src={"/media/checked.159bc56f.svg"}
                            width={20}
                            height={20}
                            alt="check"
                          />
                          <p className="pl-2 text-gray-500">{price.Feature3}</p>
                        </li>
                        <li className="flex pt-2">
                          <Image
                            src={"/media/checked.159bc56f.svg"}
                            width={20}
                            height={20}
                            alt="check"
                          />
                          <p className="pl-2 text-gray-500">{price.Feature4}</p>
                        </li>
                        <li className="flex pt-2">
                          <Image
                            src={"/media/checked.159bc56f.svg"}
                            width={20}
                            height={20}
                            alt="check"
                          />
                          <p className="pl-2 text-gray-500">{price.Feature5}</p>
                        </li>
                        <li className="flex pt-2">
                          <Image
                            src={"/media/checked.159bc56f.svg"}
                            width={20}
                            height={20}
                            alt="check"
                          />
                          <p className="pl-2 text-gray-500">{price.Feature6}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>


    </div>
    </section>
  );
};

export default Pricing;
