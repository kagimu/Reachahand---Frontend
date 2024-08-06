import React from "react";
import rahu from "../assets/logo-global.png";
import Clinic from "../assets/images/clinic.jpg";
import hosp from "../assets/images/DSC09024.jpg";
import art from "../assets/images/Artboard – 2.png";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

const ABoutRAHU = () => {
  return (
    <div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2, delay: 0.25 }}
        className="bg-[#00274e]"
      >
        <div className="flex w-full justify-between xl:px-20 xl:py-10 bg-[#00274e]">
          <a href="Global">
            <img src={rahu} className="w-full xl:w-[150px] object-contain " />
          </a>

          <a href="GetInvolved">
            <button className="poppinsSemiBold bg-color-darkBlue rounded-[30px] py-2 p-5 text-md lg:body-1 text-white border-2 border-color-darkBlue">
              Get involved
            </button>
          </a>
        </div>
        <div className="justify-center items-center xl:mt-40 bg-[#00274e] xl:pb-[15%]">
          <h1 className="poppinsBold flex justify-center items-center text-white h4 xl:h1">
            About Us
          </h1>
          <h3 className="poppinsSemiBold flex justify-center items-center text-color-paleWhite opacity-85 body-2 lg:h5 xl:p-10">
            Your support is crucial in helping us reach our goals. By <br />{" "}
            donating to ReachAHand Clinic, you contribute to a <br /> healthier,
            more informed and empowered youth in Uganda
          </h3>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.25 }}
        className="justify-center items-center flex xl:mb-[30%] "
      >
        <img
          src={Clinic}
          className="rounded-[140px] xl:w-[1200px] xl:h-[550px] absolute"
        />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.25 }}
        className="xl:p-20"
      >
        <div className="flex flex-cols-2 gap-10 justify-between xl:px-40">
          <div className="w-1/2 xl:px-40">
            <h1 className="h1 poppinsSemiBold text-left">Our Vision</h1>
            <p className="body-2 md:body-1 lg:h5 poppinsRegular text-left leading-tight">
              To create a world where young people have the knowledge,
              resources, ad support to make informed decisions about their
              health and future
            </p>
          </div>
          <div className="w-1/2 xl:px-40">
            <h1 className="h1 poppinsSemiBold text-left">Our Mission</h1>
            <p className="body-2 md:body-1 lg:h5 poppinsRegular text-left leading-tight">
              To create a world where young people have the knowledge,
              resources, ad support to make informed decisions about their
              health and future
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mt-5 md:mt-10 lg:mt-20 pb-40"
      >
        <img src={hosp} className="w-full xl:h-[900px]" />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.9, delay: 0.25 }}
      >
        <div className="lg:flex lg:flex-cols-3 xl:gap-12 xl:px-20 justify-center items-center lg:pb-40">
          <div>
            <h1 className="body-1 md:h4 lg:h1 poppinsSemiBold">Get in touch</h1>
          </div>
          <div>
            <img
              src={art}
              className="xl:w-[450px] xl:h-[500px] rounded-[30px] object-cover"
            />
          </div>
          <div>
            <div className="justify-between px-20 py-20 mt-10">
              <ul>
                <div className="flex justify-left gap-14">
                  <FaPhoneVolume
                    size={42}
                    className="fill-current text-color-darkBlue mt-6"
                  />
                  <li className="mt-5 poppinsRegular h4 text-color-darkBlue leading-normal mb-6 hover:text-color-gold">
                    +256 414 697 037
                  </li>
                </div>
                <div className="flex justify-left gap-14">
                  <IoMdMail
                    size={42}
                    className="fill-current text-color-darkBlue mt-6 sm:w-10"
                  />
                  <li className="mt-5 poppinsRegular h4 text-color-darkBlue leading-normal mb-6 hover:text-color-gold">
                    info@reachahand.org
                  </li>
                </div>
                <div className="flex justify-left gap-14">
                  <FaLocationDot
                    size={42}
                    className="fill-current text-color-darkBlue mt-6"
                  />
                  <li className="mt-5 poppinsRegular h4 text-color-darkBlue leading-normal mb-6 hover:text-color-gold">
                    Plot 7502, Mbarara
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.25 }}
        className="mt-10 md:mt-12 lg:mt-40 bg-color-darkBlue pt-10 md:pt-20 lg:pt-40 pb-5 md:pb-10 lg:pb-20"
      >
        <div className="flex justify-around items-center p-10">
          <h1 className="text-white poppinsSemiBold body-2 xl:h5 ">
            Reach a Hand Uganda
          </h1>
          <img src={rahu} className="xl:w-[340px] object-contain" />
          <h1 className="text-white poppinsSemiBold body-2 xl:h5">
            Get involved
          </h1>
          <a href="ABoutRAHU">
            {" "}
            <h1 className="text-white poppinsSemiBold body-2 xl:h5">
              About us
            </h1>
          </a>
        </div>
        <h2 className="text-white opacity-85 poppinsSemiBold xl:body-1 justify-center items-center flex p-10">
          Improving the health of young people
        </h2>
      </motion.div>
    </div>
  );
};

export default ABoutRAHU;
