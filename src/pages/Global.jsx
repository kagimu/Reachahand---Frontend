import React from "react";
import rahu from "../assets/logo-global.png";
import doctor from "../assets/images/dr.jpg";
import center from "../assets/images/Artboard – 2.png";
import right from "../assets/images/DSC09244.jpg";
import { motion } from "framer-motion";
import one from "../assets/elements/backgrounds (2).png";
import two from "../assets/elements/backgrounds (3).png";
import three from "../assets/elements/backgrounds (4).png";
import background from "../assets/elements/backgrounds (9).png";

const Global = () => {
  return (
    <div className="bg-color-darkBlue">
      <motion.img
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.4, delay: 0.25 }}
        src={background}
        className="min-h-screen w-full "
      />
      <div className="absolute -mt-[110%] md:-mt-[110%] lg:-mt-[108%] xl:-mt-[106%]">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.2, delay: 0.25 }}
          className="flex w-full justify-between xl:px-20 xl:py-10"
        >
          <img src={rahu} className="w-[100px] xl:w-[150px] object-contain " />
          <a href="GetRAHU">
            <button className="poppinsSemiBold bg-color-lightBlue rounded-[30px] py-2 p-5 text-md lg:body-1 text-white border-2 border-color-darkBlue">
              Get involved
            </button>
          </a>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, delay: 0.25 }}
          className="justify-center items-center xl:mt-40"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="poppinsBold flex justify-center items-center text-white h4 xl:h1"
          >
            Make a Difference Today
          </motion.h1>
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.25 }}
            className="poppinsSemiBold flex justify-center items-center text-color-paleWhite opacity-85 body-2 lg:h5 xl:p-10"
          >
            Your support is crucial in helping us reach our goals. By <br />{" "}
            donating to ReachAHand Clinic, you contribute to a <br /> healthier,
            more informed and empowered youth in Uganda
          </motion.h3>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="xl:flex xl:flex-cols-3 xl:gap-12 xl:px-40 xl:h-full xl:py-20 justify-center items-center flex">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: 0.25 }}
              className="w-1/3 lg:h-[600px]"
            >
              <div>
                <img
                  src={one}
                  className="w-full h-[600px] relative rounded-[30px]"
                />
                <div className="absolute h-full w-[540px] lg:-mt-[30%] xl:p-10">
                  <img
                    src={doctor}
                    className="object-cover float-right rounded-full w-[200px] h-[200px]"
                  />
                  <h2 className="poppinsSemiBold clear-right text-white h4 px-5 xl:px-10 ">
                    Donate
                  </h2>
                  <p className="poppinsSemiBold text-white body-1 px-5 xl:px-10">
                    Your generous donation can make a significan impact on the
                    lives of young people in Uganda. Help us continue our
                    mission to provide vital health services and education
                  </p>
                  <button className="poppinsSemiBold xl:body-1 bg-color-darkBlue mt-5 ml-5 xl:ml-10 text-white py-2 px-8 rounded-[30px]">
                    Donate
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.25 }}
              className="w-1/3 lg:h-[600px]"
            >
              <img
                src={two}
                className="w-full h-full relative rounded-[30px]"
              />
              <div className="absolute h-full w-[540px] lg:-mt-[30%] xl:p-10">
                <img
                  src={center}
                  className="object-cover float-right rounded-full w-[200px] h-[200px]"
                />
                <h2 className="poppinsSemiBold clear-right text-white h4 px-5 xl:px-6 ">
                  Volunteer
                </h2>
                <p className="poppinsSemiBold text-white body-1 px-5 xl:px-6">
                  Join us in our efforts by volunteering your time and
                  expertise. Together we can make a Difference
                </p>
                <button className="poppinsSemiBold xl:body-1 bg-color-darkBlue xl:mt-20 ml-5 xl:ml-10 text-white py-2 px-8 rounded-[30px]">
                  Volunteer
                </button>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.25 }}
              className="w-1/3 lg:h-[600px]"
            >
              <img
                src={three}
                className="w-full h-full relative rounded-[30px]"
              />
              <div className="absolute h-full w-[540px] lg:-mt-[30%] xl:p-10">
                <img
                  src={right}
                  className="object-cover float-right rounded-full w-[200px] h-[200px]"
                />
                <h2 className="poppinsSemiBold clear-right text-white h4 px-5 xl:px-6 ">
                  Partner with Us
                </h2>
                <p className="poppinsSemiBold text-white body-1 px-5 xl:px-6">
                  Your generous donation can make a significan impact on the
                  lives of young people in Uganda. Help us continue our mission
                  to provide vital health services and education
                </p>
                <button className="poppinsSemiBold xl:body-1 bg-color-darkBlue mt-5 ml-5 xl:ml-10 text-white py-2 px-8 rounded-[30px]">
                  Partner
                </button>
              </div>
            </motion.div>
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
          className="mt-10 md:mt-12 lg:mt-40"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex justify-around items-center p-10"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-white poppinsSemiBold body-2 xl:h5 "
            >
              Reach a Hand Uganda
            </motion.h1>
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.25 }}
              src={rahu}
              className="xl:w-[340px] object-contain"
            />
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.9, delay: 0.25 }}
              className="text-white poppinsSemiBold body-2 xl:h5"
            >
              Get involved
            </motion.h1>
            <a href="ABoutRAHU">
              {" "}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.25 }}
                className="text-white poppinsSemiBold body-2 xl:h5"
              >
                About us
              </motion.h1>
            </a>
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white opacity-85 poppinsSemiBold xl:body-1 justify-center items-center flex p-10"
          >
            Improving the health of young people
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Global;
