import React from "react";
// import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { Button } from "../../../MovingBorder/ui/moving-border";
const textVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      // ease: "linear",
      duration: 1,
      staggerChildren: 0.01,
    },
  },
};
const textVariants1 = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      // ease: "linear",
      duration: 1,
      staggerChildren: 1,
    },
  },
};

export default function HomeComponent1() {
  return (
    <motion.div className="" variants={textVariants}>
      <motion.div
        className="mt-[15vh] flex flex-col items-center"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="" variants={textVariants}>
          <img
            variants={textVariants}
            src="https://tsinfosec.com/assets/img/banner/banner-logo.png"
            alt="logo"
          />
        </motion.div>
        <motion.div className="m-2" variants={textVariants}>
          <motion.p
            className="text-red-600 text-center font-lato text-.5xl stroke-white"
            variants={textVariants}
          >
            Best Cyber Security & Software Solutions
          </motion.p>
        </motion.div>
        <motion.div
          className="font-serif text-center text-7xl  gap-2"
          variants={textVariants}
        >
          {" "}
          <motion.h1 className="" variants={textVariants}>
            Real-Time Monitoring
          </motion.h1>
          <motion.h1 className="" variants={textVariants}>
            Your Infrastructure
          </motion.h1>
        </motion.div>
        <motion.div className="m-5  " variants={textVariants1}>
          <motion.p
            className="font-laot text-center text-sm"
            variants={textVariants1}
          >
            We built software that is scalable and reliable in all work
            environments
          </motion.p>
        </motion.div>
        <motion.div variants={textVariants1}>
          {/* <Button
            variants={textVariants1}
            variant="contained"
            style={{ backgroundColor: "#FF0000" }}
          >
            About Us
          </Button> */}
          <Button
            borderRadius=""
            variants={textVariants1}
            variant="contained"
            className="bg-rose-700 hover:bg-rose-800"
          >
            About Us
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
