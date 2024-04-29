"use client";
import { useState } from "react";
import Homepage from "../homepage/page";
import Menubar from "../menubar/page";
import Mobilemenu from "../mobilemenu/page";

function Allhome() {
  const [mobilenav, setmobilenav] = useState(false);
  return (
    <div className="relative">
      <Menubar setmobilenav={setmobilenav} />
      <Homepage />
      {mobilenav && <Mobilemenu setmobilenav={setmobilenav} />}
    </div>
  );
}

export default Allhome;
