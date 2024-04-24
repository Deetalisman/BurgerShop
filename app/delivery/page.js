import Image from "next/image";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";
function Delivery() {
  return (
    <div className="mt-16 px-28 flex">
      <Image src="/delivery.svg" width={600} height={350} alt="deliver" />
      <aside className="ml-5 mt-10">
        <p className="text-4xl font-bold leading-[3.5rem]">
          YOUR <span className="text-red-600">FAVORITE BURGER</span>
          <br></br> ON THE WAY
        </p>
        <p className="mt-5 text-gray-500 leading-[1.5rem] text-[0.8rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          fugiat a sint officiis sequi iusto eos quia laudantium. Odio
          perferendis magni quaerat, cupiditate quibusdam soluta.
        </p>

        <div className="mt-10 flex">
          <RiEBike2Fill className="text-3xl text-red-600" />
          <p className="ml-3 font-semibold mt-1">Delivery in 30 minutes</p>
        </div>
        <div className="mt-4 flex">
          <IoFastFood className="text-3xl text-red-600" />
          <p className="ml-3 font-semibold mt-1">Free shipping from 75$</p>
        </div>
        <div className="mt-4 flex">
          <BsDoorOpen className="text-3xl text-red-600" />
          <p className="ml-3 font-semibold mt-1">Delivery on your Doorstep</p>
        </div>
      </aside>
    </div>
  );
}

export default Delivery;
