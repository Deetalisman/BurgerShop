import Image from "next/image";

function Ourchef() {
  return (
    <div className="text-center mt-20 px-16 lg:px-28">
      <h1 className="text-2xl lg:text-3xl font-bold leading-[3rem]">
        MEET OUR EXPERT
        <span className="text-red-600 ml-2">CHEF</span>
      </h1>
      <aside className="mt-10 flex flex-wrap justify-between">
        <div className="w-[100%] md:w-[45%] lg:w-[30%]">
          <Image
            src="/t1.jpg"
            className="rounded-lg mx-auto"
            height={200}
            width={280}
            alt="chef"
          />
          <aside className="px-4 lg:px-8 mt-5">
            <p className="text-[1.3rem] lg:text-2xl font-semibold">John Doe</p>
            <button className="bg-green-600 hover:bg-orange-600 mt-2 rounded-md text-[0.7rem] px-4 py-2 text-white">
              Kitchen Porter
            </button>
            <p className="text-[0.8rem] mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium
            </p>
          </aside>
        </div>
        <div className="w-[100%] md:w-[45%] md:mt-0 mt-5 lg:w-[30%]">
          <Image
            src="/t2.jpg"
            className="rounded-lg mx-auto"
            height={200}
            width={280}
            alt="chef"
          />
          <aside className="px-4 lg:px-8 mt-5">
            <p className="text-[1.3rem] lg:text-2xl font-semibold">Kohn Doe</p>
            <button className="bg-green-600 hover:bg-orange-600 mt-2 rounded-md text-[0.7rem] px-4 py-2 text-white">
              Executive Chef
            </button>
            <p className="text-[0.8rem] mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium
            </p>
          </aside>
        </div>
        <div className="w-[100%] md:w-[45%] lg:mt-0 mt-10 lg:w-[30%]">
          <Image
            src="/t3.jpg"
            className="rounded-lg mx-auto"
            height={200}
            width={280}
            alt="chef"
          />
          <aside className="px-4 lg:px-8 mt-5">
            <p className="text-[1.3rem] lg:text-2xl font-semibold">Hohn Doe</p>
            <button className="bg-green-600 hover:bg-orange-600 mt-2 rounded-md text-[0.7rem] px-4 py-2 text-white">
              Head Chef
            </button>
            <p className="text-[0.8rem] mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium
            </p>
          </aside>
        </div>
      </aside>
    </div>
  );
}

export default Ourchef;
