import { IoCallOutline } from "react-icons/io5";
import { GrRestaurant } from "react-icons/gr";
function Reserve() {
  return (
    <div className="md:reservee h-[55rem] lg:h-[100vh] relative  mt-10 text-white ">
      <article className="absolute px-8 md:px-20 lg:px-32 pt-1 lg:pt-20 lg:flex bg-[#000000a6] top-0 left-0 bottom-0 right-0">
        <aside className="lg:w-[50%] w-[100%] mt-8 lg:mt-24">
          <h1 className="text-2xl md:text-3xl lg:text-4xl leading-[2.5rem] md:leading-[3.5rem] font-bold">
            DO YOU HAVE ANY DINNER PLAN TODAY? RESERVE YOUR TABLE
          </h1>
          <p className="text-gray-400 text-[0.8rem] mt-2 md:mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            fugiat a sint officiis sequi iusto eos quia laudantium. Odio
            perferendis magni quaerat, cupiditate
          </p>
          <div className="flex mt-7">
            <aside className="bg-red-600 p-2 rounded-full w-8 h-8">
              <IoCallOutline />
            </aside>
            <aside className="ml-4 font-semibold">
              <p>Quick order 24/7</p>
              <p className="text-yellow-600">+0123 458 789</p>
            </aside>
          </div>
        </aside>
        <aside className="text-center lg:mt-0 mt-10 ml-0 lg:ml-10 pt-14 w-[100%] lg:w-[45%] h-[31rem]  lg:h-[33rem] rounded-md bg-green-600 px-[10%]  md:px-[20%] py-2 lg:p-6">
          <GrRestaurant className="text-[4rem] md:text-[5rem] mx-auto" />
          <h1 className="text-2xl md:text-3xl font-semibold mt-5">
            RESERVATION
          </h1>
          <p className="mt-4 font-semibold">BOOK YOUR TABLE</p>
          <div className="mt-10">
            <select className="px-8 outline-none text-[0.8rem] py-2 rounded-md bg-transparent border-2 border-white">
              <option className="text-black">1 People</option>
              <option className="text-black">2 People</option>
              <option className="text-black">3 People</option>
              <option className="text-black">4 People</option>
              <option className="text-black">5 People</option>
            </select>
            <input
              className="bg-transparent outline-none text-[0.8rem] text-white ml-2 md:ml-9 px-2 md:px-7 py-2 rounded-md border-2 border-white"
              type="date"
            />
            <br></br>
            <input
              className="bg-transparent w-[100%] mt-3 outline-none text-[0.8rem] text-white px-2 md:px-7 py-2 rounded-md border-2 border-white"
              type="time"
            />
            <button className="w-[100%] bg-blue-950 mt-4 py-3 text-[0.8rem] rounded-md">
              Book Now
            </button>
          </div>
        </aside>
      </article>
    </div>
  );
}

export default Reserve;
