import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import logo from "../assets/new_logo.png";
import footer from "../assets/Artboard – 13.jpg";
import { motion } from "framer-motion";
import { ContactLinks, footerLinks, socialMedia } from "../constants";
import baxk from "../assets/Artboard – 16.jpg";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Partners from "./Partners";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Footer } from ".";

const ContactUs = () => {
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
  }, []);
  return (
    <div>
      <div className="w-full px-20">
        <div className="mb-10">
          <NavBar />
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.25 }}
          className="content-center text-center w-full mt-40"
        >
          <h1 className="h1 poppinsSemiBold leading-normal text-darkBlue">
            Get in touch with us
          </h1>
          <h3 className="h5 xl:h4 xl:px-[20%] poppinsRegular leading-normal text-darkBlue">
            Each of RAHU's program, campaign and projects are tailored to impact
            nuggets of information
          </h3>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.25 }}
          className="xl:grid xl:grid-cols-1 w-full xl:px-20 justify-items-center items-center xl:py-20 mb-20"
        >
          <div className=" xl:flex xl:flex-cols-2 gap-6 xl:h-[600px] w-full mt-10">
            <div className="bg-white text-black border-4 h-[400px] xl:h-[600px] border-gray-500 xl:w-[60%] rounded-[30px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.769673126088!2d32.616062500000005!3d0.2829375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbdd2bb92d0f3%3A0xe6b9746a791efb25!2sReach%20A%20Hand%20Uganda%20Office!5e0!3m2!1sen!2sug!4v1712999582229!5m2!1sen!2sug"
                width="100%"
                height="100%"
                title="Reach A Hand Location"
                style={{ border: 2, borderRadius: 20 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-darkBlue text-white border-2 h-[300px] mt-10 xl:mt-0 border-gray-400 xl:w-[40%] rounded-[30px]">
              <div className="grid grid-cols-1 gap-4 justify-evenly text-white items-center">
                <motion.img
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                  src={baxk}
                  alt="HOME6"
                  className="xl:object-cover w-full relative rounded-[30px] h-[300px] xl:h-[600px]"
                />
                <div className="justify-between px-20 py-20 mt-10 absolute">
                  <ul>
                    <div className="flex justify-left gap-14">
                      <FaPhoneVolume
                        size={42}
                        className="fill-current text-white mt-6"
                      />
                      <li className="mt-5 poppinsRegular h5 leading-normal mb-6 hover:text-color-gold">
                        +256 414 697 037
                      </li>
                    </div>
                    <div className="flex justify-left gap-14">
                      <IoMdMail
                        size={42}
                        className="fill-current text-white mt-6 sm:w-10"
                      />
                      <li className="mt-5 poppinsRegular h5 leading-normal mb-6 hover:text-color-gold">
                        info@reachahand.org
                      </li>
                    </div>
                    <div className="flex justify-left gap-14">
                      <FaLocationDot
                        size={42}
                        className="fill-current text-white mt-6"
                      />
                      <li className="mt-5 poppinsRegular h5 leading-normal mb-6 hover:text-color-gold">
                        Plot 7502, Block 244, <br />
                        Heritage Village, Kasanga, <br />
                        Ggaba road
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="xl:px-20">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
