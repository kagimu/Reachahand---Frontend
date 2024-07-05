import React from "react";
import user from "../assets/icons/featherIcons/arrow-up-right.svg";
import { motion } from "framer-motion";

const ProgramCard = ({ title, imgUrl, icon, subtext }) => {
  return (
    <div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex flex-col w-full justify-center mx-auto px-10 lg:grid lg:grid-cols-3 gap-6 "
      >
        <div className="justify-start">
          <img
            src={imgUrl}
            alt="tile1"
            width={400}
            height={400}
            className="rounded-[30px] mt-10 w-full h-[300px] object-cover lg:w-[400px]"
          />
        </div>
        <div className="text-left justify-center">
          <h2 className="h5 text-center mt-5 mb-5 poppinsSemiBold lg:text-left lg:mt-10 lg:mb-10">
            {title}
          </h2>
          <p className="h6 text-center lg:text-left poppinsRegular">
            {subtext.substring(0, 300)}...
          </p>
        </div>
        <div className="lg:pl-40 lg:justify-between">
          <div className="flex gap-4 mt-10">
            <motion.h3
              whileHover={{ scale: "1.0" }}
              whileTap={{ scale: "0.95", rotate: "2.5deg" }}
              transition={{ duration: "0.125", ease: "easeInOut" }}
              className="poppinsRegular body-1 cursor-pointer"
            >
              Read more
            </motion.h3>
            <motion.img
              whileHover={{ scale: "1.25" }}
              whileTap={{ scale: "0.95", rotate: "2.5deg" }}
              transition={{ duration: "0.125", ease: "easeInOut" }}
              src={user}
              alt="user"
              width={42}
              className=" lg:-mt-2"
            />
          </div>
          <img
            src={icon}
            alt="icon"
            width={120}
            className="xl:mt-20 xl:ml-0 object-contain ml-[80%] -mt-20"
          />
        </div>
      </motion.div>
      <hr className="mt-10 border-gray-400" />
    </div>
  );
};

export default ProgramCard;
