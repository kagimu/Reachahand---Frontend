import React from 'react'
import { animate, motion } from "framer-motion";
import home1 from "../../assets/Web 1920 – 180.png";
import home2 from "../../assets/Web 1920 – 23.jpg";
import home3 from "../../assets/Web 1920 – 24.jpg";

const Section1 = () => {
  return (
    <div>
      {/* <div className="flex flex-col w-[100%] text-left md:flex md:flex-col md:w-[100%] xl:h-[820px] xl:shrink-0 xl:mb-20 xl:grid xl:grid-rows-3 xl:grid-flow-col xl:gap-4 ">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easein",
                duration: 1,
              }}
              className="bg-[#0e2d5c] rounded-[30px] w-[100%] h-[100%] relative lg:row-span-3 lg:cols-span-2"
            >
              <img
                src={home1}
                alt="artboard"
                className="w-full h-full rounded-[30px] object-cover"
              />
              <p className="poppinsRegular text-white -mt-[55%] text-md md:body-1 absolute overflow-hidden lg:-mt-[50%] mx-14">
                We recognize that young people's concern can only be addressed
                by young people
              </p>
              <h1 className="poppinsBold text-white h1 -mt-[42%] ml-14 text-left leading-tight absolute lg:-mt-[40%] ">
                <span>We empower young</span> <br />
                <span>people in Uganda</span>
              </h1>
              <a href="GetInvolved">
                <button className="bg-white lg:-mt-[14%] body-1 -mt-[14%] text-darkBlue ml-14 py-2 px-6 md:py-3 md:px-8 rounded-[25px] absolute overflow-hidden poppinsSemiBold hover:bg-black hover:text-white hover:border-2 hover:border-white">
                  Get involved
                </button>
              </a>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easein",
                duration: 1,
              }}
              className="flex flex-col lg:grid lg:grid-flow-row lg:gap-4 mt-5 lg:mt-0 mb-10"
            >
              <div className="bg-[#0064e6] h-[300px] lg:h-[400px] rounded-[30px] items-baseline lg:mb-0">
                <img
                  src={home2}
                  alt="artboard"
                  className="w-[100%] h-[300px] mt-5 lg:mt-0 lg:h-[400px] rounded-[30px] object-contain xl:object-cover relative"
                />
                <div className="w-[100%] pb-10 absolute overflow-hidden -mt-[50%] lg:-mt-[17%]">
                  <p className="poppinsSemiBold text-white md:mt-[60px] mb-5 h3 px-10">
                    We inspire
                  </p>
                  <p className="poppinsRegular text-white body-1 text-left px-10">
                    RAHU inspires youth by introducing them
                    <br /> to diverse role models and mentors in fields
                    <br /> like medicine, education, theatre and creative
                    <br /> arts entrepreneurship
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easein",
                  duration: 1,
                }}
                className="grid grid-cols-2 gap-4 h-[360px] lg:h-[410px] rounded-[30px] mt-5 lg:mt-0"
              >
                <div className="bg-[#0a9ede] md:h-[360px] lg:h-[410px] rounded-[30px] text-justify">
                  <div className="px-5 lg:px-10 mt-6">
                    <div className="flex justify-start items-left">
                      <p className="poppinsRegular text-[90px] md:text-[100px] text-white">
                        20
                      </p>
                      <div className="flex flex-col mt-4">
                        <p className="poppinsRegular text-[40px] md:text-[50px] text-white">
                          +
                        </p>
                        <p className="poppinsRegular body-2 text-white mt-16 md:mt-20 mr-20 absolute">
                          programs
                        </p>
                      </div>
                    </div>
                    <p className="poppinsRegular text-sm md:body-1 text-left text-white">
                      Each of RAHU's programs, campaigns or project is tailored
                      to impact the youth.
                    </p>
                    <a href="Programs">
                      <motion.button
                        whileHover={{ scale: "1.05" }}
                        whileTap={{ scale: "-0.95", rotate: "2.5deg" }}
                        transition={{ duration: "0.125", ease: "easeInOut" }}
                        className=" mt-5 border-2 border-white body-1 text-white hover:text-white hover:bg-black hover:border-2 hover:border-white py-2 px-6 lg:py-3 lg:px-8 rounded-[25px] poppinsSemiBold"
                      >
                        Our Programs
                      </motion.button>
                    </a>
                  </div>
                </div>
                <div className=" relative rounded-[30px] h-[360px] lg:h-[410px]">
                  <img
                    src={home3}
                    alt="home"
                    className="absolute overflow-hidden rounded-[30px] h-[360px] lg:h-[410px] w-[100%] object-cover"
                  />
                  <p className="w-2/3 text-left  poppinsSemiBold px-10 mt-[93%] md:mt-80 absolute overflow-hidden ">
                    Our Events
                  </p>
                </div>
              </motion.div>
            </motion.div>
        </div> */}

        <div className="grid laptop-sm:grid-cols-2 mobile-sm:grid-cols-1 gap-4">
            {/* Get involved */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    x: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: 'easein',
                    duration: 1,
                }}
                className="bg-[#0e2d5c] mobile-sm:h-[80vh] laptop-sm:h-auto  grid grid-rows-2 rounded-3xl relative flex flex-col justify-center items-start p-10"
                style={{
                    backgroundImage: `url(${home1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <p className="poppinsRegular text-white text-md md:body-1 absolute bottom-[17%] p-10 tablet:bottom-[25%]">
                We recognize that young people's concern can only be addressed by young people
                </p>
                <h1 className="poppinsBold m-10 text-white h1 tablet:h2 absolute bottom-[30%] tablet:bottom-[40%] leading-tight">
                <span>We empower young</span>
                <br />
                <span>people in Uganda</span>
                </h1>
                <a href="GetInvolved" className="absolute bottom-10">
                <button className="bg-white text-darkBlue py-2 px-6 m-10 md:py-3 md:px-8 rounded-[25px] poppinsSemiBold hover:bg-black hover:text-white hover:border-2 hover:border-white">
                    Get involved
                </button>
                </a>
            </motion.div>

            <div className="grid laptop-lg:grid-rows-2 gap-4">
                {/* We inspire */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        x: { type: 'spring', stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: 'easein',
                        duration: 1,
                    }}
                    className="bg-[#0064e6] rounded-3xl relative flex flex-col justify-center items-start p-10"
                    style={{
                        backgroundImage: `url(${home2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="">
                        <p className="poppinsSemiBold text-white h3 mb-2">We inspire</p>
                        <p className="poppinsRegular text-white body-1">
                        RAHU inspires youth by introducing them to diverse role models and mentors in fields like medicine, education, theatre and creative arts entrepreneurship.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 0.4,
                    x: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: 'easein',
                    duration: 1,
                }}
                className="grid laptop-sm:grid-cols-2 tablet:grid-cols-2 mobile-sm:grid-cols-1 gap-4"
                >
                {/* Our programs */}
                <div className="bg-[#0a9ede] rounded-3xl relative flex flex-col justify-center items-start p-10">
                    <div className="flex items-start">
                    <p className="poppinsRegular text-[90px] md:text-[100px] text-white">20</p>
                    <div className="flex flex-col ml-4">
                        <p className="poppinsRegular text-[40px] md:text-[50px] text-white">+</p>
                        <p className="poppinsRegular body-2 text-white mt-4">programs</p>
                    </div>
                    </div>
                    <p className="poppinsRegular text-sm md:body-1 text-white mt-4">
                    Each of RAHU's programs, campaigns or project is tailored to impact the youth.
                    </p>
                    <a href="Programs" className="mt-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95, rotate: '2.5deg' }}
                        transition={{ duration: 0.125, ease: 'easeInOut' }}
                        className="border-2 border-white body-1 text-white hover:text-white hover:bg-black hover:border-2 hover:border-white py-2 px-6 lg:py-3 lg:px-8 rounded-[25px] poppinsSemiBold"
                    >
                        Our Programs
                    </motion.button>
                    </a>
                </div>

                {/* Our Events */}
                <div
                    className="bg-orange-500 rounded-3xl  flex flex-col justify-end items-start p-10 min-h-[30vh]"
                    style={{
                    backgroundImage: `url(${home3})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                >
                    <p className="w-2/3 text-left border text-center rounded-full p-3 bg-orange-300 poppinsSemiBold text-white">
                    Our Events
                    </p>
                </div>
                </motion.div>
            </div>
        </div>

    </div>
  )
}

export default Section1
