import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
export default function Headerright() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="flex justify-center items-center gap-3 mt-3 ">
      <div className=" text-slate-200 m-1 ">
        <FaFacebook onClick={() => openInNewTab("https://facebook.com")} />
      </div>
      <div className=" text-slate-200 m-1">
        <FaInstagram onClick={() => openInNewTab("https://instagram.com")} />
      </div>
      <div className=" text-slate-200 m-1">
        {" "}
        <FaLinkedinIn onClick={() => openInNewTab("https://linkedin.com")} />
      </div>
    </div>
  );
}
