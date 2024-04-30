"use client";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

function Mobilemenu({ setmobilenav }) {
  function handleclosenav() {
    setmobilenav(false);
    console.log("closed");
  }
  return (
    <div className=" fixed transition-all duration-500 z-50 flex justify-between w-[100%] h-[100vh] top bottom-0 left-0 right-0 bg-[#000000a6]">
      <aside className=" transition-all duration-500 delay-200 bg-green-500 w-[75%] h-[100vh]">
        <ul className="text-[1.5rem] flex flex-col items-center justify-center lg:text-base text-white space-y-12 lg:space-x-9 space-x-4 font-semibold mt-32 lg:mt-2">
          <li>
            <Link href="/" className="hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-yellow-600">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-yellow-600">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-yellow-600">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-yellow-600">
              Contact
            </Link>
          </li>
        </ul>
      </aside>
      <RxCross2
        onClick={handleclosenav}
        className="text-4xl font-bold text-white mt-9 mr-3 cursor-pointer"
      />
    </div>
  );
}

export default Mobilemenu;
