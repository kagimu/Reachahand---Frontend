import React from "react";
import { motion } from "framer-motion";

const ImpactCard = ({ label, total, word }) => {
  return (
    <div className="flex justify-evenly items-left flex-col py-2  lg:pr-0">
      <h1 className="text-white poppinsSemiBold text:md lg:h1 -ml-12 lg:ml-0 lg:justify-start lg:text-left">
        {total}
        {word}
        <span className="text-color-gold poppinsRegular mt-5 lg:mt-0 text:sm lg:body-2 -ml-15 lg:ml-0 lg:justify-start lg:text-left">
          {word}
        </span>
      </h1>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.6,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easein",
          duration: 1,
        }}
        className="poppinsRegular text-white text-sm max-w-20 xl:max-w-[400px] lg:body-1 -ml-12 lg:ml-0 "
      >
        {label}
      </motion.p>
    </div>
  );
};

export default ImpactCard;
