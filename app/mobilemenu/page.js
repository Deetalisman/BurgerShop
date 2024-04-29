"use client";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

function Mobilemenu({ setmobilenav }) {
  function handleclosenav() {
    setmobilenav(false);
    console.log("closed");
  }
  return (
    <div className=" fixed z-50 flex justify-between w-[100%] h-[100vh] top bottom-0 left-0 right-0 bg-[#000000a6]">
      <aside className=" bg-green-500 w-[75%] h-[100vh]">
        <ul className=" lg:text-base text-center text-white space-y-12 lg:space-x-9 space-x-4 font-semibold mt-28 lg:mt-2">
          <li>
            <Link href="/" className="hover:text-red-500">
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
      </aside>
      <RxCross2
        onClick={handleclosenav}
        className="text-3xl text-white mt-3 mr-3 cursor-pointer"
      />
    </div>
  );
}

export default Mobilemenu;
