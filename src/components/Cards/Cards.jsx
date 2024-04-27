import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IoSettingsOutline } from "react-icons/io5";

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
    <div className="flex justify-center items-center bg-cover bg-center bg-no-repeat">
      {cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 390 }} variant="outlined">
          {/* <div
            className=""
            style={{
              backgroundImage:
                "url('https://tsinfosec.com/assets/img/feature-shape.png')",
            }}
          > */}
            <CardContent>
              <div className="flex">
                <div className="flex justify-center items-center ">
                  {card.icon}
                </div>
                <div className="w-full flex justify-center items-center">
                  {card.headerName}
                </div>
              </div>

              <div className="m-5 p-4">
                <Typography variant="body2" color="text.secondary">
                  {card.content}
                </Typography>
              </div>
            </CardContent>
          {/* </div> */}
        </Card>
      ))}
    </div>
  );
}
