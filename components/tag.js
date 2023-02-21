import React from "react";
import { useState, useEffect } from "react";

const PopularTag = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:1337/api/homepage?populate[0]=OurTags&populate[1]=OurTags.Tags&populate[2]=OurTags.Tags.TagImage",
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
        setTags(homepageObj.data.attributes.OurTags.Tags);
      });
  }, []);
  return (
    <section class="pt-20">
      <div class="container mx-auto">
        <div class=" mb-8">
        <h2 class="mb-4 font-heading font-semibold text-blue-500 text-6xl sm:text-7xl">Popular Tag</h2>
        </div>

        <div className="grid md:grid-cols-6 grid-cols-2 gap-6 mx-auto">
          {tags.map((tag) => (
            <div key={tag.id}>
            <div className="bg-gray-800 rounded-xl box-border border-2 border-gray-700 hover:border-blue-600 hover: shadow-lg hover:shadow-blue-500/50 hover:scale-110 transition ease-out duration-500 w-auto">
              <div className="flex  px-6">
                <p className="py-4">
                <img className="w-8 h-8 rounded-full"
                  src={
                    "http://localhost:1337" + tag.TagImage.data.attributes.url
                  }
                />
                </p>
                <h2 className="pl-2 text-gray-100 text-center py-5">{tag.TagTitle}</h2>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTag;
