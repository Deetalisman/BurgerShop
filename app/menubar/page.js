"use client";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { BiCycling } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
function Menubar({ setmobilenav }) {
  function handlemobilenav() {
    setmobilenav(true);
    console.log("opened");
  }
  return (
    <div className=" flex lg:px-16 px-2 md:px-7 py-4 justify-between">
      {/* Logo */}
      <div className="flex mt-2">
        <FaHamburger className=" text-[1.55rem] lg:text-3xl text-orange-500" />
        <h1 className="ml-2 text-[1.1rem] md:text-[1.3rem] lg:text-2xl font-semibold">
          BurgerBite
        </h1>
      </div>
      {/* Links */}
      <ul className="hidden md:flex text-[0.9rem] lg:text-base lg:space-x-9 space-x-4 font-semibold mt-3 lg:mt-2">
        <li>
          <Link href="/" className="hover:text-red-600">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-red-600">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-red-600">
            Menu
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-red-600">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-red-600">
            Contact
          </Link>
        </li>
      </ul>
      {/* order and cart */}
      <div className="flex">
        <button className="bg-blue-950 flex hover:bg-orange-600 text-white lg:x-7 px-3 py-2 lg:py-3 rounded-md">
          <BiCycling className="text-white text-[1.4rem]" />
          <p className="text-[0.7rem] ml-2 mt-1">Order Now</p>
        </button>
        <button className="bg-orange-600 ml-1 md:ml-3 text-white px-4 py-2 rounded-md">
          <BiShoppingBag className="text-white text-[1.4rem]" />
        </button>
        <HiMiniBars3BottomRight
          onClick={handlemobilenav}
          className="md:hidden cursor-pointer block text-3xl ml-2 md:ml-4"
        />
      </div>
    </div>
  );
}

export default Menubar;
