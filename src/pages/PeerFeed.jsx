import React from "react";
import back from "../assets/peer-educs.jpg";
import logo from "../assets/peer-educ.png";
import rahu from "../assets/rahu icon.png";
import { motion } from "framer-motion";
import KhatEngine from "./KhatEngine";

const PeerFeed = () => {
  return (
    <div>
      <div className="flex mt-10 justify-between px-20 static z-50">
        <div>
          {" "}
          <a href="/PeerFeed">
            <motion.img
              whileHover={{ scale: "1.00" }}
              whileTap={{ scale: "0.95", rotate: "2.5deg" }}
              transition={{ duration: "0.125", ease: "easeInOut" }}
              src={logo}
              alt="logo"
              width={220}
              className="ml-10"
            />
          </a>
        </div>

        <div className="flex">
          {" "}
          <a href="/PeerSignin">
            <motion.button
              initial={{ rotate: "0deg" }}
              animate={{ rotate: "360deg" }}
              transition={{ duration: "1", ease: "backInOut" }}
              className="bg-black py-3 px-14 border-2 mt-4 border-[#2a9dca] rounded-[25px] justify-end poppinsRegular text-white text-xl hover:bg-[#00274e] hover:text-white hover:border-gold"
            >
              Signin
            </motion.button>
          </a>
          <a href="/">
            <motion.img
              whileHover={{ scale: "1.00" }}
              whileTap={{ scale: "0.95", rotate: "2.5deg" }}
              transition={{ duration: "0.125", ease: "easeInOut" }}
              src={rahu}
              alt="logo"
              width={50}
              height={50}
              className="ml-10 w-[70px] h-[70px]"
            />
          </a>
        </div>
      </div>
      <div className="justify-center items-center w-full">
        <img
          src={back}
          className="w-[80%] h-[350px] object-cover shrink-0 mt-5 mx-auto rounded-[30px]"
        />
      </div>
      <div className="justify-center items-center mt-20 xl:px-[10%] rounded-[35px]">
        <div>
          <KhatEngine className="w-[80%] xl:h-[1080px] " />
        </div>
      </div>
    </div>
  );
};

export default PeerFeed;
