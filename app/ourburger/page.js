"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function Ourburger() {
  return (
    <div className="mt-20  mb-8">
      <h1 className="text-4xl font-bold text-center leading-[3rem]">
        OUR POPULAR
        <span className="text-red-600 ml-3">BURGER</span>
      </h1>
      <div className="mt-10 px-28">
        <Carousel
          additionalTransform={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          inifinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          <div className="p-6 bg-white w-[16rem] rounded-lg">
            <Image src="/b1.png" width={200} height={100} alt="burg" />
            <p className="font-semibold mt-3">Beefy Bite</p>
            <div className="mt-2 flex">
              <aside className="flex">
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
              </aside>
              <p className="ml-2 text-gray-500 text-[0.8rem]">(6)</p>
            </div>
            <p className="mt-2 text-[0.8rem] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="mt-5 flex justify-between">
              <p className="text-[1.1rem] font-semibold mt-1 text-red-600">
                $10.88
              </p>
              <button className="bg-orange-600 ml-3 text-white hover:bg-green-600 px-4 py-2 rounded-md">
                <BiShoppingBag className="text-white text-[1.3rem]" />
              </button>
            </div>
          </div>
          <div className="p-6 bg-white w-[16rem] rounded-lg">
            <Image src="/b2.png" width={200} height={100} alt="burg" />
            <p className="font-semibold mt-3">Beefy Bite</p>
            <div className="mt-2 flex">
              <aside className="flex">
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
              </aside>
              <p className="ml-2 text-gray-500 text-[0.8rem]">(6)</p>
            </div>
            <p className="mt-2 text-[0.8rem] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="mt-5 flex justify-between">
              <p className="text-[1.1rem] font-semibold mt-1 text-red-600">
                $10.88
              </p>
              <button className="bg-orange-600 ml-3 text-white hover:bg-green-600 px-4 py-2 rounded-md">
                <BiShoppingBag className="text-white text-[1.3rem]" />
              </button>
            </div>
          </div>
          <div className="p-6 bg-white w-[16rem] rounded-lg">
            <Image src="/b3.png" width={200} height={100} alt="burg" />
            <p className="font-semibold mt-3">Beefy Bite</p>
            <div className="mt-2 flex">
              <aside className="flex">
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
              </aside>
              <p className="ml-2 text-gray-500 text-[0.8rem]">(6)</p>
            </div>
            <p className="mt-2 text-[0.8rem] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="mt-5 flex justify-between">
              <p className="text-[1.1rem] font-semibold mt-1 text-red-600">
                $10.88
              </p>
              <button className="bg-orange-600 ml-3 text-white hover:bg-green-600 px-4 py-2 rounded-md">
                <BiShoppingBag className="text-white text-[1.3rem]" />
              </button>
            </div>
          </div>
          <div className="p-6 bg-white w-[16rem] h-[26rem] rounded-lg">
            <Image
              src="/b4.png"
              className="mt-10"
              width={200}
              height={100}
              alt="burg"
            />
            <p className="font-semibold mt-9">Beefy Bite</p>
            <div className="mt-2 flex">
              <aside className="flex">
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
              </aside>
              <p className="ml-2 text-gray-500 text-[0.8rem]">(6)</p>
            </div>
            <p className="mt-2 text-[0.8rem] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="mt-5 flex justify-between">
              <p className="text-[1.1rem] font-semibold mt-1 text-red-600">
                $10.88
              </p>
              <button className="bg-orange-600 ml-3 text-white hover:bg-green-600 px-4 py-2 rounded-md">
                <BiShoppingBag className="text-white text-[1.3rem]" />
              </button>
            </div>
          </div>
          <div className="p-6 bg-white w-[16rem] rounded-lg">
            <Image src="/b5.png" width={200} height={100} alt="burg" />
            <p className="font-semibold mt-3">Beefy Bite</p>
            <div className="mt-2 flex">
              <aside className="flex">
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
              </aside>
              <p className="ml-2 text-gray-500 text-[0.8rem]">(6)</p>
            </div>
            <p className="mt-2 text-[0.8rem] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="mt-5 flex justify-between">
              <p className="text-[1.1rem] font-semibold mt-1 text-red-600">
                $10.88
              </p>
              <button className="bg-orange-600 ml-3 text-white hover:bg-green-600 px-4 py-2 rounded-md">
                <BiShoppingBag className="text-white text-[1.3rem]" />
              </button>
            </div>
          </div>
          <div className="p-6 bg-white w-[16rem] rounded-lg">
            <Image src="/b6.png" width={200} height={100} alt="burg" />
            <p className="font-semibold mt-3">Beefy Bite</p>
            <div className="mt-2 flex">
              <aside className="flex">
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
                <FaStar className="text-[1.1rem] text-yellow-600" />
              </aside>
              <p className="ml-2 text-gray-500 text-[0.8rem]">(6)</p>
            </div>
            <p className="mt-2 text-[0.8rem] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="mt-5 flex justify-between">
              <p className="text-[1.1rem] font-semibold mt-1 text-red-600">
                $10.88
              </p>
              <button className="bg-orange-600 ml-3 text-white hover:bg-green-600 px-4 py-2 rounded-md">
                <BiShoppingBag className="text-white text-[1.3rem]" />
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Ourburger;
