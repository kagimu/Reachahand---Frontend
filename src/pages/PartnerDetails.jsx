import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import logo from "../assets/new_logo.png";
import { ContactLinks, footerLinks, socialMedia } from "../constants";
import { CgArrowLeftO } from "react-icons/cg";

const PartnerDetails = () => {
  const navigate = useNavigate();
  const [partnerDetails, setPartnerDetails] = useState([]);
  const { id } = useParams();

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page in the history stack
  };

  useEffect(() => {
    const fetchPartnerDetails = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/partners/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch partner details");
        }
        const data = await response.json();
        // Update state with partner details
        setPartnerDetails(data);
      } catch (error) {
        console.error("Error fetching partner details:", error);
      }
    };

    fetchPartnerDetails();
  }, [id]);
  return (
    <div>
      <div className="w-full justify-items-center content-center">
        <div className="mt-5 mb-10 w-full">
          <NavBar />
        </div>
        <motion.div
          onClick={handleGoBack}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex gap-4 ml-60 justify-items-start items-left mt-40 cursor-pointer"
        >
          <CgArrowLeftO className="w-[50px] h-[50px] opacity-95" />
          <p className="poppinsRegular text-2xl mt-2">Back</p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-1 w-full h-full gap-10 px-60 justify-items-center items-center mb-20 mt-[5%]"
        >
          <div className="flex flex-cols-2 gap-12 w-full">
            <div className="w-[40%] rounded-[30px] ">
              <img
                src={partnerDetails.cover_pic_url}
                alt="LOGO"
                width={100}
                className="w-[100%]"
              />
            </div>
            <div className="bg-white w-[60%] rounded-[30px] pl-40">
              <div className="content-center">
                <p className="poppinsSemiBold text-6xl leading-normal text-left">
                  {partnerDetails.partner_name}
                </p>
                <p className="text-left poppinsRegular text-2xl leading-normal text-gray-700 mb-20">
                  {partnerDetails.partner_category} partner
                </p>
                <p className="text-left poppinsRegular text-2xl leading-normal text-gray-700 mt-5 mb-20">
                  {partnerDetails.desc}
                </p>
              </div>
            </div>
          </div>
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
        className="mt-10 px-40"
      >
        <footer className="grid grid-cols-4 gap-4 bg-darkBlue text-white pl-20 pr-20 rounded-t-[30px]">
          <div className="mt-10">
            <img src={logo} alt="logo" width={200} />
            <p className="poppinsRegular text-md mt-10">
              Reach a hand Uganda is a youth <br />
              centered organisation focusing on <br /> youth empowerment
              programs.
            </p>
            <p className="poppinsSemiBold text-md mt-10">Partners</p>
            <div className="flex items-center gap-5 mt-5">
              {socialMedia.map((item) => (
                <div className="flex flex-row justify-between">
                  <img src={item.imgUrl} alt="logo" width={40} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            {footerLinks.map((section) => (
              <div>
                <h3 className="poppinsSemiBold text-lg mt-12">
                  {section.title}
                </h3>
                <ul>
                  {section.links.map((link) => (
                    <li className="mt-5 poppinsRegular text-md leading-normal mb-6 hover:text-gray-500">
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10">
            {ContactLinks.map((section) => (
              <div>
                <h3 className="poppinsSemiBold text-lg mt-12">
                  {section.title}
                </h3>
                <ul>
                  {section.links.map((link) => (
                    <li className="mt-5 poppinsRegular text-md leading-normal mb-6 hover:text-gray-500">
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex items-center gap-5">
              {socialMedia.map((item) => (
                <div className="flex flex-row justify-between">
                  <img src={item.imgUrl} alt="logo" width={40} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-[60px] text-center justify-center ">
            <button className="py-3 px-10 mt-10 border-2 border-white rounded-[25px] justify-end poppinsSemiBold text-white">
              Subscribe Newsletter
            </button>
            <h3 className="poppinsSemiBold mt-10 leading-normal ">
              Peer Educators Academy
            </h3>
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default PartnerDetails;
