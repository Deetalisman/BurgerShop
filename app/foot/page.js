import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Foot() {
  return (
    <div className="py-10 mt-10 px-32 bg-gray-900 text-white">
      <aside className="flex justify-between pb-7 border-b-2 border-gray-500">
        <div className="w-[20rem]">
          <div className="flex mt-2">
            <FaHamburger className="text-2xl text-orange-500" />
            <h1 className="ml-2 text-xl font-semibold">BurgerBite</h1>
          </div>
          <p className="mt-5 text-[0.8rem] text-gray-500">
            Lorem ipsum dolor sit amet dolor sit ame consectetur adipisicing
            elit.
          </p>
          <p className="text-[0.8rem] mt-7 text-gray-300">
            support@example.com
          </p>
          <p className="text-red-300 mt-2">+(123)2458 8789</p>
        </div>
        <div>
          <p className="font-semibold">Products</p>
          <article className="flex flex-col space-y-4 text-[0.8rem] mt-8">
            <Link className="text-gray-500" href="/">
              Chicken Burger
            </Link>
            <Link href="/" className="text-gray-500">
              Beef Burger
            </Link>
            <Link href="/" className="text-gray-500">
              Cripsy Burger
            </Link>
            <Link href="/" className="text-gray-500">
              Classic Burger
            </Link>
            <Link href="/" className="text-gray-500">
              Delight Burger
            </Link>
          </article>
        </div>
        <div>
          <p className="font-semibold">Quick Links</p>
          <article className="flex flex-col space-y-4 text-[0.8rem] mt-8">
            <Link className="text-gray-500" href="/">
              Home
            </Link>
            <Link href="/" className="text-gray-500">
              About
            </Link>
            <Link href="/" className="text-gray-500">
              Menu
            </Link>
            <Link href="/" className="text-gray-500">
              Product
            </Link>
            <Link href="/" className="text-gray-500">
              Newsletter
            </Link>
          </article>
        </div>
        <div>
          <p className="font-semibold">OPENING HOURS</p>
          <p className="text-[0.8rem] mt-8">
            Monday-Friday:<span className="text-yellow-300">8am -4pm</span>
          </p>
          <p className="text-[0.8rem] mt-2">
            Sunday:<span className="text-yellow-300">8am -4pm</span>
          </p>
          <div className="text-[1.5rem] flex space-x-6 mt-10 cursor-pointer">
            <FaFacebook className="text-blue-400" />
            <FaInstagram className="text-red-300" />
            <FaTwitter className="text-blue-400" />
          </div>
        </div>
      </aside>
      <p className="text-center text-gray-500 text-[0.8rem] mt-4">
        Copyright.2024.All rights reserved
      </p>
    </div>
  );
}

export default Foot;
