import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import img from "../public/media/trendingbyte.jpg"
import navmenu from "../public/media/navmenu.svg"

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className='pb-20'>
      <nav className=' bg-gray-900 fixed top-0 left-0 right-0 z-10'>
        <div className='justify-between mx-auto md:max-w-[1040px] md:items-center md:flex'>
          <div>
            <div className='flex items-center justify-between py-3 md:py-5 md:block sm:px-3 md:px-0'>
              <Link href='/'>
                <h2 className='text-2xl text-cyan-600 font-bold '>
                  <Image src={img} width={100} height={30} alt='logo' />
                </h2>
              </Link>
              <div className='md:hidden '>
                <button
                  className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src={navmenu} width={20} height={30} alt='logo' />
                  ) : (
                    <Image
                      src={navmenu}
                      width={20}
                      height={20}
                      alt='logo'
                      className='focus:border-none active:border-none '
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 md:block md:pb-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className='h-screen md:h-auto items-center justify-center md:flex bg-900'>
                <li className='pb-6 text-blue-500 text-lg font-bold hover:text-gray-600 py-2 md:px-4 text-center border-b-2 md:border-b-0'>
                  <Link href='/' onClick={() => setNavbar(!navbar)}>
                    About Us
                  </Link>
                </li>

               
                <li className='pb-6 text-blue-500 text-lg font-bold hover:text-gray-600 py-2 md:px-4 text-center border-b-2 md:border-b-0'>
                  <Link href='/' onClick={() => setNavbar(!navbar)}>
                    Services
                  </Link>
                </li>
                <li className='pb-6 text-blue-500 text-lg font-bold hover:text-gray-600 py-2 md:px-4 text-center border-b-2 md:border-b-0'>
                  <Link href='/' onClick={() => setNavbar(!navbar)}>
                    Popular Tags
                  </Link>
                </li>
                <li className='pb-6 text-blue-500 text-lg font-bold hover:text-gray-600 py-2 md:px-4 text-center border-b-2 md:border-b-0'>
                  <Link href='/' onClick={() => setNavbar(!navbar)}>
                    Pricing
                  </Link>
                </li>
                <li className='pb-6 text-blue-500 text-lg font-bold hover:text-gray-600 py-2 md:px-4 text-center border-b-2 md:border-b-0'>
                  <Link href='/' onClick={() => setNavbar(!navbar)}>
                  Blog
                  </Link>
                </li>

         
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
