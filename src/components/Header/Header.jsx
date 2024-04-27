import React from "react";
import Headerleft from "./Headerleft";
import Headerright from "./Headerright";

export default function Header() {
  return (
    <div className="flex justify-between">
      <Headerleft />
      <Headerright />
    </div>
  );
}
