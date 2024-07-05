import React, { useEffect, useState } from "react";
import logo from "../assets/new_logo.png";
import { ContactLinks, footerLinks, socialMedia } from "../constants";
import { motion } from "framer-motion";
import footer from "../assets/Artboard – 13.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PartnerDetails } from "../pages";

const Footer = () => {
  let navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    // Function to fetch partners data from Laravel API
    const fetchPartners = async () => {
      try {
        // Make GET request to your Laravel API endpoint using Axios
        const response = await axios.get("http://127.0.0.1:8000/api/partners");

        // Update state with partners data from API response
        setPartners(response.data);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };
    // Call fetchPartners function when component mounts
    fetchPartners();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <img
        src={footer}
        alt="footer"
        className="relative w-full sm:h-[580px] lg:h-[480px] rounded-t-[35px]"
      />
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
        }}
        className="grid grid-cols-2 gap-4 -mt-[79%] text-white lg:items-center container lg:px-20 lg:-mt-[25%] absolute lg:grid lg:grid-cols-4 lg:gap-4"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 "
        >
          <a href="/">
            <motion.img
              whileHover={{ scale: "1.05" }}
              whileTap={{ scale: "0.95", rotate: "2.5deg" }}
              transition={{ duration: "0.125", ease: "easeInOut" }}
              src={logo}
              alt="logo"
              className="w-[100px] lg:w-[200px]"
            />
          </a>

          <p className="poppinsRegular body-2 mt-10 ">
            Reach a hand Uganda is a youth <br />
            centered organisation focusing on <br /> youth empowerment programs.
          </p>
          <p className="poppinsSemiBold body-1 mt-10 ">Partners</p>
          <div className="flex items-center gap-5 mt-5 absolute">
            {partners.slice(6, 12).map((item) => (
              <div key={item.id} className="flex flex-row justify-between">
                <img
                  src={item.cover_pic_url}
                  alt="logo"
                  onClick={() => navigate(`/PartnerDetails/${item.id}`)}
                  className="flex-shrink-0 justify-center items-center object-cover w-10 h-10 rounded-lg"
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
          transition={{ duration: 0.5, delay: 0.25 }}
          className="lg:mt-20"
        >
          {footerLinks.map((section, footerIndex) => (
            <div key={footerIndex}>
              <h3 className="poppinsSemiBold body-1 mt-10 lg:mt-12">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="lg:mt-5 poppinsRegular caption mb-2 mt-2 lg:mb-6 hover:text-gray-500"
                  >
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
          className="mt-5 lg:mt-10"
        >
          {ContactLinks.map((section, contactIndex) => (
            <div key={contactIndex}>
              <h3 className="poppinsSemiBold body-1 mt-20 lg:mt-12">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="lg:mt-5 poppinsRegular caption mb-2 mt-2 leading-normal lg:mb-6 hover:text-gray-500"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex items-center gap-5">
            {socialMedia.map((item, socialIndex) => (
              <a href={item.link}>
                <img
                  key={socialIndex}
                  src={item.imgUrl}
                  alt="logo"
                  width={40}
                />
              </a>
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
          className="mt-20 lg:mt-[60px] text-center justify-center "
        >
          <motion.button
            whileHover={{ scale: "1.05" }}
            whileTap={{ scale: "0.95", rotate: "2.5deg" }}
            transition={{ duration: "0.125", ease: "easeInOut" }}
            className="py-1 px-4 lg:py-3 lg:px-10 body-1 mt-10 border-2 border-white rounded-[25px] justify-end poppinsSemiBold text-color-lightBlue"
          >
            Subscribe Newsletter
          </motion.button>
          <a href="PeerSignin">
            <motion.h3
              whileHover={{ scale: "1.05" }}
              whileTap={{ scale: "0.95", rotate: "2.5deg" }}
              transition={{ duration: "0.125", ease: "easeInOut" }}
              className="poppinsSemiBold mt-10 body-1"
            >
              Peer Educators Academy
            </motion.h3>
          </a>
        </motion.div>
      </motion.footer>
    </div>
  );
};

export default Footer;
