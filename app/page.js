import Image from "next/image";
import Menubar from "./menubar/page";
import Homepage from "./homepage/page";
import Madeburger from "./madeburger/page";
import Ourburger from "./ourburger/page";
import Delivery from "./delivery/page";
import Ourchef from "./ourchef/page";
import Reserve from "./reserve/page";
import Joinus from "./joinus/page";
import Foot from "./foot/page";

export default function Home() {
  return (
    <main className="bg-[rgb(244,241,234)]">
      <Menubar />
      <Homepage />
      <Madeburger />
      <Ourburger />
      <Delivery />
      <Ourchef />
      <Reserve />
      <Joinus />
      <Foot />
    </main>
  );
}
