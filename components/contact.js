import React from "react";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <footer className="footer">
      <div className="bg-gray-800 box-border border-3 border-gray-500 rounded-2xl">
        <div className=" ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-12">
            <div className="mb-10 lg:mb-0 lg:mr-4">
             
                
            <h4 className="text-lg mb-5 text-white font-bold">
                TrendingByte
              </h4>
             
              <p className="mb-5 mt-10 text-sm text-gray-500 ">
                When an unknown prnoto sans took a galley and scrambled it to
                make specimen book not only five When an unknown prnoto sans
                took a galley and scrambled it to five centurie.
              </p>
              <h6 className="text-white font-bold mb-5 ">
                Address
              </h6>
              <p className="text-sm text-gray-500">
                123 Main Street
                <br />
                GEC 10001, Chittagong
              </p>
            </div>
            <div className="mb-10 lg:mb-0">
              <h6 className="text-lg mb-5 text-white font-bold ">
                Categories
              </h6>
              <div className="grid grid-cols-2">
                <ul className="menu-footer">
                  <li>
                    <a className="text-gray-500" href="/blog-archive">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-500" href="/blog-archive">
                      Business
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-500" href="/blog-archive">
                      Adventure
                    </a>
                  </li>
                </ul>
                <ul className="menu-footer">
                  <li>
                    <a className="text-gray-500" href="/blog-archive">
                      Animal
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-500" href="/blog-archive">
                      Dental
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-500" href="/blog-archive">
                      Biology
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-lg mb-5 text-white font-bold">
                Newsletter
              </h4>
              <p className="text-base text-gray-500 ">
                Sign up to be first to receive the latest stories inspiring us,
                case studies, and industry news.
              </p>
              <div className="form-newsletters mt-5 ">
                <form action="#">
                  <div className="mb-5">
                    <input
                      className="w-full p-2 border border-gray-500"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="w-full p-2 border border-gray-500"
                      type="email"
                      placeholder="Emaill address"
                    />
                  </div>
                  <div className="mb-5">
                    <button className="bg-blue-400 shadow-lg shadow-blue-500/50 p-2 rounded-lg text-white font-bold">
                        Subscribe
                        
                        </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-4 px-12">
          <p className="text-sm text-gray-500">
            © 2023 TrendingByte. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
