import React from "react";
import { animate, motion } from "framer-motion";
import { impacts, programs } from "../constants";
import round from "../assets/round.png";
import ProgramCard from "../components/ProgramCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import home5 from "../assets/Web 1920 – 25.jpg";
import happening from "../assets/happening-1.jpg";
import arrow from "../assets/icons/featherIcons/arrow-up-right.svg";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";

const Home = () => {
  return (
    <div className="w-full grid grid-cols-1">
      <div className="mb-40 w-full">
        <NavBar />
      </div>
      {/* <div className="bg-red-500 laptop-sm:bg-blue-500 bg-red-500 ">
        Responsive Div
      </div> */}

      <div className="w-full lg:mx-0">
        <div className="mx-10 ">
          <Section1/>
          <Section2/>

          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.2,
            }}
            className="mt-20 lg:mt-[20%] w-[100%] h-[1700px] lg:h-[800px] bg-[#f2f2f2] lg:p-5 px-10 rounded-[30px] lg:text-start mb-40 lg:mb-0"
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
            <div className="md:flex md:flex-col lg:grid lg:grid-cols-3 lg:gap-6 w-[100%] lg:h-[620px] lg:mt-10">
              <div className="lg:ml-12 px-4 rounded-[30px]">
                <div className="flex items-center w-[100%] align-middle lg:h-[300px] bg-gray-600 rounded-[30px]">
                  <img
                    src={happening}
                    alt="tile"
                    className="rounded-[30px] w-[100%] h-[300px] object-cover relative"
                  />
                  <button className="absolute overflow-hidden mt-60 ml-5 body-1 text-white backdrop-blur-md poppinsRegular text-md px-6 py-2 rounded-[30px]">
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
                  className="relative rounded-[30px] w-[100%]"
                />
                <div className="-mt-[28%] lg:-mt-[28%]">
                  <button className="bg-white -mt-[48%] lg:-mt-[18%]  ml-8 absolute overflow-hidden rounded-[30px] gap-4 px-6 py-2 justify-start text-left  text-gray-700 flex  hover:border-black hover:border-2">
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

                  <h2 className="poppinsSemiBold absolute overflow-hidden body-1 -mt-[26%] lg:text-3xl lg:-mt-[12%] ml-10 hover:text-white cursor-pointer">
                    What I Did Next...
                  </h2>
                  <h3 className="absolute overflow-hidden poppinsRegular body-1 -mt-[22%] mr-20 lg:text-2xl ml-10 lg:-mt-[9%] lg:w-[25%] leading-normal hover:text-white cursor-pointer">
                    A peer educator affiliated with Nyaruhandagazi Health III
                    Centre...
                  </h3>
                  <p className="absolute overflow-hidden -mt-20 poppinsRegular ml-10 text-black underline body-2 hover:text-white cursor-pointer">
                    Read more
                  </p>
                </div>
              </div>
              <div className="mt-40 flex flex-col lg:mt-0 lg:grid lg:grid-flow-row gap-4 w-[100%] h-[300px]">
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
                  <p className="poppinsRegular body-1 ml-5 lg:ml-8 xl:ml-10 p-10 mt-10 hover:text-white cursor-pointer">
                    {" "}
                    Before joining peer education
                  </p>
                  <img
                    src={arrow}
                    alt="user"
                    width={40}
                    height={40}
                    className="lg:ml-[22%] ml-[58%] bg-white rounded-full absolute overflow-hidden -mt-20"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="-mt-10 lg:mt-60 text-center justify-center items-center w-[100%]">
            <motion.h1
              // variants={{
              //   hidden: { opacity: 0, y: 75 },
              //   visible: { opacity: 1, y: 0 },
              // }}
              // initial="hidden"
              // whileInView="visible"
              // transition={{ duration: 0.5, delay: 0.25 }}
              className="h1 text-black poppinsBold"
            >
              Featured programs
            </motion.h1>
            <div className="grid grid-cols-1 gap-4 w-[100%] mt-10">
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
                // whileHover={{ scale: "1.00" }}
                // whileTap={{ scale: "-0.95", rotate: "2.5deg" }}
                // transition={{ duration: "0.125", ease: "easeInOut" }}
                className="poppinsRegular px-2 py-2 lg:px-4 lg:py-4 justify-center border-2 border-color-darkBlue mt-10 lg:mt-20 rounded-[30px] body-1 hover:bg-color-darkBlue hover:text-white hover:border-color-lightBlue hover:border-4"
              >
                See all programs
              </motion.button>
            </a>
          </div>

            <Section3/>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
