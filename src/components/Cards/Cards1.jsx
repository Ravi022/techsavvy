import * as React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function Cards() {
  // Array of card data
  const cardData = [
    {
      icon: <IoSettingsOutline />,
      headerName: "Professional Training",
      content:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    // Add more objects for additional cards
    {
      icon: <IoSettingsOutline />,
      headerName: "Professional Training",
      content:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      icon: <IoSettingsOutline />,
      headerName: "Professional Training",
      content:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
  ];

  return (
    <div className="">
      <div className="flex justify-center items-center gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            style={{
              backgroundImage:
                "url('https://tsinfosec.com/assets/img/feature-shape.png')",
            }}
            className="border z-10 bg-black hover:bg-red-500 shadow-sm transition transform hover:-translate-y-2 ease-in-out duration-700 bg-no-repeat bg-right-bottom text-slate-300 group"
          >
            <div className="flex m-3 p-3 ">
              <div className="flex justify-center items-center text-white text-5xl group-hover:scale-x-[-1] duration-700">
                <IconContext.Provider value={{ color: "red" }}>
                  {" "}
                  {card.icon}
                </IconContext.Provider>
              </div>
              <div className="w-full flex justify-center items-center text-2xl text-white ">
                {card.headerName}
              </div>
            </div>

            <div className="m-5 p-4 text-white flex-wrap ">{card.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
