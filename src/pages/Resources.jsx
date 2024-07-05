import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import logo from "../assets/rahu icon.png";
import { motion } from "framer-motion";
import {
  ContactLinks,
  footerLinks,
  resources,
  socialMedia,
} from "../constants";
import user from "../assets/icons/Group 53.svg";
import { useNavigate } from "react-router-dom";

const Resources = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    // Function to fetch partners data from Laravel API
    const fetchPartners = async () => {
      try {
        // Make GET request to your Laravel API endpoint using fetch
        const response = await fetch("http://127.0.0.1:8000/api/reports"); // Update the URL with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // Update state with partners data from API response
        setPartners(data);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    // Call fetchPartners function when component mounts
    fetchPartners();
  }, []);

  const convertHTMLToString = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.innerText;
  };

  return (
    <div>
      <div className="px-20">
        <div className="content-center text-center w-full">
          <div className="mb-10">
            <NavBar />
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.35 }}
            className=" text-center justify-items-center mt-[5%]"
          >
            <div className=" text-center">
              <h1 className="text-6xl poppinsSemiBold leading-normal text-center">
                Resources at RAHU
              </h1>
            </div>
          </motion.div>

          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-2xl poppinsRegular leading-normal"
          >
            Each of RAHU's program, campaign and projects are tailored <br /> to
            impact nuggets of information
          </motion.h3>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9, delay: 0.25 }}
          className="grid grid-cols-3 gap-8 w-full mb-40 px-20 mt-20"
        >
          {partners.map((item, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-paleWhite rounded-[30px] px-10"
              key={index}
              onClick={() => navigate(`/ResourceDetails/${item.id}`)}
            >
              <div className="">
                <div className="poppinsRegular px-10 justify-around bg-white flex text-left w-[55%] text-black mt-10 mb-10 rounded-[80px] text-lg hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2">
                  <img
                    src={user}
                    alt="round"
                    width={50}
                    className="mt-3 mr-2"
                  />
                  <div className="mt-3">
                    <p>John Ssaka</p>
                    <p className="text-gray-700 text-md">Author</p>
                  </div>
                </div>
                <img
                  src={item.image_url}
                  alt="paper"
                  width={500}
                  className="rounded-[30px] mb-5 object-cover h-[400px]"
                />
                <h3 className="text-3xl poppinsSemiBold leading-normal text-left">
                  {item.title}
                </h3>
                <p className="text-xl poppinsRegular mt-4">
                  {convertHTMLToString(item.desc).substring(0, 100)}...
                </p>
                <p className="text-xl poppinsRegular font-bold mt-4">
                  Date: {item.year}
                </p>
                <motion.button
                  whileHover={{ scale: "1.25" }}
                  whileTap={{ scale: "0.95", rotate: "2.5deg" }}
                  transition={{ duration: "0.125", ease: "easeInOut" }}
                  onClick={() => navigate(`/ResourceDetails/${item.id}`)}
                  className="poppinsRegular px-10 py-2 text-black border-2 border-black mb-10 mt-10 rounded-[30px] text-lg justify-center hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2"
                >
                  Read more
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.6,
          }}
          className="grid grid-cols-4 gap-4 bg-darkBlue text-white pl-20 pr-20 pb-10 rounded-t-[30px]"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10"
          >
            <a href="/">
              <motion.img
                whileHover={{ scale: "1.25" }}
                whileTap={{ scale: "0.95", rotate: "2.5deg" }}
                transition={{ duration: "0.125", ease: "easeInOut" }}
                src={logo}
                alt="logo"
                width={80}
              />
            </a>

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
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10"
          >
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
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10"
          >
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
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-[60px] text-center justify-center "
          >
            <motion.button
              whileHover={{ scale: "1.25" }}
              whileTap={{ scale: "0.95", rotate: "2.5deg" }}
              transition={{ duration: "0.125", ease: "easeInOut" }}
              className="py-3 px-10 mt-10 border-2 border-white rounded-[25px] justify-end poppinsSemiBold text-gray-700"
            >
              Subscribe Newsletter
            </motion.button>
            <a href="PeerSignin">
              <motion.h3
                whileHover={{ scale: "1.25" }}
                whileTap={{ scale: "0.95", rotate: "2.5deg" }}
                transition={{ duration: "0.125", ease: "easeInOut" }}
                className="poppinsSemiBold mt-10 leading-normal "
              >
                Peer Educators Academy
              </motion.h3>
            </a>
          </motion.div>
        </motion.footer>
      </div>
    </div>
  );
};

export default Resources;
