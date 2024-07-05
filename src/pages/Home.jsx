import React from "react";
import { animate, motion } from "framer-motion";
import ImpactCard from "../components/ImpactCard";
import { impacts, programs } from "../constants";
import round from "../assets/round.png";
import ProgramCard from "../components/ProgramCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import home1 from "../assets/Web 1920 – 180.png";
import home2 from "../assets/Web 1920 – 23.jpg";
import home3 from "../assets/Web 1920 – 24.jpg";
import home4 from "../assets/Artboard – 2.jpg";
import home5 from "../assets/Web 1920 – 25.jpg";
import home6 from "../assets/Artboard – 3.jpg";
import happening from "../assets/happening-1.jpg";
import arrow from "../assets/icons/featherIcons/arrow-up-right.svg";

const Home = () => {
  return (
    <div className="w-full content-center">
      <div className="mb-40">
        <NavBar />
      </div>
      <div className="w-full top-[20%] lg:px-0">
        <div className="container">
          <div className="flex flex-col w-full text-left md:flex md:flex-col md:w-full xl:h-[820px] xl:shrink-0 xl:mb-20 xl:grid xl:grid-rows-3 xl:grid-flow-col xl:gap-4 ">
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
              className="bg-[#0e2d5c] rounded-[30px] w-full h-[100%] relative lg:row-span-3 lg:cols-span-2"
            >
              <img
                src={home1}
                alt="artboard"
                className="w-full h-full rounded-[30px] object-cover"
              />
              <p className="poppinsRegular text-white -mt-[55%] h2 body-1 absolute lg:-mt-[50%] px-14">
                We recognize that young people's concern can <br /> only be
                addressed by young people
              </p>
              <h1 className="poppinsSemiBold text-white h1 -mt-[42%] ml-14 text-left leading-tight absolute lg:-mt-[40%] ">
                <span>We empower young</span> <br />
                <span>people in Uganda</span>
              </h1>
              <a href="GetInvolved">
                <button className="bg-white lg:-mt-[14%] body-1 -mt-[14%] text-darkBlue ml-14 py-2 px-6 md:py-3 md:px-8 rounded-[25px] absolute poppinsSemiBold hover:bg-black hover:text-white hover:border-2 hover:border-white">
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
              <div className="bg-[#0064e6] h-[400px] rounded-[30px] items-baseline lg:mb-0">
                <img
                  src={home2}
                  alt="artboard"
                  className="w-full h-[400px] rounded-[30px] object-cover relative"
                />
                <div className="w-full pb-10 absolute -mt-[50%] lg:-mt-[17%]">
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
                <div className="bg-[#0a9ede] h-[360px] lg:h-[410px] rounded-[30px] text-justify">
                  <div className="px-10 mt-6">
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
                    <p className="poppinsRegular body-1 text-left text-white">
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
                    className="absolute rounded-[30px] h-[360px] lg:h-[410px] w-full object-cover"
                  />
                  <p className="w-2/3 text-left body-1 poppinsSemiBold px-10 mt-[93%] md:mt-80 absolute ">
                    Our Events
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easein",
              duration: 1,
            }}
            className="w-full mx-auto h-[680px] lg:h-[700px] mt-10 lg:mt-20 bg-[#d91c5c] rounded-[25px]"
          >
            <img
              src={home4}
              alt="impact"
              className="w-full relative lg:object-cover object-contain text-center lg:h-[900px] h-[1000px] rounded-[30px]"
            />

            <div className="flex flex-col w-full absolute -mt-[92%] lg:mt-0 lg:flex lg:flex-1 lg:flex-row lg:text-left">
              <div className="pr-[40%] w-full mx-auto justify-center absolute -mt-[20%] lg:-mt-[23%]">
                <motion.h1
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.4,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easein",
                    duration: 1,
                  }}
                  className="poppinsBold h1 text-white text-center top-2 lg:top-0 ml-20 lg:pt-20 lg:ml-20 -mt-[20%] absolute"
                >
                  Our impact
                </motion.h1>
                <motion.p
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easein",
                    duration: 1,
                  }}
                  className="lg:flex poppinsRegular text-white leading-normal text-center xl:text-left body-1 pr-40 lg:pr-[40%] -mt-20 lg:h5 lg:ml-20 lg:-mt-60 absolute"
                >
                  RAHU inspires youth by introducing them to diverse role models
                  and mentors in fields like medicine, education, theatre and
                  creative arts entrepreneurship
                </motion.p>
                <div className="mt-20 grid grid-cols-2 gap-2 md:gap-4 lg:gap-2 xl:gap-2 w-[70%] md:pl-[15%] md:mt-10 lg:pl-40 lg:-mt-[8%] absolute">
                  {impacts.map((impact) => (
                    <ImpactCard
                      key={impact.label}
                      total={impact.total}
                      label={impact.label}
                    />
                  ))}
                </div>
                <motion.button
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.3,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easein",
                    duration: 1,
                  }}
                  className="py-2 px-6 xl:py-3 xl:px-8 mt-[6%] md:mt-[50%] lg:mt-[12%] border-2 ml-[15%] md:ml-[10%] lg:ml-40 body-1 border-white absolute rounded-[25px] poppinsSemiBold text-white"
                >
                  Learn more
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.2,
            }}
            className="mt-20 p-5 lg:mt-[20%] w-full h-[1700px] lg:h-[800px] bg-[#f2f2f2] lg:p-5 px-10 rounded-[30px] lg:text-start mb-40 lg:mb-0"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="h1 text-left text-black poppinsBold mt-10 mb-10 lg:mb-0 lg:mt-0"
            >
              What's happening at RAHU
            </motion.h1>
            <div className="md:flex md:flex-col lg:grid lg:grid-cols-3 lg:gap-6 w-full lg:h-[620px] lg:mt-10">
              <div className="lg:ml-12 px-4 rounded-[30px]">
                <div className="flex items-center w-full align-middle lg:h-[300px] bg-gray-600 rounded-[30px]">
                  <img
                    src={happening}
                    alt="tile"
                    className="rounded-[30px] w-full h-[300px] object-cover relative"
                  />
                  <button className="absolute mt-60 ml-5 body-1 text-white backdrop-blur-md poppinsRegular text-md px-6 py-2 rounded-[30px]">
                    Events
                  </button>
                </div>
                <p className="poppinsRegular text-black leading-normal body-1 mt-5 hover:text-color-gold cursor-pointer">
                  A peer educator affiliated with Nyaruhandagazi Health III
                  Centre...
                </p>

                <div className="flex mt-10 lg:mt-40 justify-between items-center">
                  <p className="poppinsRegular text-black underline body-2 hover:text-gray-600 cursor-pointer">
                    Read more
                  </p>

                  <img
                    src={arrow}
                    alt="user"
                    width={40}
                    height={40}
                    className="bg-white rounded-full"
                  />
                </div>
              </div>
              <div className="rounded-[30px] mt-10 lg:mt-0 h-[300px] md:h-[300px] xl:h-[620px]">
                <img
                  src={home5}
                  alt="back"
                  className="relative rounded-[30px] w-full"
                />
                <div className="-mt-[28%] lg:-mt-[28%]">
                  <button className="bg-white -mt-[48%] lg:-mt-[18%]  ml-8 absolute rounded-[30px] gap-4 px-6 py-2 justify-start text-left  text-gray-700 flex  hover:border-black hover:border-2">
                    <img
                      src={round}
                      alt="face"
                      width={45}
                      height={70}
                      className="rounded-[10px] object-contain"
                    />
                    <div>
                      <span className="poppinsRegular body-2">
                        Peer educator
                      </span>
                      <br />
                      <span className="body-1 poppinsSemiBold">
                        Benson Muhindo
                      </span>
                    </div>
                  </button>

                  <h2 className="poppinsSemiBold absolute body-1 -mt-[26%] lg:text-3xl lg:-mt-[12%] ml-10 hover:text-white cursor-pointer">
                    What I Did Next...
                  </h2>
                  <h3 className="absolute poppinsRegular body-1 -mt-[22%] pr-20 lg:text-2xl ml-10 lg:-mt-[9%] lg:w-[25%] leading-normal hover:text-white cursor-pointer">
                    A peer educator affiliated with Nyaruhandagazi Health III
                    Centre...
                  </h3>
                  <p className="absolute -mt-20 poppinsRegular ml-10 text-black underline body-2 hover:text-white cursor-pointer">
                    Read more
                  </p>
                </div>
              </div>
              <div className="-mt-[30%] flex flex-col lg:mt-0 lg:grid lg:grid-flow-row gap-4 w-full h-[300px]">
                <div className="bg-[#658dc0] rounded-[30px] h-[300px] mb-10 lg:mb-0 lg:h-[400px]">
                  <button className="bg-white mt-7 lg:mt-[9%] ml-8 border-2 border-white rounded-[30px] gap-4 px-6 py-1 lg:py-2 justify-start text-left text-gray-700 flex hover:border-green hover:border-2">
                    <img
                      src={round}
                      alt="face"
                      width={45}
                      height={70}
                      className="rounded-[10px] object-contain"
                    />
                    <div>
                      <span className="poppinsRegular body-2">
                        Peer educator
                      </span>
                      <br />
                      <span className="body-1 poppinsSemiBold">
                        Benson Muhindo
                      </span>
                    </div>
                  </button>

                  <h2 className="poppinsSemiBold body-1 mt-5 lg:mt-10 ml-10 text-white hover:text-color-green cursor-pointer">
                    Reflecting on 35
                  </h2>
                  <h3 className="ml-10 poppinsRegular body-1 mt-5 leading-normal text-white  hover:text-color-green cursor-pointer">
                    A peer educator affiliated with Nyaruhandagazi Health III
                    Centre...
                  </h3>
                  <div className="flex mt-5 mb-5 justify-between items-center">
                    <p className="poppinsRegular ml-10 underline body-2 text-white hover:text-gray-500 cursor-pointer">
                      Read more
                    </p>
                    <img
                      src={arrow}
                      alt="user"
                      width={40}
                      height={40}
                      className="mr-10 bg-white rounded-full"
                    />
                  </div>
                </div>
                <div className="bg-color-green rounded-[30px] h-[200px]">
                  <button className=" bg-white mt-5 ml-10 rounded-[30px] gap-4 px-4 py-2 justify-start text-left body-1 poppinsRegular text-n-7 flex  hover:text-color-darkMaroon hover:border-darkMaroon hover:border-2  cursor-pointer">
                    Blogs
                  </button>
                  <p className="poppinsRegular body-1 pl-5 lg:pl-8 xl:pl-10 p-10 mt-10 hover:text-white cursor-pointer">
                    {" "}
                    Before joining peer education
                  </p>
                  <img
                    src={arrow}
                    alt="user"
                    width={40}
                    height={40}
                    className="lg:ml-[22%] ml-[70%] bg-white rounded-full absolute -mt-20"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="-mt-10 lg:mt-60 text-center justify-center items-center w-full">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="h1 text-black poppinsBold"
            >
              Featured programs
            </motion.h1>
            <div className="grid grid-cols-1 gap-4 w-full mt-10">
              {programs.map((program) => (
                <ProgramCard
                  key={program.title}
                  title={program.title}
                  imgUrl={program.imgUrl}
                  subtext={program.subtext}
                  icon={program.icon}
                />
              ))}
            </div>
            <a href="/Programs">
              <motion.button
                whileHover={{ scale: "1.00" }}
                whileTap={{ scale: "-0.95", rotate: "2.5deg" }}
                transition={{ duration: "0.125", ease: "easeInOut" }}
                className="poppinsRegular px-2 py-2 lg:px-4 lg:py-4 justify-center border-2 border-color-darkBlue mt-10 lg:mt-20 rounded-[30px] body-1 hover:bg-color-darkBlue hover:text-white hover:border-color-lightBlue hover:border-4"
              >
                See all programs
              </motion.button>
            </a>
          </div>

          <div className="flex flex-cols-3 gap-2 w-full justify-center mt-40 lg:mt-[6%] mb-[8%] rounded-[30px] lg:p-10">
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              src={home6}
              alt="HOME6"
              className="object-cover w-full relative lg:h-full h-[300px] rounded-[30px]"
            />
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="lg:w-[60%] content-center text-center justify-center items-center align-middle absolute mt-[8%]"
            >
              <h1 className="h1 text-black leading-normal poppinsSemiBold text-center lg:mt-10">
                We can't do this alone
              </h1>
              <h3 className="h5 text-black transition-colors leading-normal poppinsRegular text-center px-10">
                At reach a hand we believe in the power of collaboration, you
                partner <br /> with some of our programs or you can volunteer
              </h3>

              <a href="GetInvolved">
                <motion.button
                  whileHover={{ scale: "1.00" }}
                  whileTap={{ scale: "0.95", rotate: "2.5deg" }}
                  transition={{ duration: "0.125", ease: "easeInOut" }}
                  className="poppinsSemiBold px-6 py-2 lg:px-10 lg:py-4 bg-black text-white mt-10 mb-10 rounded-[30px] body-1 justify-center hover:bg-white hover:text-color-darkBlue hover:border-color-darkMaroon hover:border-2"
                >
                  Get Involved
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 xl:px-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
