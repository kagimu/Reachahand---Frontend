import React from "react";
import { motion } from "framer-motion";
import home6 from "../../assets/Artboard – 3.jpg";

const Section5 = () => {
  return (
    <div className="flex flex-cols-3 gap-2 w-full justify-center mt-40 rounded-[30px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{
          backgroundImage: `url(${home6})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="content-center w-full rounded-3xl p-4 text-center justify-center items-center align-middle overflow-hidden"
      >
        <h1 className="h5 xl:h1 text-black leading-normal poppinsSemiBold text-center lg:mt-10">
          We can't do this alone
        </h1>
        <h3 className="body-1 px-[20%] xl:h5 text-black transition-colors leading-normal poppinsRegular text-center xl:ml-10">
          At Reach A Hand, we believe in the power of collaboration. You can partner with some of our programs or volunteer.
        </h3>
        <a href="GetInvolved">
          <motion.button className="poppinsSemiBold px-6 py-2 lg:px-10 lg:py-4 bg-black text-white mt-10 mb-10 rounded-[30px] body-1 justify-center hover:bg-white hover:text-color-darkBlue hover:border-color-darkMaroon hover:border-2">
            Get Involved
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
}

export default Section5;
