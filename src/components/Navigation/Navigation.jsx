import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../MovingBorder/ui/moving-border";

export default function Navigation() {
  const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <div className=" mt-5">
      <nav className="lg:px-6 py-2.5">
        <ul className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <li>
            <Link to="/" className="flex items-center">
              <img
                src="https://tsinfosec.com/assets/img/banner/banner-logo.png"
                className="mr-3 h-15"
                alt="Logo"
              />
            </Link>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` text-base font-sans block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-white -700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                `text-base font-sans block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-white -700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              About
            </NavLink>
          </li>
          {/* <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="text-white">
              DevServices
              {isDropdownVisible && <DropDown />}
            </div>
          </li> */}
          <motion.div
            className="menu-item static"
            onHoverStart={toggleHoverMenu}
            onHoverEnd={toggleHoverMenu}
          >
            <motion.div className="text-white">DevServices</motion.div>
            {/* <motion.div
              className="sub-menu  ` absolute"
              initial="exit"
              animate={isHover ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <div className="sub-menu-background" />
              <div className="sub-menu-container flex-col">
                <div className="sub-menu-item text-white  ">
                  {" "}
                  Software Development
                </div>
                <div className="sub-menu-item text-white ">
                  Application Development
                </div>
              </div>
            </motion.div> */}
          </motion.div>
          <li>
            <NavLink
              to="training"
              className={({ isActive }) =>
                `text-base font-sans block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-white -700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Training
            </NavLink>
          </li>
          <li>
            <NavLink
              to="security"
              className={({ isActive }) =>
                `text-base font-sans block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-white -700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Security
            </NavLink>
          </li>
          <li>
            <NavLink
              to="career"
              className={({ isActive }) =>
                `text-base font-sans block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-white -700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Career
            </NavLink>
          </li>
          <li>
            <NavLink
              to="blogs"
              className={({ isActive }) =>
                `text-base font-sans block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-white -700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                `text-base font-sans block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-white -700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="login"
              className={({ isActive }) =>
                `text-base font-sans block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-white -700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <Link
              to="getstarted"
              className="flex items-center text-base font-sans"
            >
              {/* <Button
                style={{ backgroundColor: "#ff0000" }}
                variant="contained"
              >
                Get a Quote
              </Button> */}
              <div className="">
                <Button className="bg-rose-700 hover:bg-rose-800">
                  Get a Quote
                </Button>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
