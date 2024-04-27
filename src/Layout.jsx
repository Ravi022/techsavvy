import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation.jsx";
import { Outlet } from "react-router-dom";
export default function Layout() {
  const backgroundImageStyle = {
    backgroundImage:
      "url(https://www.tsinfosec.com/assets/img/banner/banner-bg-5.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // Set background size to cover
    width: "100vw",
    height: "100vh",
    margin: 0, // Add this to remove any default margin
    padding: 0, // Add this to remove any default padding
  };
  return (
    <div style={backgroundImageStyle}>
      <div className="ml-20 mr-20">
        <Header />
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
}
