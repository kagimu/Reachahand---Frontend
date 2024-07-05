import React from "react";
import user from "../assets/peer-educs.jpg";
import user1 from "../assets/job.jpg";
import user3 from "../assets/teamcover.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import line from "../assets/Artboard – 5.png";
import cover from "../assets/red.jpg";
import top from "../assets/LJ4B5571-copy.png";
import backdrop from "../assets/Artboard – 6.jpg";
import home6 from "../assets/Artboard – 9.jpg";
import back0 from "../assets/Artboard – 10.jpg";
import back from "../assets/Artboard – 11.jpg";

const GetInvolved = () => {
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
          className="w-full relative mt-9"
        />
        <div className="-mt-[38%] mb-10 absolute w-full">
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
          className=" content-center text-center w-full "
        >
          <div className="text-7xl poppinsSemiBold text-darkBlue leading-normal -mt-[22%] absolute w-full">
            <div className=" text-center ml-[35%]">
              <h1 className="flex text-7xl poppinsSemiBold leading-normal text-center">
                Get
                <span className="flex justify-items-center items-center px-4 p-2">
                  <img
                    src={user}
                    alt="round"
                    width={70}
                    className="z-10 h-[70px] border-4 border-opacity-30 border-color-darkBlue rounded-full object-cover -mr-6"
                  />
                  <img
                    src={user1}
                    alt="round"
                    width={70}
                    className="z-20 h-[70px] border-4 border-opacity-30 border-color-darkBlue object-cover rounded-full -mr-6"
                  />
                  <img
                    src={user3}
                    alt="round"
                    width={70}
                    className="z-30 h-[70px] border-4 border-opacity-30 border-color-darkBlue object-cover rounded-full"
                  />
                </span>
                involved
              </h1>
            </div>
          </div>
          <h3 className="text-3xl -mt-[16%] poppinsRegular font-semibold text-opacity-80 leading-normal w-full text-darkBlue absolute">
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
          className=""
        >
          <img src={line} alt="line" className="w-full -mt-40 relative" />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.25 }}
          className="w-full px-20 rounded-[30px] mt-2 relative"
        >
          <img
            src={cover}
            alt="cover"
            className="w-full mt-0 object-cover lg:h-[600px] rounded-[30px]"
          />
        </motion.div>
        <div className="absolute lg:h-[600px] justify-center items-center lg:left-[5%]">
          <img
            src={top}
            alt="cover"
            className="w-full lg:-mt-[45.6%] lg:h-[800px] z-100 items-center"
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
        className="grid grid-cols-1 w-full justify-items-center items-center mt-[8%]"
      >
        <div className="flex flex-cols-3 gap-2 w-full justify-center mb-[8%] rounded-[30px] px-20">
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
            className=" object-cover w-full relative rounded-[30px]"
          />
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className=" w-[60%] content-center text-center justify-center items-center align-middle absolute mt-[8%]"
          >
            <h1 className="text-7xl text-darkBlue leading-15 poppinsSemiBold text-center mt-10">
              Make more impact
              <br /> with us
            </h1>
            <h3 className="text-2xl text-darkBlue leading-normal poppinsRegular text-center mt-5">
              At reach a hand we believe in the power of collaboration, you
              partner <br /> with some of our programs or you can volunteer
            </h3>

            <a href="PartnerForm">
              <motion.button
                whileHover={{ scale: "1.00" }}
                whileTap={{ scale: "0.95", rotate: "2.5deg" }}
                transition={{ duration: "0.125", ease: "easeInOut" }}
                className="poppinsSemiBold px-20 py-4 bg-white text-darkBlue mt-10 mb-10 rounded-[30px] text-xl justify-center hover:bg-white hover:text-darkBlue hover:text-xl hover:border-darkMaroon hover:border-2"
              >
                partner
              </motion.button>
            </a>
          </motion.div>
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
        className="grid grid-cols-2 gap-10 w-full h-full px-20 justify-items-center items-center mb-20 "
      >
        <div className="text-black w-full rounded-[30px]">
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            src={back0}
            alt="HOME6"
            className=" object-cover w-full relative rounded-[30px]"
          />
          <p className="poppinsBold text-white text-6xl leading-normal text-left absolute px-20 -mt-[26%]">
            Donating
          </p>
          <p className="text-left poppinsRegular text-white text-3xl px-20 leading-normal absolute -mt-[20%] mb-10">
            RAHU inspires youth by introducing them to <br /> diverse role
            models and mentors in fields like <br /> medicine, education,
            theatre and creative arts
            <br /> entrepreneurship
          </p>
          <motion.button
            whileHover={{ scale: "1.05" }}
            whileTap={{ scale: "0.95", rotate: "2.5deg" }}
            transition={{ duration: "0.125", ease: "easeInOut" }}
            className="poppinsRegular px-14 py-2 ml-20 -mt-[6%] absolute text-white border-2 border-white mb-20 rounded-[30px] text-xl justify-center hover:bg-white hover:border-gold hover:text-darkBlue hover:border-2"
          >
            Donate
          </motion.button>
        </div>
        <div className="text-black w-full rounded-[30px]">
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            src={back}
            alt="HOME6"
            className=" object-cover w-full relative rounded-[30px] h-[620px]"
          />
          <p className="poppinsBold text-white text-6xl leading-normal text-left absolute px-20 -mt-[26%]">
            Volunteer
          </p>
          <p className="text-left poppinsRegular text-3xl text-white leading-normal absolute -mt-[20%] mb-20 px-20">
            You can join one of our programs <br /> and volunteer, impact young
            people
            <br /> with us
          </p>
          <motion.button
            whileHover={{ scale: "1.05" }}
            whileTap={{ scale: "0.95", rotate: "2.5deg" }}
            transition={{ duration: "0.125", ease: "easeInOut" }}
            className="poppinsRegular px-14 py-2 ml-20 text-white border-2 absolute -mt-[6%] border-white mb-20 rounded-[30px] text-xl justify-center hover:bg-white hover:text-color-darkBlue hover:border-color-darkMaroon hover:border-2"
          >
            Get involved
          </motion.button>
        </div>
      </motion.div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default GetInvolved;
