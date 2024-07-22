import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import sabotage from "../assets/main_events.jpg";
import star from "../assets/icons/stars.svg";
import { motion } from "framer-motion";
import round2 from "../assets/round2.png";
import line from "../assets/Artboard – 5.png";
import backdrop from "../assets/Artboard – 6.jpg";
import EventsPage from "../components/EventsPage";
import BlogsPage from "../components/BlogsPage";
import user from "../assets/characters (1).png";
import user1 from "../assets/characters (2).png";
import user3 from "../assets/characters (4).png";

const Events = () => {
  const [displayEvents, setDisplayEvents] = useState(true);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  }

  const handleEventsClick = () => {
    setDisplayEvents(true);
  };

  const handleBlogClick = () => {
    setDisplayEvents(false);
  };

  return (
    <div>
      <div className="w-full">
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.1, delay: 0.25 }}
          src={backdrop}
          alt="backdrop"
          className="w-full relative mt-20 xl:mt-9"
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
          className=" content-center text-center w-full "
        >
          <div className=" leading-normal -mt-[22%] absolute w-full text-center ml-10 xl:pl-[20%]">
            <h1 className="flex h1 text-color-darkBlue poppinsSemiBold leading-normal text-center">
              Whats happening
              <span className="flex justify-items-center items-center px-4 p-2">
                <img
                  src={user}
                  alt="round"
                  className="z-10 h-[35px] xl:h-[70px] w-[35px] xl:w-[70px] border-1 border-opacity-30 border-color-darkBlue rounded-full object-cover -mr-3"
                />
                <img
                  src={user1}
                  alt="round"
                  className="z-20 h-[35px] xl:h-[70px] w-[35px] xl:w-[70px] border-1 border-opacity-30 border-color-darkBlue object-cover rounded-full -mr-3"
                />
                <img
                  src={user3}
                  alt="round"
                  className="z-30 h-[35px] xl:h-[70px] w-[35px] xl:w-[70px] border-1 border-opacity-30 border-color-darkBlue object-cover rounded-full"
                />
              </span>
              @RAHU
            </h1>
          </div>

          <h3 className="h6 lg:h4 -mt-[12%] xl:-mt-[16%] poppinsRegular text-opacity-80 leading-normal w-full text-darkBlue absolute">
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
          <img src={line} alt="line" className="w-full xl:-mt-40 relative" />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-1 w-full px-10 xl:px-20 justify-items-center items-center mb-20"
        >
          <div className=" xl:flex xl:flex-cols-2 gap-6 xl:h-[600px] w-full xl:mt-5 mb-10">
            <div className="text-black border-2 border-gold h-[400px] xl:w-[70%] rounded-[30px] flex justify-items-center">
              <div className="flex justify-items-center w-screen xl:h-[600px]">
                <img
                  src={sabotage}
                  alt="video"
                  className="drop-shadow-md rounded-[30px] xl:object-cover max-h-full w-full relative"
                />
                <button className="absolute poppinsRegular px-8 py-4 flex bg-white text-black ml-10 mt-10 mb-10 rounded-[30px] text-lg justify-center hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2">
                  Featured
                  <img
                    src={star}
                    alt="round"
                    width={30}
                    className="ml-5 justify-around"
                  />
                </button>
                <button className="absolute poppinsRegular px-8 py-4 justify-around bg-white flex text-left text-black ml-10 mt-[40%] xl:mt-[24%] mb-10 rounded-[30px] body-1 hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2">
                  <img src={round2} alt="round" width={50} className="mr-5" />
                  Life saving skills that have promoted menstrual <br /> health
                  for young girls in Kasese District
                </button>
              </div>
            </div>

            <div className="bg-color-gold text-white border-2 h-[400px] xl:h-[600px] border-gray-400 mt-10 xl:mt-0 xl:w-[30%] rounded-[30px] px-10 pt-10">
              <div className="grid grid-cols-1 gap-4 justify-evenly text-white mt-10">
                <div>
                  <h3 className="poppinsSemiBold text-black h4 mb-10">
                    Subscribe for new content
                  </h3>
                  <h3 className="text-black h6 poppinsRegular xl:mb-10">
                    RAHU inspires youth by introducing them to diverse role
                    models and mentors in fields like medicine, education,
                    theatre and creative arts entrepreneurship
                  </h3>
                  {!isEmailValid ? (
                    <p className="poppinsSemiBold body-1 text-red-800">
                      Please enter a valid email address
                    </p>
                  ) : null}
                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      placeholder="Enter your email address here"
                      value={email}
                      onChange={handleInput}
                      className="bg-white text-gray-800 text-lg poppinsRegular px-5 py-3 my-5 rounded-3xl"
                    />

                    <button
                      type="submit"
                      className="poppinsSemiBold px-8 py-4 bg-black text-white mt-10 mb-20 rounded-[30px] body-1 justify-center hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
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
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex content-center w-full mt-20"
        >
          <h1 className="h1 poppinsSemiBold mt-4 xl:mt-0  w-1/2 ml-[12%]">
            Recent posts
          </h1>
          <div className="flex gap-20 justify-items-center mt-4">
            <h3
              className={`h2 xl:h4 poppinsRegular leading-normal cursor-pointer ${
                displayEvents ? "underline" : ""
              }`}
              onClick={handleEventsClick}
            >
              events
            </h3>
            <h3
              className={`h2 xl:h4 poppinsRegular leading-normal cursor-pointer ${
                !displayEvents ? "underline" : ""
              }`}
              onClick={handleBlogClick}
            >
              blogs
            </h3>
          </div>
        </motion.div>

        {displayEvents ? <EventsPage /> : <BlogsPage />}

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center justify-center items-center w-full mb-20"
        >
          <button className="poppinsRegular px-6 py-4 bg-black text-white justify-center border-2 border-darkBlue mt-20 rounded-[30px] text-xl hover:bg-darkBlue hover:text-white hover:border-blue hover:border-4">
            Load more
          </button>
        </motion.div>

        <div className="mt-10 xl:px-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Events;
