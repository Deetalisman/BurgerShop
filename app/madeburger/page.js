import Image from "next/image";
function Madeburger() {
  return (
    <div className="mt-20 text-center">
      <h1 className="text-4xl font-bold leading-[3rem]">
        BURGERS MADE WITH <br></br> LOVE AND{" "}
        <span className="text-red-600">CARE</span>
      </h1>
      <aside className="flex justify-between mt-20 px-28">
        <div className="w-[28%] text-center p-4 hover:bg-white rounded-lg">
          <Image
            src="/f1.jpg"
            width={280}
            height={150}
            alt="burg"
            className="mx-auto rounded-xl"
          />
          <p className="mt-3 font-bold">Our Burger</p>
          <p className="mt-3 text-[0.8rem] leading-[1.5rem] text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            fugiat a sint officiis sequi iusto eos quia laudantium. Odio
            perferendis magni quaerat, cupiditate quibusdam soluta.
          </p>
        </div>
        <div className="w-[28%] text-center mt-10 p-4 hover:bg-white rounded-lg">
          <Image
            src="/f2.jpg"
            width={280}
            height={150}
            alt="burg"
            className="mx-auto rounded-xl"
          />
          <p className="mt-3 font-bold">Your Opinion is important</p>
          <p className="mt-3 text-[0.8rem] leading-[1.5rem] text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            fugiat a sint officiis sequi iusto eos quia laudantium. Odio
            perferendis magni quaerat, cupiditate quibusdam soluta.
          </p>
        </div>
        <div className="w-[28%] text-center p-4 hover:bg-white rounded-lg">
          <Image
            src="/f3.jpg"
            width={280}
            height={150}
            alt="burg"
            className="mx-auto rounded-xl"
          />
          <p className="mt-3 font-bold">Chicken Burgers</p>
          <p className="mt-3 text-[0.8rem] leading-[1.5rem] text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            fugiat a sint officiis sequi iusto eos quia laudantium. Odio
            perferendis magni quaerat, cupiditate quibusdam soluta.
          </p>
        </div>
      </aside>
    </div>
  );
}

export default Madeburger;
