import React, { useEffect, useState } from "react";
import { thematic } from "../constants";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import line from "../assets/Artboard – 5.png";
import cover from "../assets/drop-yellow.jpg";
import top from "../assets/Group 202.png";
import backdrop from "../assets/Artboard – 6.jpg";
import { useNavigate } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";
import ReactPlayer from "react-player";
import Modal from "../components/Modal";
import ModalPrograms from "../components/ModalPrograms";
import { MediaPlayer, MediaProvider } from "@vidstack/react";

const Programs = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  const [strategicPartners, setStrategicPartners] = useState([]);
  const [implementingPartners, setImplementingPartners] = useState([]);
  const [corporatePartners, setCorporatePartners] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [iconPosition, setIconPosition] = useState({ top: "50%", left: "50%" });

  const [selectedStaff, setSelectedStaff] = useState(null);

  const handleStaffClick = (staffMember) => {
    setSelectedStaff(staffMember);
  };

  const handleCloseModal = () => {
    setSelectedStaff(null);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setIconPosition({ top: y, left: x });
  };

  const handlePlayClick = () => {
    setPlaying(true);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setPlaying(false);
    setShowPopup(false);
  };

  useEffect(() => {
    // Function to fetch partners data from Laravel API
    const fetchPartners = async () => {
      try {
        // Make GET request to your Laravel API endpoint using fetch
        const response = await fetch("http://rahu.reachahand.org/api/partners"); // Update the URL with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // Update state with partners data from API response
        setPartners(data);

        // Filter partners with category "Strategic"
        const strategicPartners = data.filter(
          (partners) => partners.partner_category === "strategic"
        );
        setStrategicPartners(strategicPartners);

        // Filter partners with category "Implementing"
        const implementingPartners = data.filter(
          (partners) => partners.partner_category === "implementing"
        );
        setImplementingPartners(implementingPartners);

        // Filter partners with category "Corporate"
        const corporatePartners = data.filter(
          (partners) => partners.partner_category === "corporate"
        );
        setCorporatePartners(corporatePartners);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    // Call fetchPartners function when component mounts
    fetchPartners();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="w-full ">
      <div className="w-full rounded-[30px] content-center text-center">
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
          className="content-center text-center w-full mb-20"
        >
          <h1 className="h1 -mt-[22%] lg:text-7xl poppinsSemiBold text-darkBlue leading-normal lg:-mt-[22%] absolute w-full">
            Our programs
          </h1>
          <h3 className="text-sm -mt-[10%] lg:text-3xl xl:text-h4 lg:-mt-[16%] poppinsRegular text-opacity-80 leading-normal w-full text-darkBlue absolute">
            Each of RAHU's program, campaign and projects is
            <br /> tailored to impact nuggets of information
          </h3>
        </motion.div>

        <div className="">
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
            <img
              src={line}
              alt="line"
              className="w-full lg:-mt-40 object-cover relative"
            />
          </motion.div>

          <div className="relative" onMouseMove={handleMouseMove}>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.25 }}
              className="w-full px-5 xl:px-20 rounded-[30px] mt-2 relative"
            >
              <img
                src={cover}
                alt="cover"
                className="w-full mt-0 xl:h-[600px] xl:object-cover rounded-[30px]"
              />
            </motion.div>
            <div className="absolute xl:h-[600px] justify-center items-center lg:left-[4%]">
              <img
                src={top}
                alt="cover"
                className="xl:w-full px-10 -mt-[43.7%] xl:-mt-[46.4%] xl:object-cover xl:h-[800px] z-100 items-center"
              />
              <FaRegPlayCircle
                size={100}
                className="fill-white cursor-pointer xl:-mt-40 xl:ml-[51%]"
                onClick={handlePlayClick}
              />
            </div>

            {showPopup && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.25 }}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              >
                <div className="relative w-3/5 bg-color-lightBlue p-4 rounded-[35px]">
                  <button
                    className="absolute top-2 right-2 text-black"
                    onClick={handleClosePopup}
                  >
                    &times;
                  </button>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=zjbqwvIh5LU"
                    playing={playing}
                    width="100%"
                    height="60vh"
                    className="rounded-[35px]"
                  />
                </div>
              </motion.div>
            )}
            {showPopup && (
              <div className="fixed inset-0 bg-black bg-opacity-50 blur z-40" />
            )}
          </div>

          <div className="bg-[#E5F2FF] rounded-[30px] xl:mx-20 ">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-[#E5F2FF] grid grid-cols-1 w-full h-full px-10 justify-items-left items-center mt-20 xl:mt-[10%] mb-20 rounded-[30px]"
            >
              <div className=" w-full">
                <div className=" rounded-[30px] xl:pl-10 xl:pr-10 ">
                  <p className="poppinsSemiBold h3 leading-normal text-left mt-20">
                    SRHR
                  </p>
                  <p className="text-left poppinsRegular text-sm lg:text-[22px] leading-normal mb-20 lg:pr-[40%]">
                    Under this program, RAHU seeks to remain the leading SRHR
                    hub in Uganda that is responsive to the changing and diverse
                    needs of its target groups and ensure that access to SRHR
                    services, information,
                  </p>
                </div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="grid grid-cols-4 gap-6 lg:grid lg:grid-cols-6 lg:gap-6 w-full justify-center items-center mb-[10%] xl:mt-20 ml-10 overflow-x-auto whitespace-nowrap no-scrollbar"
                >
                  <div className="flex w-full cursor-pointer">
                    {strategicPartners.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleStaffClick(item)}
                        className="flex-shrink-0 mr-[8%] w-[70%] flex justify-center items-center bg-white px-2 py-2 rounded-3xl"
                      >
                        <img
                          src={item.cover_pic_url}
                          alt="team"
                          width={135}
                          className=""
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className=" w-full">
                <div className=" rounded-[30px] xl:pl-10 xl:pr-10 ">
                  <p className="poppinsSemiBold h3 leading-normal text-left mt-5">
                    Youth Livelihoods and Innovations (YLI)
                  </p>
                  <p className="text-left poppinsRegular text-sm lg:text-[22px] leading-normal mb-20 xl:pr-[40%]">
                    Under this program, RAHU seeks to remain the leading SRHR
                    hub in Uganda that is responsive to the changing and diverse
                    needs of its target groups and ensure that access to SRHR
                  </p>
                </div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="grid grid-cols-4 gap-6 lg:grid lg:grid-cols-6 lg:gap-6 w-full justify-center items-center mb-[10%] mt-20 ml-10 overflow-x-auto whitespace-nowrap no-scrollbar"
                >
                  <div className="flex w-full cursor-pointer">
                    {implementingPartners.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleStaffClick(item)}
                        className="flex-shrink-0 mr-[8%] w-[70%] flex justify-center items-center bg-white px-2 py-2 rounded-3xl"
                      >
                        <img
                          src={item.cover_pic_url}
                          alt="team"
                          width={135}
                          className=""
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className=" w-full">
                <div className=" rounded-[30px] xl:pl-10 xl:pr-10 ">
                  <p className="poppinsSemiBold h3 leading-normal text-left mt-5">
                    SautiPlus Media Hub
                  </p>
                  <p className="text-left poppinsRegular text-sm lg:text-[22px] leading-normal mb-20 xl:pr-[40%]">
                    Under this Program, RAHU seeks to invest itself in evolving
                    itself into a centre of excellence on health communications,
                    knowledge management and innovations.
                  </p>
                </div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="grid grid-cols-4 lg:grid lg:grid-cols-6 gap-6 w-full justify-center items-center mb-[10%] mt-20 ml-10 overflow-x-auto whitespace-nowrap no-scrollbar"
                >
                  <div className="flex w-full cursor-pointer">
                    {corporatePartners.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleStaffClick(item)}
                        className="flex-shrink-0 mr-[8%] w-[70%] flex justify-center items-center bg-white px-2 py-2 rounded-3xl"
                      >
                        <img
                          src={item.cover_pic_url}
                          alt="team"
                          width={135}
                          className=""
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className=" w-full">
                <div className=" rounded-[30px] xl:pl-10 xl:pr-10 ">
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="poppinsSemiBold h4 leading-normal text-left mt-5"
                  >
                    Institutional Development, Engagement and Sustainability
                    (IDEAS)
                  </motion.p>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="text-left poppinsRegular text-sm lg:text-[22px] leading-normal mb-20 xl:pr-[40%]"
                  >
                    RAHU as a youth organisation acknowledges that it’s a
                    fast-growing institution characterised by exponential growth
                    programmatically and in terms of geographical spread across
                    3 continents (Africa, Europe and USA) – which necessitates
                    consciously and intentionally managing our growth.
                  </motion.p>
                </div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="grid grid-cols-4 lg:grid lg:grid-cols-6 gap-6 w-full justify-center items-center mb-[10%] xl:mt-20 ml-10 overflow-x-auto whitespace-nowrap no-scrollbar"
                >
                  <div className="flex w-full cursor-pointer">
                    {strategicPartners.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleStaffClick(item)}
                        className="flex-shrink-0 mr-[8%] w-[70%] flex justify-center items-center bg-white px-2 py-2 rounded-3xl"
                      >
                        <img
                          src={item.cover_pic_url}
                          alt="team"
                          width={135}
                          className=""
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <ModalPrograms
                isVisible={!!selectedStaff}
                onClose={handleCloseModal}
                staffMember={selectedStaff}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-10 xl:px-20">
        <Footer />
      </div>
    </div>
  );
};

export default Programs;
