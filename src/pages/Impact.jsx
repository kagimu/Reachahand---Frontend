import React from "react";
import "@vidstack/react/player/styles/base.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { impacts } from "../constants";
import ImpactDetails from "../components/ImpactDetails";
import { motion } from "framer-motion";
import line from "../assets/Artboard – 5.png";
import top from "../assets/Group 157.png";
import cover from "../assets/paleblue.jpg";
import backdrop from "../assets/Artboard – 6.jpg";
import home6 from "../assets/Artboard – 14.jpg";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import program from "../assets/program-1.jpg";
import { Poster } from "@vidstack/react";
import { PlayButton } from "@vidstack/react";
import { PauseIcon, PlayIcon } from "@vidstack/react/icons";

const Impact = () => {
  return (
    <div>
      <div className="content-center text-center w-full">
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.2, delay: 0.25 }}
          src={backdrop}
          alt="backdrop"
          className="w-full relative lg:mt-9 mt-20 object-cover"
        />
        <div className="-mt-[40%] mb-10 absolute w-full">
          <NavBar />
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className=" content-center text-center w-full mb-20 "
        >
          <h1 className="h1 -mt-[22%] mb-4 lg:text-7xl poppinsSemiBold text-darkBlue leading-normal lg:-mt-[22%] absolute w-full">
            Our impacts
          </h1>
          <h3 className="xl:text-xl md:body-1 body-2 md:px-[6%] xl:px-0 -mt-[10%] lg:text-3xl lg:-mt-[16%] poppinsRegular text-opacity-80 leading-normal w-full text-darkBlue absolute">
            Each of RAHU's program, campaign and projects is
            <br /> tailored to impact nuggets of information
          </h3>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <img
            src={line}
            alt="line"
            className="w-full -mt-[4%] lg:-mt-40 object-cover relative"
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.25 }}
          className="w-full px-3 xl:px-20 rounded-[30px] mt-2 relative"
        >
          <img
            src={cover}
            alt="cover"
            className="w-full mt-0 xl:h-[600px] xl:object-cover rounded-[30px]"
          />
        </motion.div>
        <div className="absolute xl:h-[600px] justify-center items-center left-[2%] md:left-[5%] lg:left-[7%] xl:left-[10%]">
          <img
            src={top}
            alt="cover"
            className="w-full xl:p-7 -mt-[48.7%] sm:-mt-[48%] md:-mt-[49.5%] lg:-mt-[47%] xl:-mt-[49.3%] object-cover md:h-[400px] xl:h-[800px] z-100 justify-center float-right"
          />
        </div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-1 w-full px-5 lg:px-20 justify-items-center items-center mt-[10%] lg:mt-[2%]"
      >
        <div className="h-[250px] lg:h-[700px] w-full xl:mt-[2%]">
          <div className="text-black border-2 border-gray-600 w-[100%] h-[200px] md:[350px] lg:h-[700px] rounded-[30px] justify-items-center">
            <MediaPlayer
              className="w-full h-[200px] md:h-[350px] lg:h-[698px] rounded-[30px] bg-black"
              playsInline
              title="Sprite Fight"
              src="https://www.youtube.com/watch?v=r_ZXOoemDgs&pp=ygUKcmVhY2hhaGFuZA%3D%3D"
              load="eager"
            >
              <MediaProvider>
                <Poster
                  className="absolute object-cover inset-0 block h-full w-full bg-black rounded-md opacity-0 transition-opacity data-[visible]:opacity-90 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
                  src={program}
                  alt="Reachahand video"
                />
              </MediaProvider>
              <PlayButton className="group ring-sky-400 relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4">
                <PlayIcon
                  size={100}
                  className="justify-items-center relative bg-white rounded-full hidden group-data-[paused]:block"
                />
                <PauseIcon
                  size={100}
                  className="justify-items-center relative bg-white rounded-full group-data-[paused]:hidden"
                />
              </PlayButton>
            </MediaPlayer>
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
        className="flex flex-col lg:grid lg:grid-cols-1 w-full px-5 lg:px-20 justify-items-center items-center md:mt-40 lg:mt-20"
      >
        <div className="lg:flex lg:flex-cols-2 gap-6 lg:h-[90%] w-full lg:mb-10">
          <div className="bg-color-darkBlue text-white p-1 lg:p-0 lg:w-[40%] rounded-[30px] lg:pl-10 lg:pr-30 ">
            <p className="poppinsSemiBold h1 lg:text-7xl text-color-gold leading-normal text-center lg:text-left lg:mt-20">
              lets talk figures
            </p>
            <p className="body-1 p-4 text-center lg:text-left poppinsRegular md:w-full lg:text-2xl leading-normal lg:mt-5 lg:mb-20">
              RAHU inspires youth by introducing them to <br /> diverse role
              models and mentors in fields like <br /> medicine, education,
              theatre and creative arts entrepreneurship
            </p>
          </div>
          <div className="bg-color-gold text-white border-2 mt-5 lg:mt-0 border-gray-400 lg:w-[60%] justify-between rounded-[30px] p-5 lg:p-20">
            <div className="grid grid-cols-2 gap-8 lg:gap-6 justify-end md:ml-20 w-full">
              {impacts.map((impact) => (
                <ImpactDetails
                  key={impact.label}
                  word={impact.word}
                  total={impact.total}
                  label={impact.label}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-cols-3 gap-2 w-[100%] justify-center mb-[4%] rounded-[30px] px-5 lg:px-20 mt-10 lg:mt-[2%]">
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
          className="object-stretch xl:object-cover w-full relative rounded-[30px] h-[250px] xl:h-0"
        />
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-[80%] lg:w-[60%] content-center text-center justify-center items-center align-middle absolute lg:mt-[8%]"
        >
          <h1 className="xl:text-3xl h6 mt-6 lg:text-7xl text-white leading-15 poppinsSemiBold text-center lg:mt-10">
            Make more impact
            <br /> with us
          </h1>
          <h3 className="text-sm lg:text-2xl leading-tight mt-1 text-white lg:leading-normal poppinsRegular text-center lg:mt-5">
            At reach a hand we believe in the power of collaboration, you
            partner <br /> with some of our programs or you can volunteer
          </h3>

          <motion.button
            whileHover={{ scale: "1.00" }}
            whileTap={{ scale: "0.95", rotate: "2.5deg" }}
            transition={{ duration: "0.125", ease: "easeInOut" }}
            className="poppinsSemiBold px-8 py-2 lg:px-10 lg:py-4 bg-black text-white mt-5 lg:mt-10 mb-10 rounded-[30px] lg:text-lg justify-center hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2"
          >
            Get Involved
          </motion.button>
        </motion.div>
      </div>

      <div className="mt-10 xl:px-10">
        <Footer />
      </div>
    </div>
  );
};

export default Impact;
