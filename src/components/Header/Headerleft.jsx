import React from "react";
import { BiPhoneCall } from "react-icons/bi";

export default function Headerleft() {
  const number = "+9170024-13212";

  return (
    <div className="flex ">
      <div className=" py-1 px-1 text-slate-200">
        <BiPhoneCall />
      </div>
      <div className="pl-2 text-white">{number}</div>
    </div>
  );
}
