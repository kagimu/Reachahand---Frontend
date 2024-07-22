import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import line from "../assets/Artboard – 5.png";
import top from "../assets/LJ4B5813 copy.png";
import cover from "../assets/drop-yellow.jpg";
import backdrop from "../assets/Artboard – 6.jpg";
import team from "../assets/rahu-team-collage.jpg";
import crystal from "../assets/Teams elements/crytsal.png";
import yellow from "../assets/Teams elements/yellow.png";
import purple from "../assets/Teams elements/purple.png";
import firsts from "../assets/Teams elements/boards.png";
import managers from "../assets/Teams elements/managers.png";
import officers from "../assets/Teams elements/officers.png";
import backdrop2 from "../assets/Artboard – 15.jpg";
import backdrop3 from "../assets/Artboard – 17.jpg";
import afri from "../assets/Artboard – 6.jpg";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import program from "../assets/program-1.jpg";
import { Poster } from "@vidstack/react";
import { PlayButton } from "@vidstack/react";
import { PauseIcon, PlayIcon } from "@vidstack/react/icons";
import "@vidstack/react/player/styles/base.css";
import Modal from "../components/Modal";

const AboutUs = () => {
  const [users, setUsers] = useState([]);
  const [staff, setStaff] = useState([]);
  const [cultural, setCultural] = useState([]);
  const [board, setBoard] = useState([]);

  const [selectedStaff, setSelectedStaff] = useState(null);

  const handleStaffClick = (staffMember) => {
    setSelectedStaff(staffMember);
  };

  const handleCloseModal = () => {
    setSelectedStaff(null);
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef(null);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleMouseEnter = () => {
    if (playerRef.current) {
      playerRef.current.pause();
      setIsPlaying(false);
    }
  };
  const handleMouseLeave = () => {
    // Do nothing to keep the video paused when the mouse leaves
  };
  const handleUnmute = () => {
    if (playerRef.current) {
      playerRef.current.muted = false;
      setIsMuted(false);
    }
  };

  useEffect(() => {
    // Function to fetch users data from Laravel API
    const fetchUsers = async () => {
      try {
        // Make GET request to your Laravel API endpoint using fetch
        const response = await fetch("http://127.0.0.1:8000/api/profile"); // Update the URL with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // Update state with users data from API response
        setUsers(data);

        // Filter users with category "Strategic"
        const staff = data.filter((users) => users.category === "Staff");
        setStaff(staff);

        // Filter users with category "Implementing"
        const cultural = data.filter(
          (users) => users.category === "Cultural icon"
        );
        setCultural(cultural);

        // Filter users with category "Corporate"
        const board = data.filter((users) => users.category === "Board Member");
        setBoard(board);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    // Call fetchPartners function when component mounts
    fetchUsers();
  }, []);
  return (
    <div className="w-full bg-paleWhite rounded-[30px] content-center">
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
      <div className="-mt-[40%] mb-10 w-full">
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
        className=" content-center text-center w-full relative "
      >
        <h1 className="h1 poppinsSemiBold text-darkBlue leading-normal mt-[15%] absolute w-full">
          Empowerment for
          <br /> youth by youth
        </h1>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.25 }}
        className="lg:h-[140px] relative"
      >
        <img src={line} alt="line" className="w-full mt-[40%] lg:mt-[28%]" />
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
          className="w-full mt-0 xl:h-[600px] xl:object-cover rounded-[30px]"
        />
      </motion.div>
      <div className="absolute h-[400px] xl:h-[600px] justify-center items-center left-[12%] lg:left-[20%]">
        <img
          src={top}
          alt="cover"
          className="w-full -mt-[66.8%] object-cover z-100 items-center"
        />
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex flex-col lg:grid lg:grid-cols-1 w-full px-20 justify-items-center items-center lg:mt-40"
      >
        <div className="xl:flex xl:flex-cols-2 gap-6 lg:h-[100%] w-full lg:mb-10">
          <div className=" text-black p-1 lg:p-0 lg:w-[50%] rounded-[30px] lg:pl-10 lg:pr-30 ">
            <p className="poppinsSemiBold text-color-darkBlue mt-20 h1 text-gold leading-normal text-center lg:text-left lg:mt-20">
              Who we are
            </p>
            <p className="h5 lg:h4 xl:pr-20 text-color-darkBlue text-center lg:text-left poppinsRegular leading-normal lg:mt-5 lg:mb-20">
              Reach A Hand Uganda is a youth centered organisation focusing on
              youth empowerment programs with emphasis of livelihood and Skills
              Development, Behaviour change communication, Sexual Reproductive
              Health & Rights and HIV/AIDS awareness and prevention
            </p>
          </div>
          <div className="text-black border-2 mt-5 lg:mt-0 border-gray-400 lg:w-[50%] justify-between rounded-[30px]">
            <MediaPlayer
              className="w-full h-full rounded-[30px] bg-black"
              playsInline
              title="Sprite Fight"
              src="https://www.youtube.com/watch?v=r_ZXOoemDgs&pp=ygUKcmVhY2hhaGFuZA%3D%3D"
              load="eager"
              autoplay
              loop
              muted={isMuted}
              ref={playerRef}
              onPlay={handlePlay}
              onPause={handlePause}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleUnmute}
            >
              <MediaProvider>
                <Poster
                  className="relative object-cover inset-0 block h-full w-full bg-black rounded-md opacity-0 transition-opacity data-[visible]:opacity-90 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
                  src={program}
                  alt="Reachahand video"
                />
              </MediaProvider>
              {!isPlaying && (
                <PlayButton className="group ring-sky-400 absolute mt-[60%] inline-flex h-0 xl:ml-10 xl:mb-20 w-12  cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4">
                  <PlayIcon
                    size={50}
                    className="justify-items-center relative bg-white p-1 rounded-full hidden group-data-[paused]:block"
                  />
                  <PauseIcon
                    size={50}
                    className="justify-items-center relative bg-white p-1 rounded-full group-data-[paused]:hidden"
                  />
                </PlayButton>
              )}
            </MediaPlayer>
          </div>
        </div>
      </motion.div>

      <div className="mt-20 lg:mt-40 lg:px-20">
        <p className="h1 text-color-darkBlue p-5 text-center items-center poppinsSemiBold">
          Meet our team
        </p>
        <img
          src={team}
          className="w-full rounded-[30px] xl:object-cover xl:h-[600px] mt-10 px-4"
        />
      </div>

      <div className="justify-center items-center text-center">
        <img src={afri} className="relative object-cover w-[100%]" />
        <h1 className="h1 poppinsSemiBold -mt-[20%] ml-10 xl:ml-[30%] absolute text-center items-center leading-normal">
          Dynamic , Vibrant and <br /> Purpose led
        </h1>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className=" w-full justify-items-center items-center text-center mt-[0]"
      >
        <h3 className="poppinsRegular opacity-85 mt-5 xl:mt-0 h3 text-center">
          Board of Directors
        </h3>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-5 gap-6 w-full h-full ml-[5%] justify-items-center items-center mt-[2%] mb-[4%] overflow-x-auto whitespace-nowrap no-scrollbar"
      >
        <div className="w-full">
          <div className="flex">
            {staff.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 mr-10 w-full justify-center items-center cursor-pointer"
                onClick={() => handleStaffClick(item)}
              >
                <div className="items-center justify-center w-full mt-20 z-1">
                  <motion.div>
                    {" "}
                    <img src={crystal} alt="team" className="ml-10 mt-[10%]" />
                  </motion.div>

                  <img
                    src={firsts}
                    alt="team"
                    className="-mt-[114%] ml-[40px] z-50"
                  />
                </div>
                <h3 className="poppinsSemiBold body-1 ml-[60px] xl:ml-20 leading-6 text-center mt-4 ">
                  {item.first_name}
                  <br />
                  {item.last_name}
                </h3>
                <p className="poppinsRegular text-[10px] lg:body-2 leading-normal ml-10 text-gray-500 text-center lg:ml-20">
                  {item.position.substring(0, 25)}...
                </p>
              </div>
            ))}
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
        className=" w-full justify-items-center items-center text-center mt-[10%]"
      >
        <h3 className="poppinsRegular opacity-85 h3 text-center">Managers</h3>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-5 gap-6 w-full h-full ml-[5%] justify-items-center items-center mt-[2%] mb-[4%] overflow-x-auto whitespace-nowrap no-scrollbar"
      >
        <div className="w-full">
          <div className="flex">
            {staff.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 mr-10 w-full justify-center items-center"
                onClick={() => handleStaffClick(item)}
              >
                <div className="items-center justify-center w-full mt-20">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{
                      duration: 0.5,
                      loop: Infinity,
                      ease: "linear",
                    }}
                  >
                    {" "}
                    <motion.img
                      whileHover={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        loop: Infinity,
                        ease: "linear",
                      }}
                      src={yellow}
                      alt="team"
                      className="ml-10 mt-[10%]"
                    />
                  </motion.div>
                  <img
                    src={managers}
                    alt="team"
                    className="-mt-[114%] ml-[40px]"
                  />
                </div>
                <h3 className="poppinsSemiBold body-1 ml-[60px] lg:ml-20 leading-6 text-center mt-4 ">
                  {item.first_name}
                  <br />
                  {item.last_name}
                </h3>
                <p className="poppinsRegular text-[10px] lg:body-1 leading-normal text-gray-500 text-center ml-10 lg:ml-20">
                  {item.position.substring(0, 30)}...
                </p>
              </div>
            ))}
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
        className=" w-full justify-items-center items-center text-center mt-[10%]"
      >
        <h3 className="poppinsRegular opacity-85 h3 text-center">Officers</h3>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-5 gap-6 w-full h-full ml-[5%] justify-items-center items-center mt-[2%] mb-[4%] overflow-x-auto whitespace-nowrap no-scrollbar"
      >
        <div className="w-full">
          <div className="flex">
            {staff.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 mr-10 w-full justify-center items-center"
              >
                <div className="items-center justify-center w-full mt-20">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{
                      duration: 0.5,
                      loop: Infinity,
                      ease: "linear",
                    }}
                  >
                    {" "}
                    <motion.img
                      whileHover={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        loop: Infinity,
                        ease: "linear",
                      }}
                      src={purple}
                      alt="team"
                      className="ml-10 mt-[10%]"
                    />
                  </motion.div>
                  <img
                    src={officers}
                    alt="team"
                    className="-mt-[114%] ml-[40px]"
                  />
                </div>
                <h3 className="poppinsSemiBold body-1 ml-[60px] lg:ml-20 leading-6 text-center mt-4 ">
                  {item.first_name}
                  <br />
                  {item.last_name}
                </h3>
                <p className="poppinsRegular text-[10px] ml-10 lg:body-2 leading-normal text-gray-500 text-center lg:ml-20">
                  {item.position.substring(0, 30)}...
                </p>
              </div>
            ))}
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
        className="xl:flex xl:flex-cols-2 gap-6 mt-20 xl:h-[500px] w-full px-10 lg:mt-[10%] lg:mb-40 lg:px-40"
      >
        <div className="bg-white border-2 border-gray-400 mb-4 xl:w-[45%] rounded-[30px]">
          <img
            src={backdrop2}
            alt="drop"
            className="xl:w-[100%] xl:object-cover xl:h-[500px] rounded-[30px]"
          />
        </div>
        <div className="bg-color-gold border-2 border-gray-400 sm:mt-10 xl:mt-0 xl:w-[55%] rounded-[30px] justify-center items-center">
          <img
            src={backdrop3}
            alt="drop"
            className="xl:w-[100%] xl:object-cover h-[400px] xl:h-[500px] relative rounded-[30px]"
          />
          <div className="px-10 xl:px-20">
            <p className="poppinsBold h1 leading-tight xl:leading-normal text-center lg:text-left -mt-[65%] md:-mt-[30%] xl:-mt-[22%] absolute">
              Make more impact
              <br /> with us
            </p>
            <p className="text-center lg:text-left poppinsRegular body-1 leading-tight -mt-[43%] pr-20 xl:leading-normal xl:-mt-[13%] xl:pr-60 absolute">
              RAHU inspires youth by introducing them to diverse role <br />
              models and mentors in fields like medicine, education, theatre and
              creative arts entrepreneurship
            </p>
            <a href="/GetInvolved">
              <button className="poppinsSemiBold ml-[23%] px-4 py-2 xl:px-8 xl:py-4 bg-black absolute -mt-[20%] flex xl:-mt-[7%] text-white border-2 border-black mb-20 rounded-[30px] body-1 justify-center hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2">
                Get involved
              </button>
            </a>
          </div>
        </div>
      </motion.div>
      <Modal
        isVisible={!!selectedStaff}
        onClose={handleCloseModal}
        staffMember={selectedStaff}
      />

      <div className="mt-10 xl:px-20 items-center">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
