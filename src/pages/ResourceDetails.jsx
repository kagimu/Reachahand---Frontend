import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { CgArrowLeftO } from "react-icons/cg";
import logo from "../assets/new_logo.png";
import { ContactLinks, footerLinks, socialMedia } from "../constants";

const ResourceDetails = () => {
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);
  const { id } = useParams();

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page in the history stack
  };

  useEffect(() => {
    // Function to fetch reports data from Laravel API
    const fetchReports = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/reports/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch partner details");
        }
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error("Error fetching report details:", error);
      }
    };

    // Call fetchPartners function when component mounts
    fetchReports();
    console.log(reports, "reports");
  }, [id]);

  const convertHTMLToString = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.innerText;
  };

  return (
    <div>
      {" "}
      <div className="mt-10 mb-10 w-full">
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
        className="flex gap-4 ml-60 justify-items-start items-left mt-20 cursor-pointer"
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
        className="grid grid-cols-2 w-full mt-20 px-20"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="ml-40 mr-40 flex justify-start"
        >
          <img
            src={reports.image_url}
            alt={reports.id}
            className="rounded-[30px] h-[300px] w-[500px] object-cover border-2 border-gray-500"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className=" text-left -ml-40"
        >
          <h2 className="text-3xl poppinsSemiBold text-left mb-2">
            {reports.title}heyyy
          </h2>
          <p className="poppinsRegular text-lg leading-normal ">
            {convertHTMLToString(reports.desc)}hereee
          </p>
          <motion.p
            initial={{ scale: 1 }} // Add this line to set the initial scale
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: "2.5deg" }}
            transition={{ duration: 0.125, ease: "easeInOut" }}
            className="text-lightBlue text-lg"
          >
            {reports.year}
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-10 px-20"
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

export default ResourceDetails;
