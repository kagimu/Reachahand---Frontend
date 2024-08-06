import React from "react";
import { motion } from "framer-motion";
import rahu from "../assets/logo-global.png";
import clinic from "../assets/images/DSC09024.jpg";
import { IoMdMail } from "react-icons/io";
import right from "../assets/images/DSC09244.jpg";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import first from "../assets/images/DSC092172.jpg";
import second from "../assets/images/DSC0904722.jpg";
import drop from "../assets/elements/backgrounds (6).png";
import lower from "../assets/elements/backgrounds (7).png";
import line from "../assets/elements/backgrounds (1).png";
import top from "../assets/elements/backgrounds (5).png";

const GetRAHU = () => {
  return (
    <div>
      {" "}
      <div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2, delay: 0.25 }}
        className="w-full"
      >
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          src={top}
          className="relative w-full object-cover "
        />
        <div className="absolute xl:-mt-[65%]">
          <div className="flex w-full justify-between xl:px-20 xl:py-10">
            <a href="Global">
              <img src={rahu} className="w-full xl:w-[250px] object-contain " />
            </a>

            <a href="GetInvolved">
              <button className="poppinsSemiBold bg-white rounded-[30px] py-2 px-8 text-md lg:body-1 text-color-darkBlue border-2 border-color-darkBlue">
                Donate
              </button>
            </a>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            className="xl:mt-40"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.5 }}
              className="poppinsBold flex justify-start text-white w-full h4 xl:text-7xl xl:pl-[300px] xl:pr-[50%]"
            >
              Improving the
              <br /> health of young people.
            </motion.h1>
            <h3 className="poppinsSemiBold flex justify-start text-color-paleWhite opacity-85 mt-10 body-2 lg:body-1 xl:pl-[300px] xl:pr-[56%]">
              Our mission is to empower young people in Uganda with access to
              vital sexula reproductive health services, HIV/AIDS awareness and
              life skills to lead healthy reproductive lives
            </h3>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.5 }}
        className="lg:px-[15%] lg:mt-40 w-full "
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.2, delay: 0.25 }}
          className="poppinsSemiBold lg:h1 h4"
        >
          Our Programs
        </motion.h1>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="lg:grid lg:grid-cols-2 lg:gap-12 lg:mt-20 lg:pb-20 w-full"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, delay: 0.25 }}
            className="w-[100%]"
          >
            <div className="flex flex-cols-2 mt-10">
              <div>
                <IoMdMail
                  size={80}
                  className="fill-current text-color-darkMaroon w-10 lg:w-[200px]"
                />
              </div>
              <div>
                <h1 className="poppinsSemiBold text-color-darkBlue h5">
                  Sexual Reproductive Health
                </h1>
                <p className="poppinsRegular text-black body-1">
                  Providing comprehensive education and services to promote self
                  practices and prevent unintended pregnancies and sexually
                  transmitted diseases.
                </p>
              </div>
            </div>
            <div className="flex flex-cols-2 mt-20">
              <div>
                <FaHandHoldingHeart
                  size={80}
                  className="fill-current text-color-lightBlue w-10 lg:w-[200px]"
                />
              </div>
              <div>
                <h1 className="poppinsSemiBold text-color-darkBlue h5">
                  HIV/AIDS Awareness & Prevention
                </h1>
                <p className="poppinsRegular text-black body-1">
                  Raising awareness and providing resources to prevent the
                  spread of HIV/AIDS among the adolescents and young adults
                </p>
              </div>
            </div>
            <div className="flex flex-cols-2 mt-20">
              <div>
                <TbBulbFilled
                  size={100}
                  className="fill-current text-color-darkMaroon w-10 lg:w-[200px]"
                />
              </div>
              <div>
                <h1 className="poppinsSemiBold text-color-darkBlue h5">
                  Life and Entrepreneurship Skills
                </h1>
                <p className="poppinsRegular text-black body-1">
                  Providing comprehensive education and services to promote self
                  practices and prevent unintended pregnancies and sexually
                  transmitted diseases.
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
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className=""
          >
            <img
              src={right}
              className="lg:h-full lg:w-full object-cover rounded-tl-[180px] rounded-br-[180px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="justify-center items-center"
      >
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4, delay: 0.25 }}
          src={drop}
          className="h-full w-full"
        />
        <div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute lg:-mt-[55%] justify-center items-center w-full"
        >
          <h1 className="poppinsSemiBold h1 text-black text-center lg:ml-[1%]">
            We strive to make a difference
          </h1>
          <h3 className="poppinsRegular opacity-85 body-1 lg:text-2xl text-center lg:px-[20%] pb-20">
            At Reach A Hand Clinic, we strive to make a real difference. Here
            are some of the ways we've impacted the lives of young people in
            Uganda:
          </h3>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:flex lg:flex-cols-3 lg:gap-10 lg:px-[15%] justify-between w-full mt-20"
          >
            <div>
              <h1 className="poppinsBold h1 text-color-lightBlue">
                1.4 Million
              </h1>
              <p className="poppinsRegular body-1 text-center ">
                14 million people reached with
                <br /> HIV/AIDS awareness campaigns
              </p>
            </div>
            <div>
              <h1 className="poppinsBold h1 text-color-lightBlue text-center">
                50,000
              </h1>
              <p className="poppinsRegular body-1 text-center ">
                50000 adolescents provided
                <br /> with life skills training
              </p>
            </div>
            <div>
              <h1 className="poppinsBold h1 text-color-lightBlue text-center">
                250,000
              </h1>
              <p className="poppinsRegular body-1 text-center">
                250,000 young people educated
                <br /> on Sexual Reproductive Health
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-40 justify-center items-center flex pb-40"
          >
            <img
              src={clinic}
              className="rounded-[140px] w-full mx-[12%] lg:h-[650px] object-cover"
            />
          </motion.div>

          <div className="mt-20 px-[15%] flex flex-col items-center justify-center">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="poppinsSemiBold h1 text-center"
            >
              Stories of Change
            </motion.h1>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="lg:flex lg:flex-cols-2 lg:gap-10 lg:ml-20 justify-center items-center mt-20"
            >
              <div className="lg:pr-40 w-1/2 text-center flex flex-col items-center justify-center h-full">
                <img
                  src={first}
                  className="rounded-[170px] lg:w-[450px] lg:h-[450px] object-cover mb-4"
                />
                <h1 className="h3 poppinsSemiBold mb-2">Meet James</h1>
                <p className="poppinsRegular body-1">
                  James, a young Entrepreneur explains how life skills training
                  from RAHG Clinic helped him start his own business
                </p>
              </div>

              <div className="lg:pr-40 w-1/2 text-center flex flex-col items-center justify-center h-full">
                <img
                  src={second}
                  className="rounded-[170px] lg:w-[450px] lg:h-[450px] object-cover mb-4 lg:mt-6"
                />
                <h1 className="h3 poppinsSemiBold mb-2">Meet Amina</h1>
                <p className="poppinsRegular body-1">
                  Amina, a 16-year-old from Rural Uganda, shares how RAHG
                  Clinic's programs have empowered her to stay in school and
                  avoid early marriage
                </p>
              </div>
            </motion.div>
          </div>
          <div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              src={lower}
              className="w-full"
            />

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.25 }}
              className="xl:ml-[18%] xl:-mt-[48%] absolute w-[65%] rounded-[90px] bg-white"
            >
              <div className="lg:flex lg:flex-cols-2 lg:gap-10 xl:pt-40 xl:pl-20 xl:pb-20 ">
                <div className="w-[60%]">
                  <h1 className="poppinsSemiBold h1 ">Get involved</h1>
                  <p className="poppinsRegular body-1 mt-10 pr-20">
                    Your support is crucial in helping us reach our goals. By{" "}
                    donating to Reach A Hand Global Clinic, you contribute to a
                    healthier, more informed and empowered youth in Uganda
                  </p>
                  <button className="py-2 px-4 xl:px-6 xl:mt-10 bg-color-darkBlue text-white body-2 lg:body-1 rounded-3xl">
                    Learn more
                  </button>
                </div>
                <div className="w-[40%]"></div>
              </div>
              <img
                src={line}
                className="w-full object-contain rounded-[90px]"
              />
            </motion.div>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-color-darkBlue text-left w-full xl:h-[500px] xl:px-40 justify-center items-center"
          >
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              src={rahu}
              className="w-full xl:w-[250px] object-contain xl:pt-40 "
            />
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.25 }}
              className="poppinsRegular body-2 md:body-1 lg:text-2xl lg:mt-5 text-white"
            >
              Improving the health
              <br /> of young people
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetRAHU;
