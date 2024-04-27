import React from "react";
import { BiPhoneCall } from "react-icons/bi";

export default function Headerleft() {
  const number = "+9170024-13212";

  return (
    <div className="flex justify-center items-center gap-3 mt-3">
      <div className=" flex  text-slate-200">
        <BiPhoneCall />
      </div>
      <div className="text-white">{number}</div>
    </div>
  );
}
