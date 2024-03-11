import React from "react";
import Headerleft from "./Headerleft";
import Headerright from "./Headerright";

export default function Header() {
  return (
    <div className="mt-2 flex justify-between">
      <Headerleft />
      <Headerright />
    </div>
  );
}
