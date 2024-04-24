import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { BiCycling } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
function Menubar() {
  return (
    <div className=" flex px-16 py-4 justify-between">
      {/* Logo */}

      <div className="flex mt-2">
        <FaHamburger className="text-3xl text-orange-500" />
        <h1 className="ml-2 text-2xl font-semibold">BurgerBite</h1>
      </div>
      {/* Links */}
      <ul className="flex space-x-9 font-semibold mt-2">
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
        <button className="bg-blue-950 flex hover:bg-orange-600 text-white px-7 py-3 rounded-md">
          <BiCycling className="text-white text-[1.4rem]" />
          <p className="text-[0.7rem] ml-2 mt-1">Order Now</p>
        </button>
        <button className="bg-orange-600 ml-3 text-white px-4 py-2 rounded-md">
          <BiShoppingBag className="text-white text-[1.4rem]" />
        </button>
      </div>
    </div>
  );
}

export default Menubar;
