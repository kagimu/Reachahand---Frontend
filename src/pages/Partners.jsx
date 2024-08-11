import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import line from "../assets/Artboard – 5.png";
import cover from "../assets/Artboard – 23.jpg";
import backdrop from "../assets/Artboard – 6.jpg";
import backdrop2 from "../assets/Artboard – 15.jpg";
import backdrop3 from "../assets/Artboard – 17.jpg";
import top from "../assets/Mask Group 62.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Partners = () => {
  let navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  const [strategicPartners, setStrategicPartners] = useState([]);
  const [implementingPartners, setImplementingPartners] = useState([]);
  const [corporatePartners, setCorporatePartners] = useState([]);

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
    <div className="w-full">
      <div className="w-full justify-items-center content-center rounded-[30px] mb-20">
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
          <h1 className="h1 poppinsSemiBold text-darkBlue leading-normal -mt-[22%] absolute w-full">
            Our partners
          </h1>
          <h3 className="h4 -mt-[16%] poppinsRegular text-opacity-80 leading-normal w-full text-darkBlue absolute">
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
            className="w-full mt-0 xl:h-[600px] xl:object-cover rounded-[30px]"
          />
        </motion.div>
        <div className="absolute h-[400px] xl:h-[700px] justify-center items-center left-[12%] lg:left-[8%]">
          <img
            src={top}
            alt="cover"
            className="w-full -mt-[45.8%] object-cover z-100 items-center"
          />
        </div>

        <div className=" rounded-[30px] mx-20 ">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className=" bg-[#E5F2FF] grid grid-cols-1 w-full h-full px-10 justify-items-left items-center mt-20 xl:mt-[10%] mb-20 rounded-[30px]"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mb-[10%]"
            >
              <div className="content-center text-left h-[500px] pl-10 rounded-[30px]">
                <h1 className="h3 poppinsSemiBold text-gray-900 leading-normal ">
                  Implementing partners
                </h1>
                <h3 className="h6 lg:text-[22px] poppinsRegular leading-normal pt-2">
                  Strategic partners are how RAHU works in partnership with
                  other organisations <br /> with similar mission, as well as
                  communities to enhance synergies, sustainability <br />
                  and ownership of programs
                </h3>
              </div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
                className="grid grid-cols-6 gap-6 w-full justify-center items-center mb-[4%] -mt-20 ml-10 overflow-x-auto whitespace-nowrap no-scrollbar"
              >
                <div className="flex w-full cursor-pointer">
                  {strategicPartners.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => navigate(`/PartnerDetails/${item.id}`)}
                      className="flex-shrink-0 mr-[8%] w-[70%] flex justify-center items-center bg-white px-2 py-2 rounded-3xl"
                    >
                      <img
                        src={item.cover_pic_url}
                        alt="team"
                        width={135}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, delay: 0.25 }}
                className="content-center text-left h-[500px] pl-10 rounded-[30px] mt-20"
              >
                <h1 className="h3 poppinsSemiBold text-gray-900 leading-normal ">
                  Implementing/Supporting partners
                </h1>
                <h3 className="h6 lg:text-[22px] poppinsRegular leading-normal pt-2">
                  Implementing partners are how RAHU works in partnership with
                  other organisations <br /> with similar mission, as well as
                  communities to enhance synergies, sustainability <br />
                  and ownership of programs
                </h3>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="grid grid-cols-6 gap-6 w-full justify-center items-center mb-10 mt-20 overflow-x-auto whitespace-nowrap no-scrollbar"
                >
                  <div className="flex w-full cursor-pointer">
                    {implementingPartners.map((item, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 mr-[8%] w-[70%] flex justify-center items-center bg-white px-2 py-2 rounded-3xl"
                        onClick={() => navigate(`/PartnerDetails/${item.id}`)}
                      >
                        <img
                          src={item.cover_pic_url}
                          alt="team"
                          width={135}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, delay: 0.25 }}
                className="content-center text-left h-[500px] pl-10 rounded-[30px] mt-20"
              >
                <h1 className="h3 poppinsSemiBold text-gray-900 leading-normal ">
                  Strategic Supporting partners
                </h1>
                <h3 className="h6 lg:text-[22px] poppinsRegular leading-normal pt-2">
                  Corporate partners are how RAHU works in partnership with
                  other organisations <br /> with similar mission, as well as
                  communities to enhance synergies, sustainability <br />
                  and ownership of programs
                </h3>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="grid grid-cols-6 gap-6 w-full justify-center items-center mt-20 overflow-x-auto whitespace-nowrap no-scrollbar"
                >
                  <div className="flex w-full cursor-pointer">
                    {corporatePartners.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => navigate(`/PartnerDetails/${item.id}`)}
                        className="flex-shrink-0 mr-[8%] w-[70%] flex justify-center items-center bg-white px-2 py-2 rounded-3xl"
                      >
                        <img
                          src={item.cover_pic_url}
                          alt="team"
                          width={135}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, delay: 0.25 }}
                className="content-center text-left h-[500px] pl-10 rounded-[30px] mt-20"
              >
                <h1 className="h3 poppinsSemiBold text-gray-900 leading-normal ">
                  Corporate partners
                </h1>
                <h3 className="h6 lg:text-[22px] poppinsRegular leading-normal pt-2">
                  Corporate partners are how RAHU works in partnership with
                  other organisations <br /> with similar mission, as well as
                  communities to enhance synergies, sustainability <br />
                  and ownership of programs
                </h3>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="grid grid-cols-6 gap-6 w-full justify-center items-center mt-20 overflow-x-auto whitespace-nowrap no-scrollbar"
                >
                  <div className="flex w-full cursor-pointer">
                    {corporatePartners.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => navigate(`/PartnerDetails/${item.id}`)}
                        className="flex-shrink-0 mr-[8%] w-[70%] flex justify-center items-center bg-white px-2 py-2 rounded-3xl"
                      >
                        <img
                          src={item.cover_pic_url}
                          alt="team"
                          width={135}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
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
          className="flex flex-cols-2 gap-6 h-[500px] w-full mb-10 px-40"
        >
          <div className="bg-white border-2 border-gray-400 w-[45%] rounded-[30px]">
            <img
              src={backdrop2}
              alt="drop"
              className="w-[100%] object-cover h-[500px] rounded-[30px]"
            />
          </div>
          <div className="bg-white border-2 border-gray-400 w-[55%] rounded-[30px]">
            <img
              src={backdrop3}
              alt="drop"
              className="w-[100%] object-cover h-[500px] relative rounded-[30px]"
            />
            <div className="px-20">
              <p className="poppinsBold text-6xl leading-normal text-left -mt-[22%] absolute">
                Make more impact
                <br /> with us
              </p>
              <p className="text-left poppinsRegular text-2xl leading-normal -mt-[13%] pr-60 absolute">
                RAHU inspires youth by introducing them to diverse role <br />
                models and mentors in fields like medicine, education, theatre
                and creative arts entrepreneurship
              </p>
              <a href="/GetInvolved">
                <button className="poppinsSemiBold px-8 py-4 bg-black absolute -mt-[7%] text-white border-2 border-black mb-20 rounded-[30px] text-lg justify-center hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2">
                  Get involved
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-10 px-20">
        <Footer />
      </div>
    </div>
  );
};

export default Partners;
