import React from "react";
import HomeComponent1 from "./HomeComponent1/HomeComponent1";
import { Carosel } from "../../Carousel/Carousel";
import Cards1 from "../../Cards/Cards1";
export default function Home() {
  return (
    <div className="h-full w-full overflow-y-scroll">
      <div className="text-white-500 text-slate-300">
        <HomeComponent1 />
        <div className="min-h-full h-[19vh]"></div>
      </div>
      <div className="">
        <Carosel />
      </div>
      <div className="h-[50vh] w-full flex justify-center items-center">
        {" "}
        <Cards1 />
      </div>
    </div>
  );
}
