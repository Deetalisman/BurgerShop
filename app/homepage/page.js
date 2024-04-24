"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { BiCycling } from "react-icons/bi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function Homepage() {
  return (
    <Carousel
      additionalTransform={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      inifinite
      responsive={responsive}
      itemClass="item"
      showDots={true}
    >
      <div className="w-[100%] clip-path flex justify-center h-[88vh] text-white bg-blue-950">
        <Image src="/b1.png" width={600} height={200} alt="b1" />
        <aside className=" mt-36 w-[40%]">
          <p className="text-[1.5rem] font-semibold text-yellow-300">
            Fast Food Burger
          </p>
          <h1 className="text-[4rem] leading-[5rem] mt-2 font-extrabold name">
            BEST <br></br> BURGERS
          </h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            fugiat a sint officiis sequi iusto eos quia laudantium. Odio
            perferendis magni quaerat, cupiditate quibusdam soluta.
          </p>
          <button className="bg-green-400 mt-6 flex hover:bg-red-600 text-white px-6 py-3 rounded-md">
            <BiCycling className="text-white text-[1.5rem]" />
            <p className="text-[0.75rem] ml-2 mt-1">Order Now</p>
          </button>
        </aside>
      </div>
      <div className="w-[100%] clip-path flex justify-center h-[88vh] text-white bg-red-950">
        <Image src="/b2.png" width={600} height={200} alt="b1" />
        <aside className=" mt-36 w-[40%]">
          <p className="text-[1.5rem] font-semibold text-yellow-300">
            Tasty Burger
          </p>
          <h1 className="text-[4rem] leading-[5rem] mt-2 font-extrabold name">
            TOP <br></br> BURGERS
          </h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            fugiat a sint officiis sequi iusto eos quia laudantium. Odio
            perferendis magni quaerat, cupiditate quibusdam soluta.
          </p>
          <button className="bg-blue-500 mt-6 flex hover:bg-red-600 text-white px-6 py-3 rounded-md">
            <BiCycling className="text-white text-[1.5rem]" />
            <p className="text-[0.75rem] ml-2 mt-1">Order Now</p>
          </button>
        </aside>
      </div>
    </Carousel>
  );
}

export default Homepage;
