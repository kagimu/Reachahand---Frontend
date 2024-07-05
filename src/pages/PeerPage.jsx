import React from "react";
import logo from "../assets/rahu icon.png";
import user from "../assets/icons/Group 53.svg";
import message from "../assets/icons/mesage.svg";
import { motion } from "framer-motion";
import { postsIcons, socialMedia } from "../constants";
import { ChatEngine } from "react-chat-engine";
import KhatEngine from "./KhatEngine";

const PeerPage = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
      className="bg-[#00274e] h-[130vh] w-full flex xl:flex-col flex-col max-w-1440"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-10 mb-10"
      >
        <motion.header
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="px-10 w-full "
        >
          <nav className="flex justify-between items-center w-full px-10 ">
            <a href="/">
              <motion.img
                whileHover={{ scale: "1.05" }}
                whileTap={{ scale: "0.95", rotate: "2.5deg" }}
                transition={{ duration: "0.125", ease: "easeInOut" }}
                src={logo}
                alt="logo"
                width={80}
                height={80}
              />
            </a>

            <div className="flex flex-1 justify-center gap-10 max-lg:hidden poppinsRegular text-white text-[20px]">
              <h1 className="text-3xl poppinsSemiBold leading-normal">
                Peer Educators Academy
              </h1>
            </div>
            <div className="flex justify-center items-center gap-14">
              <img src={message} alt="user" width={30} className="white" />
              <img src={user} alt="user" width={40} />
            </div>
          </nav>
        </motion.header>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.25 }}
        className=" flex flex-cols-2 gap-6 h-[700px] w-full mb-10 px-40"
      >
        <motion.div className="grid grid-flow-row gap-6 h-[700px] w-[25%]">
          <div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9, delay: 0.25 }}
            className="bg-white h-[560px] rounded-[30px] p-10"
          >
            <div className="flex gap-6 text-center justify-items-center">
              <img src={user} alt="user" width={100} />
              <div className="text-center mt-6">
                <h3 className="poppinsRegular text-xl leading-normal font-bold">
                  Sarah Anne
                </h3>
                <p className="poppinsRegular text-lg leading-normal text-green">
                  Available
                </p>
              </div>
            </div>
            <p className="poppinsRegular font-bold text-xl">About me</p>
            <p className="poppinsRegular font-bold text-lg text-gray-500 mt-2">
              Each of RAHU's program, campaign and projects are tailored <br />{" "}
              to impact nuggets of information
            </p>
            <p className="poppinsRegular text-xl mt-5">
              <span className="poppinsRegular font-bold text-xl mr-6">
                Mobile:
              </span>
              <span className="poppinsRegular text-lg text-gray-600 mr-6">
                +256750986753
              </span>
            </p>
            <p className="poppinsRegular text-xl">
              <span className="poppinsRegular font-bold text-xl mr-6">
                Email:
              </span>
              <span className="poppinsRegular text-lg text-gray-600 mr-10">
                +emma@gmail.com
              </span>
            </p>
            <motion.button
              whileHover={{ scale: "1.05" }}
              whileTap={{ scale: "-0.95", rotate: "2.5deg" }}
              transition={{ duration: "0.125", ease: "easeInOut" }}
              className="bg-black text-white py-3 px-8 mt-6 rounded-[25px] text-lg poppinsSemiBold hover:bg-black hover:text-lg hover:text-white hover:border-2 hover:border-white translate-y-2"
            >
              Post Article
            </motion.button>
            <div className="flex items-center gap-5 mt-10">
              {socialMedia.map((item) => (
                <div className="flex flex-row justify-between">
                  <img src={item.imgUrl} alt="logo" width={40} />
                </div>
              ))}
            </div>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.25 }}
            className="bg-color-paleWhite h-[398px] rounded-[30px] p-5"
          >
            <p className="poppinsRegular font-bold text-xl my-2">
              Articles made
            </p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-3 gap-2 w-full mb-4"
            >
              {postsIcons.map((item) => (
                <div className="w-[100%] justify-items-center mb-4">
                  <div className="">
                    <motion.img
                      whileHover={{ scale: "1.25" }}
                      whileTap={{ scale: "-0.95", rotate: "2.5deg" }}
                      transition={{ duration: "0.125", ease: "easeInOut" }}
                      src={item.image}
                      alt="post"
                      width={100}
                      className="rounded-[10px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9, delay: 0.25 }}
          className="grid grid-flow-row gap-6 h-[100vh] w-[75%] rounded-[30px] bg-white p-5"
        >
          <KhatEngine className="rounded-[30px]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PeerPage;
